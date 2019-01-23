Ext.define("App.ux.page.Page", {
    extend: "Ext.panel.Panel",
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    bodyStyle: {
        "background-color": "#fff"
    },
    treeList: null,
    gridList: null,
    queryList: null,
    initComponent: function () {
        var me = this;
        me.defaultPageLayout();
        me.callParent();
    },

    defaultPageLayout: function () {
        var me = this, treePanel, gridPanel, queryPanel, leftItems, rightItems; me.items = [];
        leftItems = {
            xtype: "container",
            layout: {
                type: "vbox",
                align: 'stretch'
            },
            items: []
        };

        rightItems = {
            layout: {
                type: "vbox",
                align: 'stretch'
            },
            flex: 1,
            items: []
        };

        if (me.treeList.getCount() > 0) {
            leftItems.width = me.treeWidth;
            treePanel = me.treeList.first();
            treePanel.flex = 1;
            leftItems.items[leftItems.items.length] = treePanel;
        }

        if (me.queryList.getCount() > 0) {
            queryPanel = me.queryList.first();
            rightItems.items[rightItems.items.length] = queryPanel;
        }

        if (me.gridList.getCount() > 0) {
            gridPanel = me.gridList.first();
            gridPanel.flex = 1;
            rightItems.items[rightItems.items.length] = gridPanel;
        }
        me.items = [leftItems, rightItems];
    },

    addQuery: function (key, query) {
        var me = this;

        if (me.queryList.containsKey(key)) {
            me.queryList.removeAtKey(key);
        }
        me.queryList.add(key, query);
    },

    getQuery: function (key) {
        var me = this;

        if (!me.queryList.containsKey(key)) {
            return null;
        }
        else {
            return me.queryList.get(key);
        }
    },

    addWindow: function (key, window) {
        var me = this;
        if (me.windowList.containsKey(key)) {
            me.windowList.removeAtKey(key);
        }
        me.windowList.add(key, window);
    },

    getWindow: function (key) {
        var me = this;
        if (!me.windowList.containsKey(key)) {
            return null;
        }
        else {
            return me.windowList.get(key);
        }
    },

    addGrid: function (key, grid) {
        var me = this;

        if (me.gridList.containsKey(key)) {
            me.gridList.removeAtKey(key);
        }
        me.gridList.add(key, grid);
    },

    getGrid: function (key) {
        var me = this;

        if (!me.gridList.containsKey(key)) {
            return null;
        }
        else {
            return me.gridList.get(key);
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
        me.windowList = new Ext.util.MixedCollection();
        me.queryList = new Ext.util.MixedCollection();
        me.gridList = new Ext.util.MixedCollection();
        me.treeList = new Ext.util.MixedCollection();
        me.callParent([config]);
    }
})