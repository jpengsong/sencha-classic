Ext.define("App.ux.grid.GridPanel", {
    extend: 'Ext.grid.Panel',
    pageSize: 10,
    pagination: true,
    initComponent: function () {
        var me; me = this;
        me.initPagination();
        me.initAutoLoad();
        me.callParent();
    },
    params: function () {
        return { name: "ded" };
    },

    privates: {
        /**
        * 初始化分页控件
        * @param pagination为true启用
        * 
        */
        initPagination: function () {
            var me, paging; me = this;
            if (me.pagination) {
                paging = Ext.create("App.ux.pagingBar.PagingBar", {
                    border: 0,
                    pageSize: me.pageSize,
                    sorters: me.sorters,
                    displayInfo: true,
                    scope: me
                })
                me.bbar = paging;
            };
        },
        /*
        *
        * 查询接口参数采用统一格式如下
        *  var Data = new {
        *      QueryItem:[
        *          {key:"field1",Method:"=",Type:"string",Value:"***"},
        *          {key:"field2",Method:"=",Type:"string",Value:"***"}
        *      ],
        *      PagingInfo:{
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
                    proxy = store.getProxy();
                    store.on("beforeload", function (store, operation, eOpts) {
                        proxy.buildRequest = function (operation) {
                            var request,
                                initialParams, //初始化参数
                                extraParams,   //额外参数
                                condition,
                                queryItem,
                                pagingInfo
                            //初始化参数
                            if (Ext.isFunction(me.params)) {
                                initialParams = me.params();
                            }
                            //额外参数
                            extraParams = proxy.getExtraParams();
                            //参数
                            queryItem = Ext.apply(initialParams,extraParams);
                            condition["QueryItem"]=queryItem;
                            //是否启用分页
                            if (me.pagination) {
                                console.info(operation);
                                pagingInfo={};
                                pageIndex = store.currentPage;
                                pageSize = (pageIndex == undefined || pageIndex == null) ? me.pageSize : pageIndex * me.pageSize
                                condition.PagingSetting['PageSize'] = pageSize;
                                condition.PagingSetting["RowNum"] = pageSize - me.pageSize;
                            }
                            // sorters = operation.getSorters();
                            // if (!Ext.isEmpty(sorters)) {
                            //     condition.PagingSetting['SortField'] = "";
                            //     for (var i = 0; i < sorters.length; i++) {
                            //         condition.PagingSetting['SortField'] += sorters[i]._property + " " + sorters[i]._direction;
                            //         if ((i + 1) < sorters.length) {
                            //             condition.PagingSetting['SortField'] += ", ";
                            //         }
                            //     }
                            // }
                            // if (Ext.isEmpty(params["Data"])) {
                            //     params["Data"] = Ext.encode(condition);
                            // } else {
                            //     var paramData = Ext.decode(params["Data"]);
                            //     paramData = Ext.apply(paramData, condition);
                            //     params["Data"] = Ext.encode(paramData);
                            // }
                            // operationId = operation.getId();
                            // idParam = me.getIdParam();
                            // if (operationId !== undefined && params[idParam] === undefined) {
                            //     params[idParam] = operationId;
                            // }

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
                    });
                    if (autoload) {
                        store.load({
                            scope: this
                        });
                    }
                }
            }, 100);
        }
    }
})