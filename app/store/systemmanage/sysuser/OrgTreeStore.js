Ext.define('App.store.systemmanage.sysuser.OrgTreeStore', {
    extend: 'Ext.data.TreeStore',
    autoLoad: false,
    alias: 'store.systemmanage.sysuser.orgtreestore',
    model: 'App.model.systemmanage.SysOrg',
    proxy: {
        type: 'server',
        reader: {
            type:"jsonreader",
            rootProperty: "children",
            datatype: config.DataType.TreeStore,
            idField: "SysOrgId",
            parentField: "ParentOrgId",
            isExpand: true,
            rootId: "00000000-0000-0000-0000-000000000000"
        },
        url: '/api/SystemManage/SysOrg/GetSysOrgTreeByRule',
    }
});