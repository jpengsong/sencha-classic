Ext.define("ux.grid.GridPanel", {
    extend: 'Ext.grid.Panel',
    require: [
        'ux.pagingBar.PagingBar'
    ],
    width: '100%',
    height: '400',
    pageSize: 10,
    pagination: true,
    initComponent: function () {
        Ext.tip.QuickTipManager.init();
        var me; me = this;
        me.initGridPagination();
        me.callParent();
    },

    initGridPagination: function () {
        var me = this;
        if (me.pagination) {
            store = me.store;
            var paging = Ext.create("ux.pagingBar.PagingBar", {
                width: "100%",
                border: 0,
                pageSize: me.pageSize,
                sorters: me.sorters,
                displayInfo: true,
                scope: me
            })
            me.bbar = [paging];
            paging.bindStore(store);
        };

        store.on("beforeload", function () {
            me.load(store.currentPage);
        });
    },

    load: function (pageIndex) {
        var scope = this; scope.store.currentPage = pageIndex;
        scope.getStore().getProxy().buildRequest = function (operation) {
            var me = this, request, sorters, operationId, idParam;
            params = me.getExtraParams();
            var condition = {};
            condition.QueryItems = {};
            condition.PagingSetting = {};
            if (Ext.isFunction(scope.getParam)) {
                condition.QueryItems = scope.getParam();
            }
            if (scope.pagination) {
                pageSize = (pageIndex == undefined || pageIndex == null) ? scope.pageSize : pageIndex * scope.pageSize
                condition.PagingSetting['PageSize'] = pageSize;
                condition.PagingSetting["RowNum"] = pageSize - scope.pageSize;
            }
            sorters = operation.getSorters();
            if (!Ext.isEmpty(sorters)) {
                condition.PagingSetting['SortField'] = "";
                for (var i = 0; i < sorters.length; i++) {
                    condition.PagingSetting['SortField'] += sorters[i]._property + " " + sorters[i]._direction;
                    if ((i + 1) < sorters.length) {
                        condition.PagingSetting['SortField'] += ", ";
                    }
                }
            }
            if (Ext.isEmpty(params["Data"])) {
                params["Data"] = Ext.encode(condition);
            } else {
                var paramData = Ext.decode(params["Data"]);
                paramData = Ext.apply(paramData, condition);
                params["Data"] = Ext.encode(paramData);
            }
            operationId = operation.getId();
            idParam = me.getIdParam();
            if (operationId !== undefined && params[idParam] === undefined) {
                params[idParam] = operationId;
            }

            request = new Ext.data.Request({
                params: params,
                action: operation.getAction(),
                records: operation.getRecords(),
                url: operation.getUrl(),
                operation: operation,
                proxy: me
            });
            request.setUrl(me.buildUrl(request));
            operation.setRequest(request);
            return request;
        };
    }
})