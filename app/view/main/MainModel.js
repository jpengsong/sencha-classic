Ext.define("app.view.main.MainModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.main",
    stores: {
        navigation: {
            type: "main.Navigation"
        }
    }
})