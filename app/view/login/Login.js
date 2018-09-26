Ext.define("app.view.login.Login", {
    xtype: "login",
    routeId:"login",
    extend: "Ext.panel.Panel",
    bodyCls:"auth-login",
    layout: {
        type: "vbox",
        align: "center",
        pack: "center"
    },
    items: [
        {
            xtype:"container",
            html:"<span class='logo ext ext-sencha'></span><span class='label'>Sencha</span>"
        },
        {
            xtype: 'panel',
            bodyCls:"loginpanel", 
            layout: {
                type: "vbox",
                align: "stretch"
            },
            defaults: {
                margin: "5 30",
                width:200,
                height:40
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'username',
                    margin:"20 30 5 30",
                    emptyText:"用户名",
                    hideTrigger:true,
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
                    margin:"5 30 25 30",
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