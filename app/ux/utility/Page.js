
/**
 * 处理页面的工具类 
 */
Ext.define('ux.utility.Page', {
    alternateClassName: ['ux.Page'],
    statics: {
        getQueryItems: function (queryItems) {
            var me, query = {}; me = this;
            for (var i = 0; i < queryItems.items.length; i++) {
                if (!Ext.isEmpty(queryItems.items[i].getValue()) && !Ext.isEmpty(queryItems.items[i].name)) {
                    query[queryItems.items[i].name] = queryItems.items[i].getValue();
                }
            }
            return query;
        },

        setQueryItems: function (store, queryItems) {
            var queryData, query;
            var queryData = store.getProxy().extraParams.Data;
            if (Ext.isEmpty(queryData)) {
                queryData = {};
                queryData.QueryItems = {};
            } else {
                queryData = Ext.decode(queryData);
            }
            queryData.QueryItems = Ext.apply(queryData.QueryItems, queryItems);
            store.getProxy().setExtraParam("Data", Ext.encode(queryData));
        },

        //选择行数据
        selectionModel: function (grid, isMultSet) {
            var records, rs; rs = false;
            records = grid.getSelectionModel().getSelection();
            if (records.length > 0) {
                if (records.length > 1 && !isMultSet) {
                    Ext.Msg.alert("提示", "只能选择一行数据");
                } else {
                    rs = true;
                }
            } else {
                Ext.Msg.alert("提示", "请选择数据,再操作！");
            }
            return rs;
        },

        //删除
        getGridField: function (grid, field) {
            var records, ids; ids = new Array();
            records = grid.getSelectionModel().getSelection();
            for (var i = 0; i < records.length; i++) {
                ids.push(records[i].data[field]);
            }
            return ids;
        }
    }
})


