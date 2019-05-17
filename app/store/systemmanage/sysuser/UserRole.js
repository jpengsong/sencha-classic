Ext.define('App.store.systemmanage.sysuser.UserRole', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuser.userrole',
    model: 'App.model.systemmanage.SysUserRole',
    proxy: {
        type: 'api',
        url: '/api/SystemManage/SysUser/GetSysUserRoleByRule',
        reader: {
            type: "jsonreader",
            datatype: config.DataType.ComboxStore
        }
    }
});
