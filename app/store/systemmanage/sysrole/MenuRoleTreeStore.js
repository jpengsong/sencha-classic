Ext.define('App.store.systemmanage.sysrole.MenuRoleTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.systemmanage.sysmenu.menuroletreestore',
    model: 'App.model.systemmanage.SysMenuButtonDetail',
    autoLoad: false,
    proxy: {
        type: 'api',
        reader: {
            type:"jsonreader",
            rootProperty: "children",
            datatype: config.DataType.TreeStore,
            idField: "Id",
            parentField: "ParentId",
            isExpand: true,
            rootId: "00000000-0000-0000-0000-000000000000"
        },
        url: '/api/SystemManage/SysMenuRole/GetSysMenuRoleByRule',
    }
});
