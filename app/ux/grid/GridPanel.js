Ext.define("App.ux.grid.GridPanel", {
    extend: 'Ext.grid.Panel',
    pageSize: 10,
    currentPage: 1,
    pagination: true,
    initComponent: function () {
        var me; me = this;
        me.initPagination();
        me.initAutoLoad();
        me.callParent();
    },

    privates: {
        /**
        * 初始化分页控件
        * @param pagination为true启用
        * 
        */
        initPagination: function () {
            var me= this;
            if (me.pagination) {
                me.bbar = {
                    xtype: 'pagingtoolbar',
                    displayInfo: true,
                    plugins: {
                        'ux-progressbarpager': true
                    }
                }
            };
        },
        /*
        *
        * Grid查询接口参数采用统一格式如下
        *  var Data = new {
        *      QueryItem:[
        *          {key:"field1",Method:"=",Type:"string",Value:"***"},
        *          {key:"field2",Method:"=",Type:"string",Value:"***"}
        *      ],
        *      PagingSetting:{
        *          PageCount:10,
        *          PageIndex:0,
        *          SortBy:"ASC"
        *          SortOrder:"field"
        *      }
        * }
        */
        initAutoLoad: function () {
            var me = this, autoload = me.autoLoad, store, proxy;
            if (autoload) {
                me.autoLoad = false;
            }
            setTimeout(() => {
                store = me.getStore();
                if (store != null) {
                    store.setPageSize(me.pageSize);
                    proxy = store.getProxy();
                    proxy.buildRequest = function (operation) {
                        var request,
                            condition = {},
                            queryItem,
                            pagingSetting = {};
                        /***************************************QueryItem***************************************/
                        if (Ext.isFunction(me.getParams)) {
                            queryItem = me.getParams();
                        }
                        var extraParams = proxy.getExtraParams();
                        condition["QueryItem"] = Ext.apply(queryItem, extraParams);
                        /***************************************PagingSetting***************************************/
                        var limit = operation.getLimit();
                        var page = operation.getPage();
                        var sorters = operation.getSorters();
                        pagingSetting['PageCount'] = limit * page;
                        pagingSetting["PageIndex"] = limit * page - limit;
                        if (!Ext.isEmpty(sorters)) {
                            var sortOrder = [];
                            var sortBy = [];
                            for (var i = 0; i < sorters.length; i++) {
                                sortOrder[i] = sorters[i].getProperty();
                                sortBy[i] = sorters[i].getDirection();
                            }
                            pagingSetting['SortOrder'] = sortOrder.join(',');
                            pagingSetting['SortBy'] = sortBy.join(',');
                        }
                        condition["PagingSetting"] = pagingSetting;
                        var params = {
                            Data: Ext.encode(condition)
                        };
                        request = new Ext.data.Request({
                            params: params,
                            action: operation.getAction(),
                            records: operation.getRecords(),
                            url: operation.getUrl(),
                            operation: operation,
                            proxy: proxy
                        });
                        request.setUrl(proxy.buildUrl(request));
                        operation.setRequest(request);
                        return request;
                    }
                    if (autoload) {
                        store.loadPage(me.currentPage);
                    }
                }
            },0);
        }
    }
})