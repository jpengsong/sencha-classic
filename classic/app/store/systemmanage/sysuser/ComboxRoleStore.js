Ext.define('App.store.systemmanage.sysuser.ComboxRoleStore', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuser.comboxroleStore',
    model: 'App.model.systemmanage.SysRole',
    proxy: {
        type: 'api',
        reader: {
            type: "jsonreader",
            datatype: config.DataType.ComboxStore
        },
        url: '/api/SystemManage/SysRole/GetSysRoleAll'
    }
});