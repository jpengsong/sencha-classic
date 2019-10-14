Ext.define('App.store.systemmanage.sysorg.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.systemmanage.sysorg.gridstore',
    model: 'App.model.systemmanage.SysOrg',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'server',
        reader:{
            type:"jsonreader",
            datatype:config.DataType.GridStore
        },
        url: '/api/SystemManage/SysOrg/GetSysOrgPage',
    },
    sorters: [{
        property: 'ModifyDate',
        direction: 'DESC'
    }]
});