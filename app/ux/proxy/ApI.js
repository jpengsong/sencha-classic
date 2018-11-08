Ext.define('App.ux.proxy.API', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.api',
    reader:Ext.create("App.ux.reader.JsonReader")
});