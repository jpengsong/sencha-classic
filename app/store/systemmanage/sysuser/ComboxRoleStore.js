Ext.define('App.store.systemmanage.sysuser.ComboxRoleStore', {
    autoLoad: true,
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuser.comboxrolestore',
    model: 'App.model.systemmanage.SysRole',
    proxy: {
        type: 'api',
        reader: {
            type: "jsonreader",
            datatype: config.DataType.ComboxStore
        },
        url: '~/api/SystemManage/SysRole/GetSysRoleAll',
    }
});
