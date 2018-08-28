Ext.define("ux.query.QueryPanel", {
    requires: [
        'Ext.layout.container.Column'
    ],
    border: true,
    extend: "Ext.Panel", alias: "widget.queryPanel",
    ButtonRegion: null,
    controller: 'queryPanel',
    querypanelHeight: null,
    initComponent: function () {
        var me = this, queryPanel, buttonPanel;

        //查询文本框
        var queryConfig = {
            layout: 'column',
            width: '100%',
            frame: false,
        };
        var query = Ext.create('Ext.panel.Panel', Ext.apply(queryConfig, me.Configs));

        //查询按钮
        buttonPanel = Ext.create("Ext.panel.Panel", {
            width: '20%',
            layout: 'hbox',
            frame: false,
            defaults: {
                'margin': '5px', 'text-align': 'center'
            },
            items: [
                {
                    xtype: 'button',
                    text: '查询',
                    iconCls: "fa fa-search fa-1-3x",
                    listeners: {
                        click: "search"
                    },
                    scope: me
                },
                {
                    xtype: 'button',
                    text: '重置',
                    iconCls: "fa fa-undo fa-1-3x",
                    listeners: {
                        click: "reset"
                    },
                    scope: me
                }
            ]
        })

        //查询面板
        queryPanel = Ext.create("Ext.panel.Panel", {
            layout: 'border',
            region: 'north',
            reference: 'queryPanel',
            height: 80,
            frame: false,
            items: [
                {
                    region: 'center',
                    items: [query],
                    listeners: {
                        resize: 'resizeQueryPanel'
                    }
                },
                {
                    region: 'east',
                    items: [buttonPanel]
                },
                {
                    region: 'north',
                    height: 14,
                    bodyPadding: 0,
                    bodyStyle: { cursor: 'pointer' },
                    defaults: {
                        padding: '0 0 0 7',
                        'z-Index': 80000
                    },
                    listeners: {
                        el: { click: 'expansionClick' }
                    },
                    items: [
                        {
                            xtype: 'component',
                            autoEl: {
                                tag: 'i',
                                cls: 'fa fa-caret-right fa-1-4x'
                            }
                        }
                    ]
                }
            ],
            listeners: {
                render: 'queryPanelRender'
            }
        })
        me.items = [queryPanel];
        me.callParent();
    },

    //获取查询条件
    getQueryItems: function () {
        var me = this;
        var condition = {};
        var queryPanel = Ext.ComponentQuery.query("panel[reference='queryPanel']", me)[0];
        condition = ux.Page.getQueryItems(queryPanel.items.items[0].items.items[0].items);
        return condition;
    },

    constructor: function (config) {
        var me = this;
        if (config.Configs == undefined) {
            config.Configs = {};
        }
        if (config.ButtonRegion != null) {
            me.ButtonRegion = config.ButtonRegion;
        }
        me.callParent([config]);
    }
})

Ext.define("ux.query.QueryPanelController", {
    extend: "Ext.app.ViewController",
    alias: "controller.queryPanel",

    //查询
    search: function () {
        var me = this;
        if (Ext.isFunction(me.view.Configs.search)) {
            Ext.callback(me.view.scope.search, this);
        } else {
            var grid = me.view.scope.getGrid(me.view.GridName);
            ux.Page.setQueryItems(grid.getStore(), me.view.getQueryItems());
            grid.getStore().loadPage(1);
        }
    },

    //重置
    reset: function () {
        var me = this, queryItems, refs = me.getReferences();
        if (Ext.isFunction(me.view.Configs.reset)) {
            Ext.callback(me.view.Configs.reset, this);
        } else {
            queryItems = refs.queryPanel.items.items[0].items.items[0].items;
            Ext.each(queryItems.items, function (item) {
                if (item.xtype === "orgpicker") {
                    if (item.getRawValue() !== "") {
                        item.setValue("");
                        item.setRawValue("");
                    }
                }
                else if (item.xtype.indexOf("combo") !== -1) {
                    item.setValue("");
                }
                else {
                    item.setValue("");
                }
            });
        }
    },

    //查询面板初始化
    queryPanelRender: function (cmp) {
        var me = this;
        me.view.queryPanelExpand = false;//默认展开
    },

    //查询面板调整大小
    resizeQueryPanel: function (panel, width, height, oldwidth, oldheight) {
        var me = this, refs = me.getReferences();
        if (width != oldwidth) {
            var cHeight = panel.items.first().getEl().getSize().height;
            refs.queryPanel.setHeight(cHeight + 20);
            me.view.queryPanelHeight = refs.queryPanel.getHeight();
        }
    },

    //查询面板展开折叠
    expansionClick: function () {
        var me = this, refs = me.getReferences();
        if (!me.view.queryPanelExpand) {
            me.view.queryPanelHeight = refs.queryPanel.getHeight();
            refs.queryPanel.setHeight(15);
            me.view.queryPanelExpand = true;
        } else {
            refs.queryPanel.setHeight(me.view.queryPanelHeight);
            me.view.queryPanelExpand = false;
        }
    }
})