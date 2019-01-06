Ext.define('App.store.systemmanage.sysuserrole.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuserrole.userrolestore',
    model: 'App.model.systemmanage.sysuserrole.SysUserRole',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'api',
        reader: {
            type:"jsonreader",
            datatype:config.DataType.GridStore
        },
        url: '~/api/systemmanage/sysuserrole/GetSysUserRoleByRule',
    }
});