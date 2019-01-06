Ext.define("App.view.systemmanage.sysuser.SysUserModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.sysuser",
    stores: {
        gridstore: {
            type: "systemmanage.sysuser.gridstore"
        },
        
        userrole:{
            type: "systemmanage.sysuserrole.userrolestore"
            
        },

        isenablestore: {
            type: "comm.isenablestore"
        }
    }
})