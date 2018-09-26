Ext.define("App.view.main.MainModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.main",
    stores: {
        navigation: {
            type: "main.Navigation"
        },
        plist:{
            type:"main.Plist"
        }
    }
})