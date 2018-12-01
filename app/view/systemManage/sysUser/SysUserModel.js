Ext.define("App.view.systemManage.SysUserModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.sysuser",
    stores: {
        gridstore: {
            type: "systemmanage.sysuser.gridstore"
        }
    }
})