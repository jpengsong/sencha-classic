Ext.define("app.view.main.Main", {
    extend: "Ext.container.Viewport",
    controller: "main",
    viewModel: "main",
    layout: {
        type: "vbox"
    },
    defaults: {
        width: "100%"
    },
    items: [
        {
            xtype: "toolbar",
            reference: "headerToolbar",
            width: "100%",
            height: 55,
            padding: "0 0",
            defaults: {
                margin: "0 5 0 10",
                scale: "small"
            },
            items: [
                {
                    xtype: "image",
                    width: 150,
                    height: '100%',
                    src: "/resources/Image/main/logo.jpg",
                },
                '->',
                {
                    xtype: "button",
                    reference: "news",
                    text: "消息（99+）",
                    iconCls: 'x-fa fa-comment-o',
                },
                {
                    xtype: "button",
                    text: "设置",
                    reference: "mainSetupButton",
                    iconCls: 'x-fa fa-home',
                    listeners: {
                        afterrender: "onAfterrenderSetup",
                        click: "onClickSetup",
                    }
                },
                {
                    xtype: "button",
                    reference: "logout",
                    text: "注销",
                    iconCls: "x-fa fa-power-off"
                }
            ]
        },
        {
            xtype: "toolbar",
            padding: "0 0",
            width: "100%",
            height: 45,
            // style: {
            //     "background-image": "none",
            //     "background-color": "#f6f6f6",
            //     "border-style": "none"
            // },
            // bodyStyle: {
            //     "background-image": "none",
            //     "background-color": "#f6f6f6",
            //     "border-style": "none"
            // },
            items: [
                {
                    style: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    bodyStyle: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    text: '首页',
                    menu: [
                        { text: 'Item'},
                        { text: 'Item 2' },
                        { text: 'Item 3' },
                        { text: 'Item 4' }
                    ]
                },
                {
                    style: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    bodyStyle: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    text: '台账管理',
                    menu: [
                        { text: 'Item 1' },
                        { text: 'Item 2' },
                        { text: 'Item 3' },
                        { text: 'Item 4' }
                    ]
                },
                {
                    style: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    bodyStyle: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    text: '项目管理',
                    menu: [
                        { text: 'Item 1' },
                        { text: 'Item 2' },
                        { text: 'Item 3' },
                        { text: 'Item 4' }
                    ]
                },
                {
                    style: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    bodyStyle: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    text: '预警管理',
                    menu: [
                        { text: 'Item 1' },
                        { text: 'Item 2' },
                        { text: 'Item 3' },
                        { text: 'Item 4' }
                    ]
                },
                {
                    style: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    bodyStyle: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    text: '预警管理',
                    menu: [
                        { text: 'Item 1' },
                        { text: 'Item 2' },
                        { text: 'Item 3' },
                        { text: 'Item 4' }
                    ]
                },
                {
                    style: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    bodyStyle: {
                        "background-image": "none",
                        "background-color": "#f6f6f6",
                        "border-style": "none"
                    },
                    text: '预警管理',
                    menu: [
                        { text: 'Item 1' },
                        { text: 'Item 2' },
                        { text: 'Item 3' },
                        { text: 'Item 4' }
                    ]
                }
            ]
        },
        {
            flex: 1,
            layout: 'border',
            items: [{
                region: 'west',
                xtype: "container",
                width: 160,
                items: [
                    {
                        xtype: "menu",
                        ui:"eeeee",
                        floating: false,
                        items: [
                            {
                                text: '首页',
                                iconCls: 'x-fa fa-comment-o',
                                menu: [
                                    { text: 'Item 1', },
                                    { text: 'Item 2' },
                                    {
                                        text: 'Item 3', menu: [
                                            { text: 'Item 1' },
                                            { text: 'Item 2' },
                                            {
                                                text: 'Item 3',
                                                menu: [
                                                    { text: 'Item 1' },
                                                    { text: 'Item 2' },
                                                    { text: 'Item 3' },
                                                    { text: 'Item 4' }
                                                ]
                                            },
                                            { text: 'Item 4' }
                                        ]
                                    },
                                    { text: '台账管理' }
                                ]
                            }, {
                                text: '项目管理'
                            }, {
                                text: '预警管理'
                            },
                            {
                                text: '预警管理',
                                iconCls: 'x-fa fa-comment-o'
                            }, {
                                text: '预警管理'
                            }
                        ]
                    }
                ]
            }, {
                region: 'center',
                xtype: 'panel',
                layout: 'fit',
                margin: '5 5 0 0'
            }],
        }
    ], listeners: {
        afterrender: "onAfterender"
    }
})  