Ext.define("App.view.systemManage.SysOrgModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.sysorg",
    stores: {
        treestore: {
            type: "systemmanage.sysorg.treestore"
        },
        gridstore: {
            type: "systemmanage.sysuser.gridstore"
        }
    }
})