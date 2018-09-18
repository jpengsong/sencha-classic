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
                    width: 60,
                    height: '90%',
                    src: "/resources/Image/main/logo.png"
                },
                { xtype: "container", style: { "color": "white;font-size:20px" }, html: "Sencha" },
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
                        afterrender: function () { Ext.create({ xtype: "mainSetup" }); },
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
            defaults: {
                margin: "0 5 0 10"
            },
            defaultButtonUI: "defaultbtn",
            reference: "menuTop",
            hidden: false
        },
        {
            xtype: "container",
            flex: 1,
            layout: {
                type: "hbox"
            },
            defaults: {
                height: "100%"
            },
            items: [
                {
                    xtype: "container",
                    scrollable:false,
                    width: 180,
                    items: [
                        {
                            xtype: "container",
                            height:120,
                            style: {
                                "background-color": "#fbfbfb"
                            },
                            layout: {
                                type: "vbox",
                                align: "middle"
                            },
                            items: [
                                {
                                    xtype: 'image',
                                    width: "70%",
                                    height: 100,
                                    margin: "15 0",
                                    style: {
                                        "border-radius": "50%"
                                    },
                                    src: "/resources/Image/main/user.png"
                                },
                            ]
                        },
                        {
                            xtype: "menu",
                            reference: "menuLeft",
                            ui: "defaultmenu",
                            floating: false,
                            height:400,
                            hidden:true
                        }
                    ]
                },
                {
                    xtype: "container",
                    flex: 1
                }
            ]
            // layout: 'border',
            // items: [{
            //     region: 'west',
            //     xtype: "container",
            //     style: {
            //         "background-color": "#fbfbfb"
            //     },
            //     width: 180,
            //     items: [
            //         {
            //             xtype: "container",
            //             margin: "10 5 7",
            //             style: {
            //                 "background-color": "#fbfbfb"
            //             },
            //             layout: {
            //                 type: "vbox",
            //                 align: "middle"
            //             },
            //             items: [
            //                 {
            //                     xtype: 'image',
            //                     width: "70%",
            //                     height: 100,
            //                     style: {
            //                         "border-radius": "50%"
            //                     },
            //                     src: "/resources/Image/main/user.png"
            //                 },
            //             ]
            //         },
            //         {
            //             xtype: "menu",
            //             reference: "menuLeft",
            //             ui: "defaultmenu",
            //             floating: false
            //         }
            //     ]
            // }, {
            //     region: 'center',
            //     xtype: 'panel',
            //     layout: 'fit',
            //     margin: '0 0 0 1'
            // }
        }
    ], listeners: {
        afterrender: "onAfterender"
    }
})  