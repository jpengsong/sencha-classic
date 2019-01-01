Ext.define('App.store.systemmanage.sysmenu.TreeStore', {
    extend: 'Ext.data.TreeStore',
    autoLoad: false,
    alias: 'store.systemmanage.sysmenu.treestore',
    model: 'App.model.systemmanage.sysmenu.SysMenu',
    proxy: {
        type: 'api',
        reader: {
            type:"jsonreader",
            rootProperty: "children",
            datatype: config.DataType.TreeStore,
            idField: "sysMenuId",
            parentField: "parentId",
            textField: "MenuName",
            isExpand: true,
            rootId: "0"
        },
        url: '/api/systemmanage/sysmenu/GetSysMenuByRule',
    }
});
