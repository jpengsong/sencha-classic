Ext.define('App.ux.store.GridStore', {
    extend: 'Ext.data.Store',
    listeners: {
        /*
         *
         * Grid查询接口参数采用统一格式如下
         *  var RequestData = new {
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
        beforeload: function (store, operation, eOpts) {
            var me = this,
                pagingSetting = {};
            //分页参数
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
                App.Ajax.setExtraParamData(store, { PagingSetting: pagingSetting });
            }
        }
    }
});
