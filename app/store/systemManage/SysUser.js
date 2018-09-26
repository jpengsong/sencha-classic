Ext.define('App.store.systemManage.SysUser', {
    extend: 'Ext.data.Store',
    autoLoad: 'true',
    alias: 'store.sysuser',
    model: 'App.model.systemManage.SysUser',
    proxy: {
        type: 'api',
        url: 'api/systemmanage/sysuser'
    }
});
