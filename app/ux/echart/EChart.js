Ext.define("App.echart.EContainer", {
    xtype: "echart",
    extend: "Ext.container.Container",
    listeners: {
        resize: function (me) {
            me.ec.resize();
        }
    }
})