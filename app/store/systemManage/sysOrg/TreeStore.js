Ext.define('App.store.systemmanage.sysorg.TreeStore', {
    extend: 'Ext.data.TreeStore',
    autoLoad: false,
    alias: 'store.systemmanage.sysorg.treestore',
    //model: 'App.model.systemmanage.SysOrg',
    proxy: {
        type: 'api',
        reader: {
            type:"jsonreader",
            rootProperty: "children",
            datatype: config.DataType.TreeStore,
            idField: "SysOrgId",
            parentField: "ParentOrgId",
            isExpand: true,
            rootId: ""
        },
        url: '~/api/SystemManage/SysOrg/GetSysOrgTreeByRule',
    }
});
