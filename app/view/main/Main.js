Ext.define("app.view.main.Main", {
    id: "main",
    extend: "Ext.container.Viewport",
    controller: "main",
    layout: 'card',
    activeItem:0, 
    items: [
        { xtype: "login"},
        { xtype: "home" }
    ],
    listeners: {
        render: 'onMainViewRender'
    }
})  