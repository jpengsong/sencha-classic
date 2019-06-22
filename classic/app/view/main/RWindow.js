Ext.define("App.view.main.Rpanel", {
    extend: "Ext.window.Window",
    xtype: "rwindow",
    draggable: false,
    header: false,
    resizable: false,
    modal: true,
    autoShow: true,
    style:{
        "border-width":"0px"
    },
    listeners: {
        maskclick: function (me) {
            me.animate({
                to: {
                    x: me.getX() + me.getWidth()
                },
                duration: 250,
                listeners: {
                    afteranimate: function () {
                        me.close();
                    }
                }
            });
        },
        show: function (me) {
            me.animate({
                to: {
                    x: me.getX() - me.getWidth()
                },
                duration: 250
            });
           
            var els = Ext.select("body > .x-mask ", true);
            if (els.elements.length > 0) {
                els.elements[0].dom.style.opacity = "0.3";
            }
        }
    }
})