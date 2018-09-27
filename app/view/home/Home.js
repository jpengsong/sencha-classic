
//首页
Ext.define("app.view.home.Home", {
    xtype: "home",
    extend: "Ext.container.Container",
    viewModel: "home",
    controller: "home",
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
                    reference:"logo",
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
                            iconCls:"x-fa fa-bars",
                            listeners:{
                                click:"onMicro"
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
                    width:220,
                    reference:"navcontainer",
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
                            expanderOnly: false
                        }
                    ]
                },
                {
                    xtype: "tabpanel",
                    id: "mainCard",
                    flex: 1,
                    ui: "home-tab-panel",
                    scrollable:true,
                    tabBar: {
                        height: 40
                    },
                    defaults:{
                        bodyStyle:{
                            "background-color":"#eee"
                        }
                    },
                    autoDestroy: false,
                    items: [
                        { title: "主页" },
                        { title: "栅格", closable: true,html:"123" },
                        { title: "导航", closable: true }
                    ]
                }
            ]
        }
    ],
    listeners: {
        //afterrender: "onafterrender"
    }
})