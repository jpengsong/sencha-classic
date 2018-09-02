Ext.define('ux.framework.Reader', {
    extend: 'Ext.data.reader.Json',
    type: "",
    raw: null,
    total: 0,
    message: '',
    customdata: null,
    idField: '',
    iconCls: '',
    parentField: '',
    parentValue: null,
    loadType: 'sync',
    isExpend: false,
    isAllExpend: false,
    nodeLevel: '',
    getResponseData: function (response) {
        var me = this, responseText, data, error;
        try {
            responseText = Ext.decode(response.responseText);
            if (!Ext.isEmpty(responseText.Data)) {
                data = responseText.Data;
            }

            me.success = true;
            if (data.length == 0 && me.type != config.StoreType.TreeStore) {
                return new Ext.data.ResultSet({
                    total: 0,
                    count: 0,
                    records: [],
                    success: true,
                    message: this.message
                });
            }

            this.recordCount = data.recordCount;
            data = data.records;
            if (me.type == config.StoreType.TreeStore) {
                me.raw = ux.Tree.bindTreeData(data, null, me.idField, me.parentField, me.isExpend, me.isAllExpend, me.nodeLevel, null, me.loadType, me.iconCls);
            } else if (me.type == config.StoreType.GridStore) {
                data.total = this.recordCount;
                me.raw = data;
            } else if (me.type == config.StoreType.ComboStore) {
                data.total = this.recordCount;
                me.raw = data;
            }
            return me.raw;
        } catch (ex) {
            error = new Ext.data.ResultSet({
                total: 0,
                count: 0,
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