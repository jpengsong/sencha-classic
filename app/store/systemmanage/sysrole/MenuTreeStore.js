Ext.define('App.store.systemmanage.sysrole.MenuTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.systemmanage.sysmenu.menutreestore',
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
            rootId: "00000000-0000-0000-0000-000000000000",
            checked:false
        },
        url: '/api/SystemManage/SysMenu/GetSysMenuButtonTreeDetail',
    }
});
