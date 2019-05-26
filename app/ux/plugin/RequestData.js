/*
    *
    * 查询接口参数采用统一格式如下
    *  var RequestData = new {
    *      QueryItem:Object或者Array,
    *      PagingSetting:{
    *          PageCount:10,
    *          PageIndex:0,
    *          SortBy:"ASC"
    *          SortOrder:"field"
    *      }
    * }
    * 或者
    * var RequestData = Object或者Array
*/
Ext.define("App.ux.plugin.RequestData", {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.requestdata',

    /**
    * 
    * @param {Boolean} 
    */
    autoLoad: false,

    /**
    * 
    * @param {Boolean} pagination 分页参数
    */
    pagination: false,

    /**
    * 
    * @param {Function} params 初始化参数
    */
    params: Ext.emptyFn,

    /**
    * @param {Object}  参数 
    */
    root:null,

    /**
    * init function
    */
    init: function (scope) {
        var me, store; me = this; scope.autoLoad = false; me.scope = scope;
        Ext.defer(function () {
            store = scope.store;
            if (store != null) {
                if (me.params != Ext.emptyFn) {
                    App.Page.setExtraParamData(store, me.params());
                }else{
                    App.Page.setExtraParamData(store,{});
                }
                if (me.root != null) {
                    store.setRoot(me.root);
                }
                store.pagination = me.pagination;
                store.on("beforeload", me.onbeforeload);
                store.setAutoLoad(me.autoLoad);
            }
        },50);
    },

    destroy: function () {
        var me = this, scope = me.scope;
        if (scope != null) {
            scope.store.un("beforeload", me.onbeforeload);
        };
    },

    privates: {
        /**
        * 
        * @param {Boolean} 组件
        * private
        */
        scope: null,

        /*
        * store beforeload
        * private
        */
        onbeforeload: function (store, operation, eOpts) {
            var me = this, pagingSetting = {};
            if (me.pagination) {
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
                
                App.Page.setExtraParamData(store, { PagingSetting: pagingSetting });
            }
        }
    }
})