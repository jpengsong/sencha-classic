Ext.define("app.view.main.HomeModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.home",
    stores: {
        navigation: {
            type: "main.Navigation"
        }
    }
})