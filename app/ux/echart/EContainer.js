Ext.define("App.echart.EContainer", {
    xtype: "econtainer",
    extend: "Ext.container.Container",
    listeners: {
        resize: function (me) {
            me.ec.resize();
        }
    }
})