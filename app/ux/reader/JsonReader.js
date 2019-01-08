﻿Ext.define('App.ux.reader.JsonReader', {
    extend: 'Ext.data.reader.Json',
    alias: "reader.jsonreader",
    total: 0,
    records: [],
    message: '',
    success: false,
    rootProperty: "records",
    totalProperty: "total",
    successProperty: "success",
    messageProperty: "message",
    idField: null,
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
            data = Ext.decode(response.responseText);
            content = data.Data;
            if (Ext.isEmpty(data)) {
                return new Ext.data.ResultSet({
                    total: 0,
                    records: [],
                    success: true,
                    message: me.message
                });
            }
            if (content.List != undefined && content.List != null) {
                if (me.datatype == config.DataType.GridStore) {
                    me.records = content.List;
                    if (content.RecordCount != undefined && content.RecordCount != null) {
                        me.total = content.RecordCount;
                    } else {
                        me.total = 0;
                    }
                } else if (me.datatype == config.DataType.TreeStore) {
                    me.records = App.TreeNode.bindTreeData(
                        content.List,
                        me.idField,
                        me.parentField,
                        me.iconClsField,
                        me.isExpand,
                        me.isAllExpand,
                        me.rootId,
                        me.checkedField);
                    return me.records;
                } else if (me.datatype == config.DataType.ComboxStore) {
                    me.records = content.List;
                }
            } else {
                me.records = [];
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