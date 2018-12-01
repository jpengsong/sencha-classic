Ext.define('App.store.systemManage.sysUser.GridStore', {
    extend: 'App.ux.store.GridStore',
    alias: 'store.systemmanage.sysuser.gridstore',
    model: 'App.model.systemManage.sysUser.SysUser',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'api',
        url: '/api/SystemManage/sysUser/GetSysUserPage',
    }
});