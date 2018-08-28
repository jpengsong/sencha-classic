Ext.define("ux.page.Page", {
    extend: "Ext.panel.Panel",
    layout: "border",
    baseCls: 'my-panel-no-border',
    /*
        TreeList
    */
    TreeList: null,
    /*
        GridList
    */
    GridList: null,
    /*
        QueryList
    */
    QueryList: null,
    /*
        WindowList
    */
    WindowList: null,
    /*
        FormList
    */
    FormList: null,
    /*
        TreeWidth
    */
    TreeWidth: null,
    /*
        Container
    */
    Container: null,

    initComponent: function () {

        var me = this;
        me.initPageLayout();
        me.callParent();
    },

    initPageLayout: function () {
        var me; me = this;
        me.defaultPageLayout();
    },

    defaultPageLayout: function () {

        var me = this, gridPanel, queryPanel, leftPanel, centerPanel;

        if (me.QueryList.getCount() > 0) {
            queryPanel = me.QueryList.first();
            queryPanel.region = 'north';
        }

        if (me.GridList.getCount() > 0) {
            gridPanel = me.GridList.first();
            gridPanel.region = 'center';
        }

        if (me.TreeList.getCount() > 0) {
            leftPanel = me.TreeList.first();
            leftPanel.region = 'west';
            leftPanel.padding = '0 0 0 0'
            if (TreeWidth != null && TreeWidth != "") {
                leftPanel.width = TreeWidth;
            } else {
                leftPanel.width = '20%'
            }
        }

        centerPanel = Ext.create('Ext.panel.Panel', {
            region: 'center',
            header: false,
            border: true,
            padding: "0 0 0 0",
            layout: {
                type: 'border'
            },
            items: [queryPanel, gridPanel]//{ region: 'center', html: 'html' }
        });

        centerPanel.on('afterrender', function (comp, eOpts) {
            var bodyId = comp.id + "-body";
            var body = Ext.fly(bodyId);
            body.setStyle("border-bottom-style", 'none');
        });

        me.layout = 'border';
        me.items = [leftPanel, centerPanel];
    },

    initTree: function (key, tree, treeWidth) {
        var me; me = this;
        me.TreeWidth = treeWidth;
        if (me.TreeList.containsKey(key)) {
            me.TreeList.removeAtKey(key);
        }
        me.TreeList.add(key, tree);
    },

    getTree: function (key) {
        var me = this;

        if (!me.TreeList.containsKey(key)) {
            return null;
        }
        else {
            return me.TreeList.get(key);
        }
    },

    addForm: function (key, form) {
        var me = this;

        if (me.FormList.containsKey(key)) {
            me.FormList.removeAtKey(key);
        }
        me.FormList.add(key, form);
    },

    getForm: function (key) {
        var me = this;

        if (!me.FormList.containsKey(key)) {
            return null;
        }
        else {
            return me.FormList.get(key);
        }
    },

    addQuery: function (key, query) {
        var me = this;

        if (me.QueryList.containsKey(key)) {
            me.QueryList.removeAtKey(key);
        }
        me.QueryList.add(key, query);
    },

    getQuery: function (key) {
        var me = this;

        if (!me.QueryList.containsKey(key)) {
            return null;
        }
        else {
            return me.QueryList.get(key);
        }
    },

    addGrid: function (key, grid) {
        var me = this;

        if (me.GridList.containsKey(key)) {
            me.GridList.removeAtKey(key);
        }
        me.GridList.add(key, grid);
    },

    getGrid: function (key) {
        var me = this;

        if (!me.GridList.containsKey(key)) {
            return null;
        }
        else {
            return me.GridList.get(key);
        }
    },

    addWindow: function (key, win) {
        var me = this;
        if (me.WindowList.containsKey(key)) {
            me.WindowList.removeAtKey(key);
        }
        if (win.getXType() == "window") {
            //只在页面中拖动
            win.on("dragend", function (obj, e, eOpts) {
                var lastY = obj.lastXY[1];
                var wHeight = Ext.getBody().getHeight() - this.height;
                if (lastY < wHeight) {
                    this.setPosition(this.x, lastY, false);
                }
                else {
                    this.setPosition(this.x, obj.startPosition[1], false);
                }
            });
        }

        me.WindowList.add(key, win);
    },

    getWindow: function (key) {
        var me = this;

        if (!me.WindowList.containsKey(key)) {
            return null;
        }
        else {
            return me.WindowList.get(key);
        }
    },

    addContainer: function (key, container) {
        var me = this;

        if (!me.Container.containsKey(key)) {
            me.Container.removeAtKey(key);
        }
        me.Container.add(key, container);
    },

    getContainer: function (key) {
        var me = this;

        if (!me.Container.containsKey(key)) {
            return null;
        }
        else {
            return me.Container.get(key);
        }
    },

    constructor: function (config) {
        var me = this;

        me.QueryList = new Ext.util.MixedCollection();
        me.GridList = new Ext.util.MixedCollection();
        me.FormList = new Ext.util.MixedCollection();
        me.WindowList = new Ext.util.MixedCollection();
        me.TreeList = new Ext.util.MixedCollection();
        me.Container = new Ext.util.MixedCollection();

        me.callParent([config]);
    }
    ,
    destroy: function () {
        var me = this;

        Ext.destroy(
            me.QueryList,
            me.GridList,
            me.FormList,
            me.WindowList,
            me.TreeList,
            me.Container
        );

        me.callParent();
    }
})