Ext.define("App.view.main.MainModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.main",
    stores: {
        navigation: {
            type: "systemmanage.sysmain.navigation"
        },
        plist:{
            type:"main.Plist"
        }
    }
})