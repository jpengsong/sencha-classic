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
                    xtype: "container",
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
                            cls: "ext",
                            border: 10,
                            html: "sencha",
                            bind: {
                                UI: "head-logo-{theme}"
                            },
                        },
                        {
                            xtype: "toolbar",
                            reference: "headerToolbar",
                            padding: "0 0",
                            flex: 1,
                            style: { "box-shadow": "0px 0px 0px 0.1px black" },
                            bind:{
                                UI:"head-toolbar-{theme}"
                            },
                            defaults: {
                                margin: '0 15',
                                bind:{
                                    UI:"head-toolbar-button-{theme}"
                                }
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
                                    handler: "onThemeWindow"
                                },
                                {
                                    iconCls: "x-fa  fa-arrows-alt",
                                    handler: "onFullScreen"
                                },
                                {
                                    text: "小靳一郎",
                                    menu: [
                                        { text: '个人资料', iconCls: "x-fa fa-address-card-o", handler: "onBasicInfo" },
                                        { text: '修改密码', iconCls: "x-fa fa-cc", handler: "onUpdatePassWord" },
                                        { text: '锁定', iconCls: "x-fa fa-lock", handler: "onLock" },
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
                            bind: {
                                UI: "{theme}"
                            },
                            scrollable: Ext.scroll.Scroller({ y: true, x: false, scrollbars: false }),
                            items: [
                                {
                                    xtype: 'treelist',
                                    reference: "navigationTreeList",
                                    id: "navigationTreeList",
                                    bind: {
                                        ui: "navigation-{theme}",
                                        store: '{navigation}'
                                    },
                                    defaults: {
                                        xtype: 'treelistitem',
                                        textProperty: "MenuName",
                                        iconClsProperty: "IconCls"
                                    },
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
                            reference: "mainTabPanel",
                            ui: "tabpanel-default",
                            flex: 1,
                            autoDestroy: false,
                            defaults: {
                                style: {
                                    background: '#fff',
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