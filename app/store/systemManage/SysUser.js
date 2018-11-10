Ext.define('App.store.systemManage.SysUser', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuser',
    model: 'App.model.systemManage.SysUser',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'api',
        url: '/api/SystemManage/GetSysUserPage'
    }
});
