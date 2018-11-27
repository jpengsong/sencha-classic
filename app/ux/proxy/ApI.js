Ext.define('App.ux.proxy.API', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.api',
    reader: Ext.create("App.ux.reader.JsonReader"),
    buildRequest: function (operation) {
        var me = this, request;
        request = new Ext.data.Request({
            params: me.getExtraParams(),
            action: operation.getAction(),
            records: operation.getRecords(),
            url: operation.getUrl(),
            operation: operation,
            proxy: me
        });
        request.setUrl(me.buildUrl(request));
        operation.setRequest(request);
        return request;
    },
    extraParams:{
        RequestData:"{}"
    }
});