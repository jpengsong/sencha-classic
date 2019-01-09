Ext.define('App.store.systemmanage.sysmain.Navigation', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.systemmanage.sysmain.navigation',
    model: 'App.model.systemmanage.SysMenu',
    proxy: {
        type: 'api',
        url: '~/api/systemmanage/sysmenu/GetSysMenuByRule',
        reader: {
            type:"jsonreader",
            rootProperty: "children",
            datatype: config.DataType.TreeStore,
            idField: "sysMenuId",
            parentField: "parentId",
            iconClsField:"IconCls",
            isExpand: true,
            rootId: ""
        }
    },
    root: {
        expanded: true
    }
});
