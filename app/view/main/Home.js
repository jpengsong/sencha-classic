// //首页头部公司
// Ext.define("app.view.main.Home.head.company", {
//     xtype: "Homeheadcompany",
//     width: 180,
//     extend: "Ext.container.Container",
//     layout: {
//         type: "hbox",
//         align: "middle"
//     },
//     defaults: { margin: '10 5 3 10' },
//     items: [
//         {
//             xtype: "image",
//             width: 17,
//             height: 26,
//             src: "/resources/Image/main/logo.png"
//         },
//         {
//             xtype: "container",
//             style: "color:#f0f0f0;font-size:16px;font-weight: 400;",
//             html: "Sencha"
//         }
//     ]
// })

// //首页头部导航
// Ext.define("app.view.main.Home.head.Navigation", {
//     extend: "Ext.container.Container",
//     xtype: "HomeheadNavigation",
//     defaults: { scale: "medium" },
//     items: [
//         {
//             xtype: "button",
//             reference: "news",
//             iconCls: 'x-fa fa-comment-o',
//         },
//         {
//             xtype: "button",
//             iconCls: 'x-fa fa-home',
//             reference: "HomeheadSetup",
//             listeners: {
//                 afterrender: "onAfterrenderNavigationSetup",
//                 click: "onClickNavigationSetup",
//             }
//         },
//         {
//             xtype: "button",
//             reference: "logout",
//             iconCls: "x-fa fa-power-off"
//         }
//     ]
// })

// //首页头部
// Ext.define("app.view.main.Home.head", {
//     extend: "Ext.container.Container",
//     xtype: "Homehead",
//     height: 55,
//     layout: "fit",
//     items: [
//         {
//             xtype: "toolbar",
//             ui: "home-head-toolbar",
//             cls: "hometitle",
//             reference: "headerToolbar",
//             padding: '0 0 0 0',
//             items: [
//                 //{ xtype: "Homeheadcompany" },
//                 '->',
//                 { xtype: "HomeheadNavigation" }
//             ]
//         }]
// })

// //首页中部左侧用户
// Ext.define("app.view.main.Home.center.west.user", {
//     extend: "Ext.panel.Panel",
//     xtype: "Homecenterwestuser",
//     ui: "first-home-center-west-user",
//     height: 120,
//     layout: {
//         type: "hbox"
//     },
//     items: [
//         {
//             xtype: "container",
//             flex: 1,
//             layout: {
//                 type: "vbox",
//                 align: "center"
//             },
//             items: [
//                 {
//                     xtype: 'image',
//                     width: "50%",
//                     padding: '10 0',
//                     height: 100,
//                     style: {
//                         "border-radius": "50%"
//                     },
//                     src: "/resources/Image/main/user.png"
//                 },
//                 {
//                     xtype: "container",
//                     html: "Admin管理员"
//                 }
//             ]
//         },
//         {
//             xtype: "button",
//             width: 15,
//             padding: "5 0 0 0",
//             ui: "plainbtn",
//             iconCls: "x-fa fa-angle-double-right"
//         }
//     ]
// })

// //首页中部左侧菜单
// Ext.define("app.view.main.Home.center.west.navigation", {
//     extend: "Ext.panel.Panel",
//     xtype: "Homecenterwestnavigation",
//     ui: "first-home-center-west-navigation",
//     flex: 1,
//     layout: {
//         type: "vbox",
//         align: 'stretch'
//     },
//     defaults: {
//         arrowVisible: false,
//         scale: 'medium',
//         menuAlign: "tr",
//         height: 53,
//         ui: "first-home-center-west-menu-button",
//         style: {
//             borderStyle: 'none none solid none'
//         }
//     },
//     reference: "westnavigation",
//     defaultType: "button",
//     bbar: [
//         {
//             xtype: "panel",
//             ui: "first-home-center-west-navigation",
//             style: {
//                 borderStyle: 'none none none none',
//                 "border-top-color": '#02203d',
//                 "border-width": '1px'
//             },
//             height: 53,
//             padding: '0 0 0 0',
//             margin: '0 0 0 0',
//             flex: 1,
//             layout: {
//                 type: "hbox",
//                 align: "middle",
//                 pack: "center"
//             },
//             defaults: {
//                 style: {
//                     "background-color": "transparent"
//                 },
//                 padding: "0 2",
//                 iconAlign: "top",
//                 border: 0
//             },
//             items: [
//                 {
//                     xtype: "button", iconCls: "x-fa fa-angle-left fa-2x", flex: 1, hidden: true
//                 },
//                 {
//                     xtype: "button", iconCls: "x-fa fa-circle font-size-12px"
//                 },
//                 {
//                     xtype: "button", iconCls: "x-fa fa-circle font-size-12px"
//                 },
//                 {
//                     xtype: "button", iconCls: "x-fa fa-circle font-size-12px"
//                 },
//                 {
//                     xtype: "button", iconCls: "x-fa fa-angle-right fa-2x", flex: 1, hidden: true
//                 }
//             ]
//         }
//     ],
//     listeners: {
//         afterrender: "onAfterender"
//     }
// })

// //首页中部左侧
// Ext.define("app.view.main.Home.center.west", {
//     extend: "Ext.container.Container",
//     xtype: "Homecenterwest",
//     layout: {
//         type: "vbox",
//         align: 'stretch'
//     },
//     defaults: {
//         width: 220
//     },
//     items: [
//         { xtype: "Homecenterwestuser" },
//         { xtype: "Homecenterwestnavigation" }
//     ]
// })

// //首页中部
// Ext.define("app.view.main.Home.center", {
//     extend: "Ext.container.Container",
//     xtype: "Homecenter",
//     flex: 1,
//     layout: {
//         type: "hbox",
//         align: "stretch"
//     },
//     items: [
//         //{ xtype: "Homecenterwest" },
//         // {
//         //     xtype: "menu",
//         //     ui: "first-home-center-west-menu-button-menuItem",
//         //     width: 180,
//         //     floating: false,  // usually you want this set to True (default)
//         //     items: [
//         //         {
//         //             text: 'plain item 1', iconCls: "x-fa fa-folder",
//         //             menu:[
//         //                 {
//         //                     text: 'plain item 3', iconCls: "x-fa fa-desktop"
//         //                 }, {
//         //                     text: 'plain item 2', iconCls: "x-fa fa-money"
//         //                 }, {
//         //                     text: 'plain item 3', iconCls: "x-fa fa-desktop"
//         //                 }
//         //             ]
//         //         }, {
//         //             text: 'plain item 2', iconCls: "x-fa fa-money"
//         //         }, {
//         //             text: 'plain item 3', iconCls: "x-fa fa-desktop"
//         //         }, {
//         //             text: 'plain item 2', iconCls: "x-fa fa-money"
//         //         }, {
//         //             text: 'plain item 3', iconCls: "x-fa fa-desktop"
//         //         }, {
//         //             text: 'plain item 2', iconCls: "x-fa fa-money"
//         //         }, {
//         //             text: 'plain item 3', iconCls: "x-fa fa-desktop"
//         //         }, {
//         //             text: 'plain item 2', iconCls: "x-fa fa-money"
//         //         }, {
//         //             text: 'plain item 3', iconCls: "x-fa fa-desktop"
//         //         }
//         //     ]
//         // },
//         {
//             xtype: "tabpanel",
//              flex: 1,
//              scrollable :false,
//             items: [
//                 { title: "首页" },
//                 { title: "客运管理", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true },
//                 { title: "财务", closable: true }
//             ]
//         }
//     ]
// })

// //首页头部导航按钮-设置
// Ext.define('app.view.main.Home.head.navigation.setupTip', {
//     xtype: "HomeheadNavigationsetupTip",
//     extend: "Ext.tip.ToolTip",
//     width: 220,
//     height: 225,
//     anchor: 'left',
//     autoHide: false,
//     closable: true,
//     ui: "home-head-setupTip",
//     header: {
//         xtype: "header"
//     },
//     layout: {
//         type: 'vbox'
//     },
//     defaults: {
//         width: "100%"
//     },
//     items: [
//         {
//             xtype: "title",
//             text: '菜单布局',
//             textAlign: "center",
//             margin: "0 0 3 0",
//             style: {
//                 color: "#232d38",
//                 font: "400 14px/16px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif"
//             }
//         },
//         {
//             xtype: 'combobox',
//             columnWidth: 1,
//             forceSelection: true,
//             //bind: { store: "{MenuLocationStore}" },
//             queryMode: 'local',
//             displayField: 'text',
//             valueField: 'type',
//             value: 0
//         },
//         {
//             xtype: "title",
//             margin: "0 0 3 0",
//             text: '更换主题',
//             textAlign: "center",
//             style: {
//                 color: "#232d38",
//                 font: "400 14px/16px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif"
//             }
//         },
//         {
//             flex: 1,
//             layout: {
//                 type: 'table',
//                 columns: 3
//             },
//             defaults: {
//                 margin: '5 2',
//                 width: 63,
//                 height: 45,
//                 border: false
//             },
//             defaultType: "button",
//             items: [
//                 { reference: "firstbtn", theme: "first", ui: "firstbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "thirdbtn", theme: "third", ui: "thirdbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "fourthbtn", theme: "fourth", ui: "fourthbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "fifthbtn", theme: "fifth", ui: "fifthbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "sixthbtn", theme: "sixth", ui: "sixthbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "secondbtn", theme: "second", ui: "secondbtn", colspan: 1, listeners: { click: "onThemeChange" } }
//             ]
//         }
//     ]
// })

//首页头部
Ext.define("app.view.main.Home.head", {
    extend: "Ext.panel.Panel",
    ui: "home-head",
    xtype: "homehead",
    height: 50,
    layout: {
        type: "hbox",
        align: "stretch"
    },
    items: [
        {
            xtype: "container",
            width: 220,
            cls: "logo",
            border: 10,
            html: "layuiAdmin"
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
                    iconCls: "x-fa  fa-bars",
                    ui: "planbutton"
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
                    xtype:"textfield",emptyText:"搜索..."
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
                    text:"贤心",
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
})

//首页
Ext.define("app.view.main.Home", {
    xtype: "home",
    extend: "Ext.container.Container",
    controller: "home",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    items: [
        { xtype: "homehead" },
        //{ xtype: "Homecenter" }
    ]
})