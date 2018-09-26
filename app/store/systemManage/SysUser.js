Ext.define('App.store.systemManage.sysUser.SysUser', {
    extend: 'Ext.data.Store',
    alias: 'store.sysUser',
    model: 'App.model.systemManage.SysUser',
    proxy: {
        type: 'api',
        url: 'api/systemManage/SysUser'
    }
});
