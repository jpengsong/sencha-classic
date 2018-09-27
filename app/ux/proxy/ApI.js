Ext.define('ux.proxy.API', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.api',
    reader:Ext.create("ux.reader.JsonReader")
});