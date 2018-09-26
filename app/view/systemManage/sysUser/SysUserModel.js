Ext.define("App.view.systemManage.SysUserModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.sysuser",
    stores: {
        store: {
            type: "sysUser"
        }
    }
})