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
            rootId: "00000000-0000-0000-0000-000000000000"
        }
    },
    root: {
        expanded: false
    }
});
