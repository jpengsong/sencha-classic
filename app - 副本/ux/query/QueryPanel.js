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
            view = me.getView(),
            grid = view.scope.getGrid(view.grid),
            gridStore = grid.getStore(),
            queryItems = view.getQueryItems();
            App.Page.setQueryItems(gridStore, queryItems);
            gridStore.loadPage(1);
        },

        //重置
        onReset: function () {
            var me = this, queryItems = Ext.ComponentQuery.query("container[reference='searchcondition']", me.getView())[0];
            Ext.each(queryItems.items.items, function (item) {
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

    getQueryItems: function () {
        var me = this;
        return App.Page.getQueryItems(Ext.ComponentQuery.query("container[reference='searchcondition']", me)[0]);
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