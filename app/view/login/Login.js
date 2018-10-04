Ext.define("app.view.main.Main", {
    extend: "Ext.panel.Panel",
    bodyStyle: {
        "background-image": "url(resources/Image/login/auth-background.jpg)",
        "background-repeat": "no-repeat; background-size:100% 100%",
        "-moz-background-size": "10% 10%"
    },
    xtype: "login",
    layout: {
        type: "hbox",
        align: "middle",
        pack: "center"
    },
    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyStyle:{
              "background-color":"red" //rgba(18, 61, 64, 0.25)
            },
            layout: {
                type: "vbox",
                align: "stretch"
            },
            defaults: {
                margin: "10 20",
            },
            items: [
                // {
                //     xtype: 'container',
                //     html: "<div style='text-align:center'><h2>senchaAdmin</h2><p>layui 官方出品的单页面后台管理模板系统</p></div>"
                // },
                {
                    xtype: 'textfield',
                    name: 'username',
                    //inputWrapCls:"x-fa  fa-refresh",
                    emptyText:"用户名",
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name: 'password',
                    emptyText:"密码",
                    inputType: 'password',
                    allowBlank: false
                },
                {
                    xtype: "button",
                    text: '登录',
                    formBind: true,
                    listeners: {
                        click: 'onLoginClick'
                    }
                }
            ]
        }
    ]
})