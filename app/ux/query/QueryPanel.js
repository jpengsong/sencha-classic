Ext.define("App.ux.query.QueryPanel", {
    requires: [
        'Ext.layout.container.Column'
    ],
    extend: "Ext.Container",
    layout: 'border',
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
                        var queryregion=  Ext.ComponentQuery.query("container[name='queryregion']")[0];
                        if(queryregion.isHidden()){
                            queryregion.show();
                        }else{
                            queryregion.hide();
                        }
                    }
                }
            }
        },
        {
            xtype: "container",
            name:"queryregion",
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
    initComponent: function () {
        var me, queryConfig, buttonsConfig; me = this;
        //查询条件
        queryConfig = Ext.apply({
            xtype: "container",
            flex: 1,
            layout: 'column',
            reference: "querycondition"
        }, me.configs);
        me.items[1].items[0] = queryConfig;

        //查询条件按钮
        buttonsConfig = Ext.apply({
            xtype: 'container',
            width: 160,
            layout: 'hbox',
            reference:"querybutton",
            defaults: {
                margin: '0 5 5 5'
            },
            items: [
                {
                    xtype: 'button',
                    text: '查询',
                    iconCls: "fa fa-search",
                    listeners: {
                        click: "onSearch"
                    }
                },
                {
                    xtype: 'button',
                    text: '重置',
                    iconCls: "fa fa-undo",
                    listeners: {
                        click: "onReset"
                    }
                }
            ]
        }, me.buttons);

        //自定义查询
        if (!Ext.isEmpty(me.buttons)) {
            if (!Ext.isEmpty(me.buttons.items)) {
                delete me['controller'];
            }
        }
        me.items[1].items[1] = buttonsConfig;
        me.callParent();
    }
})