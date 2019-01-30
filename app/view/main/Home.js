Ext.define("App.view.main.Home", {
    xtype:"home",
    routeId:"home",
    extend: "Ext.panel.Panel",
    iconCls: "x-fa fa-laptop",
    title: "首页",
    scrollable: Ext.scroll.Scroller({ y: true, x: false }),
    layout: {
        type: "vbox",
        align: "stretch"
    },
    items: []
})