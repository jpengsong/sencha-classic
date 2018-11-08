Ext.define('App.store.systemManage.SysUser', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuser',
    model: 'App.model.systemManage.SysUser',
    proxy: {
        type: 'api',
        url: 'api/systemmanage/sysuser'
    }
});
