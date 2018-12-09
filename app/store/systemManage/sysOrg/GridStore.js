Ext.define('App.store.systemmanage.sysorg.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysorg.gridstore',
    model: 'App.model.systemmanage.sysorg.SysOrg',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'api',
        reader: Ext.create("App.ux.reader.JsonReader",{
            datatype:config.DataType.GridStore
        }),
        url: '/api/systemmanage/sysorg/GetSysOrgPage',
    }
});