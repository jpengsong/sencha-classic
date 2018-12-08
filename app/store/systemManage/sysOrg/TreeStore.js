Ext.define('App.store.systemManage.sysOrg.TreeStore', {
    extend: 'Ext.data.TreeStore',
    autoLoad: false,
    alias: 'store.systemmanage.sysorg.treestore',
    model: 'App.model.systemManage.sysOrg.SysOrg',
    proxy: {
        type: 'api',
        reader: {
            type: "JsonReader",
            rootProperty: "children",
            datatype: config.DataType.TreeStore,
            idField: "sysOrgId",
            parentField: "parentOrgId",
            textField: "orgName",
            isExpand: true,
            rootId: "0"
        },
        url: '/api/SystemManage/SysOrg/GetSysOrgByRule',
    }
});
