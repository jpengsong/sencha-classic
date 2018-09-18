//首页中部
Ext.define("app.view.main.Home.center", {
    extend: "Ext.container.Container",
    xtype: "homecenter",
    flex: 1,
    layout: {
        type: "hbox",
        align: 'stretch'
    },
    items: [
        {
            xtype:"container",
            width: 220,
            style:{
                "background-color":"#32404e"
            },
            scrollable:Ext.scroll.Scroller({y:true,x:false,scrollbars:false}),
            items:[
                {
                    xtype: 'treelist',
                    ui: "nav",
                    scrollable:true,
                    store: {
                        root: {
                            expanded: true,
                            children: [
                                {
                                    text: 'detention',
                                    leaf: true,
                                    iconCls: 'x-fa fa-frown-o'
                                },
                                {
                                    text: 'homework',
                                    expanded: true,
                                    iconCls: 'x-fa fa-folder',
                                    children: [{
                                        text: 'book report',
                                        leaf: true,
                                        iconCls: 'x-fa fa-book'
                                    }, {
                                        text: 'algebra',
                                        leaf: true,
                                        iconCls: 'x-fa fa-graduation-cap'
                                    }]
                                }, {
                                    text: 'buy lottery tickets',
                                    leaf: true,
                                    iconCls: 'x-fa fa-usd'
                                },
                                {
                                    text: 'detention',
                                    leaf: true,
                                    iconCls: 'x-fa fa-frown-o'
                                },
                                {
                                    text: 'homework',
                                    expanded: true,
                                    iconCls: 'x-fa fa-folder',
                                    children: [{
                                        text: 'book report',
                                        leaf: true,
                                        iconCls: 'x-fa fa-book'
                                    }, {
                                        text: 'algebra',
                                        leaf: true,
                                        iconCls: 'x-fa fa-graduation-cap'
                                    }]
                                }, {
                                    text: 'buy lottery tickets',
                                    leaf: true,
                                    iconCls: 'x-fa fa-usd'
                                }, {
                                    text: 'buy lottery tickets',
                                    leaf: true,
                                    iconCls: 'x-fa fa-usd'
                                },
                                {
                                    text: 'detention',
                                    leaf: true,
                                    iconCls: 'x-fa fa-frown-o'
                                },
                                {
                                    text: 'homework',
                                    expanded: true,
                                    iconCls: 'x-fa fa-folder',
                                    children: [{
                                        text: 'book report',
                                        leaf: true,
                                        iconCls: 'x-fa fa-book'
                                    }, {
                                        text: 'algebra',
                                        leaf: true,
                                        iconCls: 'x-fa fa-graduation-cap'
                                    }]
                                }, {
                                    text: 'buy lottery tickets',
                                    leaf: true,
                                    iconCls: 'x-fa fa-usd'
                                }, {
                                    text: 'buy lottery tickets',
                                    leaf: true,
                                    iconCls: 'x-fa fa-usd'
                                },
                                {
                                    text: 'detention',
                                    leaf: true,
                                    iconCls: 'x-fa fa-frown-o'
                                },
                                {
                                    text: 'homework',
                                    expanded: true,
                                    iconCls: 'x-fa fa-folder',
                                    children: [{
                                        text: 'book report',
                                        leaf: true,
                                        iconCls: 'x-fa fa-book'
                                    }, {
                                        text: 'algebra',
                                        leaf: true,
                                        iconCls: 'x-fa fa-graduation-cap'
                                    }]
                                }, {
                                    text: 'buy lottery tickets',
                                    leaf: true,
                                    iconCls: 'x-fa fa-usd'
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            xtype: "tabpanel",
            flex: 1,
            ui: "home-tab-panel",
            tabBar: {
                height: 40
            },
            autoDestroy: false,
            items: [
                { title: "首页" },
                { title: "客运管理", closable: true },
                { title: "客运管理", closable: true },
                { title: "客运管理", closable: true },
                { title: "客运管理", closable: true },
                { title: "客运管理", closable: true },
                { title: "客运管理", closable: true },
                { title: "客运管理", closable: true }
            ]
        }
    ]
})

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
                    text: "贤心",
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
        { xtype: "homecenter" }
    ]
})