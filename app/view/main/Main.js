Ext.define("app.view.main.Main", {
    id: "main",
    extend: "Ext.container.Viewport",
    controller: "main",
    layout: 'fit',
    activeItem:1, 
    items: [
        { xtype: "home", routeId: "home" },
        { xtype: "login" , routeId: "login" }
    ],
    listeners: {
        render: 'onMainViewRender'
    }
})  