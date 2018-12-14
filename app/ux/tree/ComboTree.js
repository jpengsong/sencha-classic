Ext.define('App.ux.tree.TreePicker', {
    extend: 'Ext.form.field.Picker',
    xtype: 'comboxtree',
    config: {
        autoLoad:true,
        store: null,
        displayField: "text",
        width: "100%",
        height: 200,
        rootVisible: false,
    },
    
    createPicker: function () {
        var me = this, treepanel;
        treepanel = Ext.create({
            xtype: "treepanel",
            floating: true,
            displayField: me.displayField,
            width: me.width,
            height: me.height,
            store: me.store,
            rootVisible: me.rootVisible,
            plugins: {
                requestdata: {
                    autoLoad: me.autoLoad,
                    root: {
                        expanded: true,
                        children: []
                    }
                }
            }
        });
        return treepanel;
    },

    setStore: function (store) {
        var me = this;
        me.store = store;
    },

    getStore: function () {
        var me = this;
        return me.store;
    },

    controller:{
        onRender: function (me, eOpts) {
            Ext.defer(function () {
                me.getPicker();
            }, 500)
        }
    },

    listeners: {
        render:"onRender"
    }
})