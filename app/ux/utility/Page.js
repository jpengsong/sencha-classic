
/**
 * 处理页面的工具类 
 */
Ext.define('App.ux.utility.Page', {
    alternateClassName: ['App.Page'],
    statics: {
         /**
         * 获取组件 QueryItems ,适用于所有请求。
         * @param {Object} component
         */
        getQueryItems: function (component) {
            var queryItems = [], queryItem, fields = Ext.ComponentQuery.query("field", component);
            Ext.Array.each(fields, function (field, index) {
                queryItem = { key: "", Value: "", Method: "", Type: "" };
                queryItem.key = field.name;
                queryItem.Value = field.getValue();
                if (!Ext.isEmpty(field.method)) {
                    queryItem.Method = field.method;
                }
                if (!Ext.isEmpty(field.type)) {
                    queryItem.Type = field.type;
                }
                if (!Ext.isEmpty(queryItem.key)) {
                    queryItems.push(queryItem);
                }
            })
            return queryItems;
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


