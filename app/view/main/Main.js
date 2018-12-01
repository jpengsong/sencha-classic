Ext.define("App.view.main.Main", {
    mixin: [
        'Ext.mixin.Responsive'
    ],
    id: "main",
    extend: "Ext.container.Viewport",
    controller: "main",
    viewModel: "main",
    layout: 'card',
    activeItem: 0,
    items: [
        { xtype: "login" },
        {
            xtype: "container",
            routeId: "welcome",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [
                {
                    xtype: "panel",
                    ui: "welcome-head",
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
                            ui: "welcome-head-toolbar",
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
                                    text: "大学霸",
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
                            id: "welcomecontainer",
                            flex: 1,
                            ui: "welcome-tab-panel",
                            tabBar: {
                                height: 40
                            },
                            autoDestroy: false,
                            items: [
                                {
                                    iconCls: "x-fa fa-laptop",
                                    title: "首页",
                                    html:"abc123",
                                    xtype: "container",
                                    scrollable: Ext.scroll.Scroller({ y: true, x: false }),
                                    layout: {
                                        type: "vbox",
                                        align: "stretch"
                                    },
                                    items:[]
                                }
                            ]
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