Ext.define("App.view.systemmanage.sysorg.SysOrgModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.sysorg",
    stores: {
        treestore: {
            type: "systemmanage.sysorg.treestore"
        },
        
        gridstore: {
            type: "systemmanage.sysorg.gridstore"
        }
    }
})