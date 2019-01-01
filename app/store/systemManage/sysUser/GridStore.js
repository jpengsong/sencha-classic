Ext.define('App.store.systemmanage.sysuser.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuser.gridstore',
    model: 'App.model.systemmanage.sysuser.SysUser',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'api',
        reader: {
            type:"jsonreader",
            datatype:config.DataType.GridStore
        },
        url: '~/api/systemmanage/sysuser/GetSysUserPage',
    }
});