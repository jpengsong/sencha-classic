Ext.define('App.ux.reader.JsonReader', {
    extend: 'Ext.data.reader.Json',
    alias: "reader.JsonReader",
    total: 0,
    records: [],
    message: '',
    success: false,
    rootProperty: "records",
    totalProperty: "total",
    successProperty: "success",
    messageProperty: "message",
    idField: null,
    textField: null,
    parentField: null,
    rootId: null,
    rootNode: {},
    iconClsField: null,
    checkedField: false,
    isExpand: false,
    isAllExpand: false,
    getResponseData: function (response) {
        var me, responseData, data, error; me = this;

        try {
            responseData = Ext.decode(response.responseText);
            data = responseData.Data;
            if (Ext.isEmpty(data)) {
                return new Ext.data.ResultSet({
                    total: 0,
                    records: [],
                    success: true,
                    message: me.message
                });
            }
            if (data.List != undefined && data.List != null) {
                if (me.datatype == config.DataType.GridStore) {
                    me.records = data.List;
                } else if (me.datatype == config.DataType.TreeStore) {
                    me.records = App.TreeNode.bindTreeData(
                        data.List,
                        me.idField,
                        me.parentField,
                        me.textField,
                        me.iconClsField,
                        me.isExpand,
                        me.isAllExpand,
                        me.rootId,
                        me.checkedField);
                }
                return me.records;
            } else {
                me.records = [];
            }
            if (data.RecordCount != undefined && data.RecordCount != null) {
                me.total = data.RecordCount;
            } else {
                me.total = 0;
            }
            if (data.Success) {
                me.success = data.Success;
            }
            var resultSet = new Ext.data.ResultSet({
                total: me.total,
                records: me.records,
                success: me.success,
                message: me.message
            });
            return resultSet;
        } catch (ex) {
            error = new Ext.data.ResultSet({
                total: 0,
                records: [],
                success: false,
                message: ex.message
            });
            this.fireEvent('exception', this, response, error);
            Ext.Logger.warn('Unable to parse the JSON returned by the server');
            return error;
        }
    }
});