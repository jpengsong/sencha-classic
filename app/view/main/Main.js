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
        // {
        //     xtype: "toolbar",
        //     ui: "mainToolbar",
        //     padding: "0 0",
        //     width: "100%",
        //     height: 45,
        //     defaults: {
        //         margin: "0 5 0 10"
        //     },
        //     defaultButtonUI: "defaultbtn",
        //     items: [
        //         {
        //             text: '首页',
        //             menu: [
        //                 { text: 'Item' },
        //                 { text: 'Item 2' },
        //                 { text: 'Item 3' },
        //                 { text: 'Item 4' }
        //             ]
        //         },
        //         {
        //             text: '台账管理',
        //             menu: [
        //                 { text: 'Item 1' },
        //                 { text: 'Item 2' },
        //                 { text: 'Item 3' },
        //                 { text: 'Item 4' }
        //             ]
        //         },
        //         {
        //             text: '项目管理',
        //             menu: [
        //                 { text: 'Item 1' },
        //                 { text: 'Item 2' },
        //                 { text: 'Item 3' },
        //                 { text: 'Item 4' }
        //             ]
        //         },
        //         {
        //             text: '预警管理',
        //             menu: [
        //                 { text: 'Item 1' },
        //                 { text: 'Item 2' },
        //                 { text: 'Item 3' },
        //                 { text: 'Item 4' }
        //             ]
        //         },
        //         {
        //             text: '预警管理',
        //             menu: [
        //                 { text: 'Item 1' },
        //                 { text: 'Item 2' },
        //                 { text: 'Item 3' },
        //                 { text: 'Item 4' }
        //             ]
        //         },
        //         {
        //             text: '预警管理',
        //             menu: [
        //                 { text: 'Item 1' },
        //                 { text: 'Item 2' },
        //                 { text: 'Item 3' },
        //                 { text: 'Item 4' }
        //             ]
        //         }
        //     ]
        // },
        {
            flex: 1,
            layout: 'border',
            items: [{
                region: 'west',
                xtype: "container",
                style:{
                    "background-color":"#fbfbfb"
                },
                width: 160,
                items: [
                    {
                        xtype: "container",
                        margin:"10 5 7",
                        style:{
                            "background-color":"#fbfbfb"
                        },
                        layout: {
                            type: "vbox",
                            align:"middle"
                        },
                        items: [
                            {
                                xtype: 'image',
                                width: "70%",
                                height: 100,
                                style:{
                                    "border-radius":"50%"
                                },
                                src: "/resources/Image/main/user.jpg"
                            },
                        ]
                    },
                    {
                        xtype: "menu",
                        ui: "defaultmenu",
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
                margin: '0 0 0 1'
            }],
        }
    ], listeners: {
        afterrender: "onAfterender"
    }
})  