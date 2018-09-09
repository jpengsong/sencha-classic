Ext.define("app.view.main.MainModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.main",
    data: {
        themeText: "使用中",
        backColor: {
            first: "#5FA2DD",
            second: "#025B80",
            third: "#157fcc",
            fourth: "#1DA02B",
            fifth: "#02A2AA",
            sixth: "#d32f2f"
        }
    },
    stores: {
        MenuLocationStore: {
            type: "main.MenuLocationStore"
        },
        NavigationStore: {
            type: "main.Navigation"
        }
    }
})