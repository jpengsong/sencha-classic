Ext.define('App.store.systemmanage.sysuser.UserRole', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuser.userrole',
    model: 'App.model.systemmanage.sysuserrole.SysUserRole',
    proxy: {
        type: 'api',
        url: '~/api/systemmanage/sysuserrole/GetSysUserRoleByRule',
        reader: {
            type: "jsonreader",
            datatype: config.DataType.ComboxStore
        }
    }
});
