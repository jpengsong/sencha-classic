//首页头部公司
Ext.define("app.view.main.Home.head.company", {
    xtype: "Homeheadcompany",
    width: 180,
    extend: "Ext.container.Container",
    layout: {
        type: "hbox",
        align: "middle"
    },
    defaults: { margin: '10 5 3 10' },
    items: [
        {
            xtype: "image",
            width: 17,
            height: 26,
            src: "/resources/Image/main/logo.png"
        },
        {
            xtype: "container",
            style: "color:#f0f0f0;font-size:16px;font-weight: 400;",
            html: "Sencha"
        }
    ]
})

//首页头部导航
Ext.define("app.view.main.Home.head.Navigation", {
    extend: "Ext.container.Container",
    xtype: "HomeheadNavigation",
    defaults: { scale: "medium" },
    items: [
        {
            xtype: "button",
            reference: "news",
            iconCls: 'x-fa fa-comment-o',
        },
        {
            xtype: "button",
            iconCls: 'x-fa fa-home',
            reference: "HomeheadSetup",
            listeners: {
                afterrender: "onAfterrenderNavigationSetup",
                click: "onClickNavigationSetup",
            }
        },
        {
            xtype: "button",
            reference: "logout",
            iconCls: "x-fa fa-power-off"
        }
    ]
})

//首页头部
Ext.define("app.view.main.Home.head", {
    extend: "Ext.container.Container",
    xtype: "Homehead",
    height: 55,
    layout: "fit",
    items: [
        {
            xtype: "toolbar",
            ui: "first-home-head-toolbar",
            reference: "headerToolbar",
            padding: '0 0 0 0',
            items: [
                { xtype: "Homeheadcompany" },
                {
                    xtype: "button",
                    ui: "first-home-head-toolbar-bars",
                    iconCls: "x-fa fa-bars"
                },
                '->',
                { xtype: "HomeheadNavigation" }
            ]
        }]
})

//首页中部左侧用户
Ext.define("app.view.main.Home.center.west.user", {
    extend: "Ext.panel.Panel",
    xtype: "Homecenterwestuser",
    ui:"first-home-center-west-user",
    height: 120,
    layout: {
        type: "vbox",
        align: "center"
    },
    items: [
        {
            xtype: 'image',
            width: "45%",
            padding: '10 0',
            height: 100,
            style: {
                "border-radius": "50%"
            },
            src: "/resources/Image/main/user.png"
        },
        {
            xtype: "container",
            html: "Admin管理员"
        }
    ]
})

//首页中部左侧菜单
Ext.define("app.view.main.Home.center.west.menu", {
    extend: "Ext.container.Container",
    xtype: "Homecenterwestmenu",
    layout: {
        type: "vbox",
        align: 'stretch'
    },
    defaults: {
        arrowVisible: false,
        scale: 'medium',
        menuAlign: "tr",
        ui: "first-home-center-west-menu-button"
    },
    reference: "menuLeft",
    defaultType: "button"
})

//首页中部左侧
Ext.define("app.view.main.Home.center.west", {
    extend: "Ext.panel.Panel",
    xtype: "Homecenterwest",
    ui:"first-home-center-west",
    layout: {
        type: "vbox"
    },
    defaults: {
        width: 180
    },
    items: [
        { xtype: "Homecenterwestuser" },
        { xtype: "Homecenterwestmenu" }
    ]
})

//首页中部
Ext.define("app.view.main.Home.center", {
    extend: "Ext.container.Container",
    xtype: "Homecenter",
    flex: 1,
    layout: {
        type: "hbox",
        align:"stretch"
    },
    items: [
        { xtype: "Homecenterwest" }
    ]
})

//首页
Ext.define("app.view.main.Home", {
    xtype: "home",
    extend: "Ext.container.Container",
    controller: "home",
    layout: {
        type: "vbox"
    },
    defaults: { width: "100%" },
    items: [
        { xtype: "Homehead" },
        { xtype: "Homecenter" }
    ], listeners: {
        afterrender: "onAfterender"
    }
})

//首页头部导航按钮-设置
Ext.define('app.view.main.Home.head.navigation.setupTip', {
    xtype: "HomeheadNavigationsetupTip",
    extend: "Ext.tip.ToolTip",
    width: 220,
    height: 225,
    anchor: 'left',
    autoHide: false,
    closable: true,
    ui: "homeheadsetupTip",
    header: {
        xtype: "header"
    },
    layout: {
        type: 'vbox'
    },
    defaults: {
        width: "100%"
    },
    items: [
        {
            xtype: "title",
            text: '菜单布局',
            textAlign: "center",
            margin: "0 0 3 0",
            style: {
                color: "#232d38",
                font: "400 14px/16px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif"
            }
        },
        {
            xtype: 'combobox',
            columnWidth: 1,
            forceSelection: true,
            //bind: { store: "{MenuLocationStore}" },
            queryMode: 'local',
            displayField: 'text',
            valueField: 'type',
            value: 0
        },
        {
            xtype: "title",
            margin: "0 0 3 0",
            text: '更换主题',
            textAlign: "center",
            style: {
                color: "#232d38",
                font: "400 14px/16px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif"
            }
        },
        {
            flex: 1,
            layout: {
                type: 'table',
                columns: 3
            },
            defaults: {
                margin: '5 2',
                width: 63,
                height: 45,
                border: false
            },
            defaultType: "button",
            items: [
                { reference: "firstbtn", theme: "first", ui: "firstbtn", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference: "thirdbtn", theme: "third", ui: "thirdbtn", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference: "fourthbtn", theme: "fourth", ui: "fourthbtn", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference: "fifthbtn", theme: "fifth", ui: "fifthbtn", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference: "sixthbtn", theme: "sixth", ui: "sixthbtn", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference: "secondbtn", theme: "second", ui: "secondbtn", colspan: 1, listeners: { click: "onThemeChange" } }
            ]
        }
    ]
});