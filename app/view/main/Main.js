Ext.define("app.view.main.Main", {
    id: "viewport",
    extend: "Ext.container.Viewport",
    controller: "main",
    layout: 'fit',
    items: [
       { xtype: "home" },
        // { xtype: "login" }
    ]
})  