Ext.define("app.view.main.Main", {
    id: "main",
    extend: "Ext.container.Viewport",
    controller: "main",
    layout: 'card',
    activeItem:0, 
    items: [
        { xtype: "home" },
        { xtype: "login"}
    ],
    listeners: {
        render: 'onMainViewRender'
    }
})  