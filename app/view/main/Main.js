Ext.define("App.view.main.Main", {
    mixin: [
        'Ext.mixin.Responsive'
    ],
    id: "mainCardPanel",
    reference: "mainCardPanel",
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
                    reference: "header",
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
                                margin: '0 15',
                                ui: "planbutton"
                            },
                            items: [
                                {
                                    iconCls: "x-fa fa-bars",
                                    listeners: {
                                        click: "onMicro"
                                    }
                                },
                                {
                                    iconCls: "x-fa  fa-cog",
                                },
                                {
                                    iconCls: "x-fa  fa-refresh",
                                },
                                {
                                    xtype: "textfield",
                                    emptyText: "搜索...",
                                    ui: "default"
                                },
                                '->',
                                {
                                    iconCls: "x-fa  fa-bell-o",
                                },
                                {
                                    iconCls: "x-fa  x-fa fa-tachometer",
                                    handler:"onThemeWindow"
                                },
                                {
                                    iconCls: "x-fa  fa-arrows-alt",
                                    handler:"onFullScreen"
                                },
                                {
                                    text: "小靳一郎",
                                    menu: [
                                        { text: '基本资料', iconCls: "x-fa fa-address-card-o", handler: "onBasicInfo" },
                                        { text: '修改密码', iconCls: "x-fa fa-cc",handler:"onUpdatePassWord" },
                                        { text: '锁定', iconCls: "x-fa fa-lock",handler:"onLock" },
                                        { text: '退出', iconCls: "x-fa fa-power-off", handler: "onLogout" }
                                    ]
                                },
                                {
                                    iconCls: "x-fa  fa-ellipsis-v",
                                    handler: "onVersionWindow"
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
                            defaults: {
                                style: {
                                    background: '#f6f6f6',
                                    padding: '20px 20px'
                                }
                            },
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