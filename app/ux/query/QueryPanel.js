Ext.define("App.ux.query.QueryPanel", {
    requires: [
        'Ext.layout.container.Column'
    ],
    extend: "Ext.Container",
    layout: 'border',
    style: {
        "border-bottom-width": "1px",
        "border-bottom-style": "solid",
        "border-bottom-color": "#d1d1d1"
    },
    padding: "5 0 5 0",
    width: '100%',
    layout: {
        type: "vbox",
    },
    items: [
        {
            margin: "0 10",
            html: "<span class='x-fa fa-caret-right fa-lg' style='cursor:pointer'></span>",
            listeners: {
                el: {
                    click: function () {
                        var queryregion = Ext.ComponentQuery.query("container[name='queryregion']")[0];
                        if (queryregion.isHidden()) {
                            queryregion.show();
                        } else {
                            queryregion.hide();
                        }
                    }
                }
            }
        },
        {
            xtype: "container",
            name: "queryregion",
            width: "100%",
            layout: {
                type: "hbox",
                align: "middle"
            },
            items: []
        }
    ],
    controller: {
        //查询
        onSearch: function () {
            var me = this,
                queryItems,
                view = me.getView(),
                grid = view.scope.getGrid(view.grid),
                gridStore = grid.getStore(),
                refs = me.getReferences();
                queryItems = App.Page.getQueryItems(refs.searchcondition);
            alert(gridStore);
        },

        //重置
        onReset: function () {
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
    },

    setQueryItems: function () {
        var me = this,
            scope = me.scope,
            gridpanel = scope.getGrid(me.grid);
        gridstore = gridpanel.getStore();
        alert(gridstore);
    },

    initComponent: function () {
        var me, queryConfig, buttonConfig; me = this;
        //查询条件
        queryConfig = Ext.apply({
            xtype: "container",
            flex: 1,
            layout: 'column',
            reference: "searchcondition"
        }, me.queryConfig);
        me.items[1].items[0] = queryConfig;

        //查询按钮
        buttonConfig = Ext.apply({
            xtype: 'container',
            width: 160,
            layout: 'hbox',
            defaults: {
                margin: '0 5 5 5'
            },
            items: [
                {
                    xtype: 'button',
                    text: '查询',
                    reference: "searchbutton",
                    iconCls: "fa fa-search",
                    listeners: {
                        click: "onSearch"
                    }
                },
                {
                    xtype: 'button',
                    text: '重置',
                    reference: "resetbutton",
                    iconCls: "fa fa-undo",
                    listeners: {
                        click: "onReset"
                    }
                }
            ]
        }, me.buttonConfig);
        me.items[1].items[1] = buttonConfig;

        //查询事件
        if (!Ext.isEmpty(me.controllerConfig)) {
            me.controller = Ext.apply(me.controller, me.controllerConfig);
        }
        me.callParent();
    }
})