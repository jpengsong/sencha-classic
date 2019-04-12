Ext.define("App.view.main.MainModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.main",
    stores: {
        navigation: {
            type: "main.navigation"
        },
        plist:{
            type:"main.plist"
        }
    }
})