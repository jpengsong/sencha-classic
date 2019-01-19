Ext.define("App.view.systemmanage.sysrole.SysRoleModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.sysrole",
    stores: {
        gridstore: {
            type: "systemmanage.sysrole.gridstore"
        }
    }
})