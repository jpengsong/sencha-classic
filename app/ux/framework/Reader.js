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
                data = Ext.decode(responseText.Data);
            }
            me.success = true;
            if (data.length == 0 && me.type != Config.StoreType.TreeStore) {
                return new Ext.data.ResultSet({
                    total: 0,
                    count: 0,
                    records: [],
                    success: true,
                    message: this.message
                });
            }
            if (me.type == Config.StoreType.TreeStore) {
                me.raw = ux.Tree.bindTreeData(data, null, me.idField, me.parentField, me.isExpend, me.isAllExpend, me.nodeLevel, null, me.loadType, me.iconCls);
            } else if (me.type == Config.StoreType.GridStore) {
                data = data.List;
                data.total = this.recordCount;
                return data;
            } else if (me.type == Config.StoreType.ComboStore) {
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