Ext.define("app.view.main.MainModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.main",
    data: {
        themeText: "使用中",
        ui: {
            darkblue: "#025b80",
            gules: "#d32f2f",
            neptune: "#157fcc",
            gray: "#d0d0d0",
            aria: "#3a4155",
            green:"#38a45a"
        }
    },
    stores: {
        MenuLocationStore: {
            type: "MenuLocationStore"
        }
    }
})