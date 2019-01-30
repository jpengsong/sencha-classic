Ext.define("App.view.main.Main", {
    mixin: [
        'Ext.mixin.Responsive'
    ],
    id: "mainCardPanel",
    extend: "Ext.container.Viewport",
    controller: "main",
    viewModel: "main",
    layout: 'card',
    activeItem: 0,
    items: [
        { xtype: "login" },
        {
            xtype: "container",
            routeId: "main",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [
                {
                    xtype: "panel",
                    ui: "main-head",
                    height: 50,
                    layout: {
                        type: "hbox",
                        align: "stretch"
                    },
                    items: [
                        {
                            xtype: "container",
                            reference: "logo",
                            width: 220,
                            cls: "logo ext",
                            border: 10,
                            html: "sencha"
                        },
                        {
                            xtype: "toolbar",
                            padding: "0 0",
                            flex: 1,
                            style: {
                                "box-shadow": "0px 0px 0px 0.1px black"
                            },
                            ui: "main-head-toolbar",
                            reference: "headerToolbar",
                            defaults: {
                                margin: '0 15'
                            },
                            items: [
                                {

                                    ui: "planbutton",
                                    iconCls: "x-fa fa-bars",
                                    listeners: {
                                        click: "onMicro"
                                    }
                                },
                                {
                                    iconCls: "x-fa  fa-cog",
                                    ui: "planbutton"
                                },
                                {
                                    iconCls: "x-fa  fa-refresh",
                                    ui: "planbutton"
                                },
                                {
                                    xtype: "textfield", emptyText: "搜索..."
                                },
                                '->',
                                {
                                    iconCls: "x-fa  fa-bell-o",
                                    ui: "planbutton"
                                },
                                {
                                    iconCls: "x-fa  fa-tags",
                                    ui: "planbutton"
                                },
                                {
                                    iconCls: "x-fa  fa-arrows-alt",
                                    ui: "planbutton"
                                },
                                {
                                    text: "小靳一郎",
                                    ui: "planbutton",
                                    menu: [
                                        { text: '基本资料' },
                                        { text: '修改密码' },
                                        { text: '退出' }
                                    ]
                                },
                                {
                                    iconCls: "x-fa  fa-ellipsis-v",
                                    ui: "planbutton"
                                }
                            ]
                        }]
                },
                {
                    xtype: "container",
                    flex: 1,
                    layout: {
                        type: "hbox",
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: "container",
                            width: 220,
                            reference: "navcontainer",
                            style: {
                                "background-color": "#28333E"
                            },
                            scrollable: Ext.scroll.Scroller({ y: true, x: false, scrollbars: false }),
                            items: [
                                {
                                    xtype: 'treelist',
                                    reference: "navigationTreeList",
                                    bind: {
                                        store: '{navigation}'
                                    },
                                    defaults: {
                                        xtype: 'treelistitem',
                                        textProperty: "MenuName",
                                        iconClsProperty: "IconCls"
                                    },
                                    ui: "navigation",
                                    scrollable: true,
                                    singleExpand: true,
                                    expanderOnly: false,
                                    listeners: {
                                        selectionchange: "onNavigationTreeListChange"
                                    }
                                }
                            ]
                        },
                        {
                            xtype: "tabpanel",
                            id: "mainTabPanel",
                            flex: 1,
                            ui: "main-tab-panel",
                            tabBar: {
                                height: 40,
                            },
                            autoDestroy: false,
                            items: [
                                { xtype: "home" }
                            ],
                            listeners: {
                                tabchange: "onTabChange"
                            }
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        render: 'onMainViewRender'
    }
})  