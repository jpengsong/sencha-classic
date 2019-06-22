Ext.define("App.view.systemmanage.sysmenu.SysRoleModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.sysmenu",
    stores: {
        treestore: {
            type: "systemmanage.sysmenu.treestore"
        }
    }
})