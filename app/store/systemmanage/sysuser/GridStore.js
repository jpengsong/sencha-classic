Ext.define('App.store.systemmanage.sysuser.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysuser.gridstore',
    model: 'App.model.systemmanage.SysUser',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'server',
        reader: {
            type:"jsonreader",
            datatype:config.DataType.GridStore
        },
        url: '/api/SystemManage/SysUser/GetSysUserPage',
    },
    sorters: [{
        property: 'ModifyDate',
        direction: 'DESC'
    }]
});