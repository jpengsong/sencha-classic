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
            idField: "sysOrgId",
            parentField: "parentOrgId",
            isExpand: true,
            rootId: ""
        },
        url: '~/api/systemmanage/sysorg/GetSysOrgTreeByRule',
    }
});
