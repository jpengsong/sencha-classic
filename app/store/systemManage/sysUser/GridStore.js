Ext.define('App.store.systemManage.sysUser.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuser.gridstore',
    model: 'App.model.systemManage.sysUser.SysUser',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'api',
        reader: Ext.create("App.ux.reader.JsonReader",{
            datatype:config.DataType.GridStore
        }),
        url: '/api/SystemManage/sysUser/GetSysUserPage',
    }
});