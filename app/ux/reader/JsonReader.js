Ext.define('ux.reader.JsonReader', {
    extend: 'Ext.data.reader.Json',
    alias: "reader.JsonReader",
    raw: null,
    total: 0,
    records:[],
    message: '',
    success: false,
    rootProperty:"records",
    totalProperty:"total",
    successProperty:"success",
    messageProperty:"message",
    getResponseData: function (response) {
        var me,data,content,error;me=this;
        try {
            data = Ext.decode(response.responseText);
            me.raw = data;
            content=data.Data;
            if (Ext.isEmpty(content)) {
                return new Ext.data.ResultSet({
                    total: 0,
                    records: [],
                    success: true,
                    message: me.message
                });
            }
  
            if (!Ext.isEmpty(content.RecordCount)) {
                me.total = content.RecordCount;
            }

            if(content.Success){
                me.success = content.Success;
            }
           
            if(!Ext.isEmpty(content.List)){
                me.records = content.List;
            }

            if(!Ext.isEmpty(content.Code)){
                me.message = content.Code;
            }
            
            var resultSet =new Ext.data.ResultSet({
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