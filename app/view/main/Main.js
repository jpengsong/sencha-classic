Ext.define("app.view.main.Main", {
    id: "view",
    extend: "Ext.container.Viewport",
    controller: "main",
    layout: 'fit',
    items: [
        //  { xtype: "home" },
      { xtype: "login" }
    ],
    listeners:{
        render: 'onMainViewRender'
    }
})  