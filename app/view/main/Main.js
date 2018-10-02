Ext.define("app.view.main.Main", {
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
            routeId: "home",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [
                {
                    xtype: "panel",
                    ui: "home-head",
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
                            ui: "home-head-toolbar",
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
                            plugins: {
                                responsive: true
                            },
                            responsiveConfig: {
                                'width < 768': {
                                    width: 0
                                },
                                'width > 768': {
                                    width: 220
                                }
                            },
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
                            id: "card",
                            flex: 1,
                            ui: "home-tab-panel",
                            tabBar: {
                                height: 40
                            },
                            defaults: {
                                bodyStyle: {
                                    "background-color": "#eee"
                                }
                            },
                            autoDestroy: false,
                            items: [
                                {
                                    iconCls: "x-fa fa-laptop",
                                    xtype: "container",
                                    scrollable: Ext.scroll.Scroller({ y: true, x: false }),
                                    layout: {
                                        type: "vbox",
                                        align:"stretch"

                                    },
                                    items: [
                                        {
                                            xtype: "container",
                                            layout: 'column',
                                            defaults: {
                                                margin: "15 0 15 15",
                                                height: 300,
                                                plugins: {
                                                    responsive: true
                                                },
                                                responsiveConfig: {
                                                    'width < 768': {
                                                        columnWidth: 1
                                                    },
                                                    'width >= 768': {
                                                        columnWidth: 0.5
                                                    },
                                                    'width >= 1200': {
                                                        columnWidth: 0.25
                                                    }
                                                }
                                            },
                                            items: [
                                                {
                                                    xtype: "panel",
                                                    title: "column1",
                                                    html: "column1"
                                                },
                                                {
                                                    xtype: "panel",
                                                    title: "column2",
                                                    html: "column2"
                                                },
                                                {
                                                    xtype: "panel",
                                                    title: "column3",
                                                    html: "column3"
                                                },
                                                {
                                                    xtype: "panel",
                                                    margin: "15 10 15 15",
                                                    title: "column4",
                                                    html: "column4"
                                                }
                                            ]
                                        },
                                        {
                                            iconCls: "x-fa fa-laptop",
                                            xtype: "container",
                                            scrollable: Ext.scroll.Scroller({ y: true, x: false }),
                                            layout: 'column',
                                            defaults: {
                                                margin: "15 0 15 15",
                                                height: 300,
                                                plugins: {
                                                    responsive: true
                                                },
                                                responsiveConfig: {
                                                    'width < 768': {
                                                        columnWidth: 1
                                                    },
                                                    'width >= 768': {
                                                        columnWidth: 0.5
                                                    }
                                                }
                                            },
                                            items: [
                                                {
                                                    xtype: "panel",
                                                    title: "column1",
                                                    html: "column1"
                                                },
                                                {
                                                    xtype: "panel",
                                                    margin: "15 10 15 15",
                                                    title: "column2",
                                                    html: "column2"
                                                }
                                            ]
                                        }
                                    ]

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