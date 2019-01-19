Ext.define('App.store.main.Navigation', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.main.navigation',
    model: 'App.model.systemmanage.SysMenu',
    proxy: {
        type: 'api',
        url: '~/api/SystemManage/SysMenu/GetSysMenuByRule',
        reader: {
            type:"jsonreader",
            rootProperty: "children",
            datatype: config.DataType.TreeStore,
            idField: "SysMenuId",
            parentField: "ParentId",
            iconClsField:"IconCls",
            isExpand: false,
            rootId: ""
        }
    },
    root: {
        expanded: false
    }
});
