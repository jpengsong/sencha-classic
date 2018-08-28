Ext.define('ux.framework.Writer', {
    extend: 'Ext.data.writer.Json',
    encode:true,
    type: "",
    writeRecords: function (request, data) {
        return request;
    }
})