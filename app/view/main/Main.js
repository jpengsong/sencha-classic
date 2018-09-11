Ext.define("app.view.main.Main", {
    extend: "Ext.container.Viewport",
    controller: "main",
    viewModel: "main",
    layout: 'fit',
    items: [
        { xtype: "home" }
    ], listeners: {
        //afterrender: "onAfterender"
    }
})  