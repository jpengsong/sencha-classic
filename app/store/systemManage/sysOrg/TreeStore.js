Ext.define('App.store.systemManage.sysOrg.TreeStore', {
    extend: 'App.ux.store.GridStore',
    alias: 'store.systemmanage.sysorg.treestore',
    model: 'App.model.systemManage.sysOrg.SysOrg',
    pageSize: 10,
    remoteSort:true,
    proxy: {
        type: 'api',
        url: '/api/SystemManage/SysOrg/GetSysOrgByRule',
    }
});
