//首页头部logo
Ext.define("app.view.main.Homeheadlogo", {
    extend: "Ext.container.Container",
    xtype: "Homeheadlogo",
    items: [{
        xtype: "image",
        height: 45,
        width: 100,
        src: "/resources/Image/main/logo.png"
    }]
})
//首页头部公司名称
Ext.define("app.view.main.Homeheadcompany", {
    xtype: "Homeheadcompany",
    extend: "Ext.container.Container",
    style: "color:#f0f0f0;font-size: 16px",
    html: "Sencha"
})
//首页头部导航按钮
Ext.define("app.view.main.HomeheadNavigation", {
    extend: "Ext.container.Container",
    xtype: "HomeheadNavigation",
    defaults: {scale: "small"},
    items: [{
        xtype: "button",
        reference: "news",
        text: "消息（99+）",
        iconCls: 'x-fa fa-comment-o',
    },
    {
        xtype: "button",
        text: "设置",
        iconCls: 'x-fa fa-home',
        reference:"HomeheadSetup",
        listeners: {
            afterrender:"onAfterrenderNavigationSetup",
            click: "onClickNavigationSetup",
        }
    },
    {
        xtype: "button",
        reference: "logout",
        text: "注销",
        iconCls: "x-fa fa-power-off"
    }]
})
//首页头部
Ext.define("app.view.main.Homehead", {
    extend: "Ext.container.Container",
    xtype: "Homehead",
    height: 55,
    layout: "fit",
    items: [
        {
            xtype: "toolbar",
            ui: "first-home-toolbar-ui",
            reference: "headerToolbar",
            padding: '0 0 0 0',
            items: [
                { xtype: "Homeheadlogo" },
                { xtype: "Homeheadcompany" },
                '->',
                { xtype: "HomeheadNavigation" }
            ]
        }]
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
        { xtype: "Homehead" }
    ]
})

//首页头部导航按钮-设置
Ext.define('app.view.main.HomeheadNavigationetupTip', {
    xtype: "HomeheadNavigationetupTip",
    extend: "Ext.tip.ToolTip",
    width: 220,
    height: 225,
    anchor: 'left',
    autoHide: false,
    closable: true,
    ui:"homeheadsetupTip",
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