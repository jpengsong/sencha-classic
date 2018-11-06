Ext.define("App.ux.page.Page", {
    extend: "Ext.panel.Panel",
    layout: "border",
    bodyStyle:{
        "background-color":"#fff"
    },
    treeList: null,
    gridList: null,
    queryList: null,
    treeWidth: null,
    items:[],
    initComponent: function () {
        var me = this;
        me.defaultPageLayout();
        me.callParent();
    },

    defaultPageLayout: function () {
        var me = this, gridPanel, queryPanel, leftPanel;
        if (me.queryList.getCount() > 0) {
            queryPanel = me.queryList.first();
            queryPanel.region = 'north';
            me.items[me.items.length] =queryPanel;
        }

        if (me.gridList.getCount() > 0) {
            gridPanel = me.gridList.first();
            gridPanel.setMargin("2 0 0 0");
            gridPanel.region = 'center';
            me.items[me.items.length] =gridPanel;
        }

        if (me.treeList.getCount() > 0) {
            leftPanel = me.treeList.first();
            leftPanel.region = 'west';
            if (!Ext.isEmpty(treeWidth)) {
                leftPanel.width = treeWidth;
            } else {
                leftPanel.width = '20%'
            }
            me.items[me.items.length] =leftPanel;
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

    constructor: function (config) {
        var me = this;
        me.queryList = new Ext.util.MixedCollection();
        me.gridList = new Ext.util.MixedCollection();
        me.FormList = new Ext.util.MixedCollection();
        me.WindowList = new Ext.util.MixedCollection();
        me.treeList = new Ext.util.MixedCollection();
        me.callParent([config]);
    },

    destroy: function () {
        var me = this;
        Ext.destroy(
            me.queryList,
            me.gridList,
            me.FormList,
            me.WindowList,
            me.treeList,
            me.Container
        );
        me.callParent();
    }
})