Ext.define('App.ux.proxy.Server', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.server',
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
        request.setUrl(config.Url + request.getProxy().getUrl());
        operation.setRequest(request);
        return request;
    },
    sendRequest: function (request) {
        var currentConfig = request.getCurrentConfig(); currentConfig.nosim = true;
        request.setRawRequest(Ext.Ajax.request(currentConfig));
        this.lastRequest = request;
        return request;
    },
    extraParams: {
        RequestData: "{}"
    }
});