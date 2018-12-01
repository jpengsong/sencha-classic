Ext.define("App.view.systemManage.SysOrgModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.sysorg",
    stores: {
        Treestore: {
            type: "systemmanage.sysorg.treestore"
        }
    }
})