Ext.define('App.store.systemmanage.sysrole.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysrole.gridstore',
    model: 'App.model.systemmanage.sysrole.SysRole',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'api',
        reader: Ext.create("App.ux.reader.JsonReader",{
            datatype:config.DataType.GridStore
        }),
        url: '/api/systemmanage/sysrole/GetSysRolePage',
    }
});