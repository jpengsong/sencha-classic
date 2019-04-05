Ext.define("App.ux.page.TreePage", {
    extend: "Ext.panel.Panel",
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    treeList: null,

    pageList: null,

    initComponent: function () {
        var me = this;
        me.defaultPageLayout();
        me.callParent();
    },

    defaultPageLayout: function () {
        var me = this, treePanel, pagePanel; me.items = [];
        if (me.treeList.getCount() > 0) {
            treePanel = me.treeList.first();
            treePanel.width = me.treeWidth;
        }

        if (me.pageList.getCount() > 0) {
            pagePanel = me.pageList.first();
            pagePanel.flex = 1;
            pagePanel.margin = "0px 0px 0px 2px";
        }
        me.items = [treePanel, pagePanel];
    },

    addPage: function (key, page) {
        var me = this;
        
        if (me.pageList.containsKey(key)) {
            me.pageList.removeAtKey(key);
        }
        me.pageList.add(key, page);
    },

    getPage: function (key) {
        var me = this;

        if (!me.pageList.containsKey(key)) {
            return null;
        }
        else {
            return me.pageList.get(key);
        }
    },

    addTree: function (key, tree, treeWidth) {
        var me; me = this;
        me.treeWidth = treeWidth;
        if (me.treeList.containsKey(key)) {
            me.treeList.removeAtKey(key);
        }
        me.treeList.add(key, tree);
    },

    getTree: function (key) {
        var me = this;

        if (!me.treeList.containsKey(key)) {
            return null;
        }
        else {
            return me.treeList.get(key);
        }
    },

    constructor: function (config) {
        var me = this;
        me.pageList = new Ext.util.MixedCollection();
        me.treeList = new Ext.util.MixedCollection();
        me.callParent([config]);
    }
})