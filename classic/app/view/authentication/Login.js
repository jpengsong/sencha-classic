Ext.define("App.view.authentication.Login", {
    xtype: "login",
    routeId: "login",
    extend: 'App.ux.page.Dialog',
    controller: "authentication",
    autoShow: true,
    maximized: true,
    cls: 'authentication-login',
    title: "登录",
    titleAlign: 'center',
    layout: {
        type: "vbox",
        align: "center",
        pack: "center"
    },
    defaults: {
        width: 450
    },
    items: [
        {
            xtype: "container",
            height: 70,
            cls: "base-backgroundcolor",
            layout: {
                type: "hbox",
                align: "center",
                pack:"center"
            },
            items: [
                {
                    xtype: "container",
                    html: "<span class='logo ext ext-sencha'></span><span class='label'>Sencha</span>"
                }
            ]
        },
        {
            xtype: 'form',
            reference: "form",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            defaults: {
                margin: "5 20",
                width: 200,
                height: 40
            },
            items: [
                {
                    xtype: 'textfield',
                    reference: 'loginName',
                    margin: "20 20 5 20",
                    height: 50,
                    emptyText: "用户名",
                    value: "Admin",
                    allowBlank: false,
                    blankText: "用户名不允许为空",
                    maxLength: 15,
                    maxLengthText: "最大长度不超过15位",
                    triggers: {
                        lock: {
                            width:"40px",
                            cls: 'x-fa fa-user  lock-icon'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    reference: 'loginPwd',
                    height: 50,
                    value: "123456",
                    emptyText: "密码",
                    inputType: 'password',
                    allowBlank: false,
                    blankText: "密码不允许为空",
                    maxLength: 15,
                    enableKeyEvents:true,
                    maxLengthText: "最大长度不超过15位",
                    triggers: {
                        lock: {
                            width:"40px",
                            cls: 'x-fa fa-unlock-alt lock-icon'
                        }
                    }
                },
                {
                    xtype: "button",
                    margin: "5 20 50 20",
                    height: 50,
                    text: '登录',
                    formBind: true,
                    iconAlign: "right",
                    iconCls: "x-fa fa-chevron-right",
                    listeners: {
                        click: 'onLoginClick'
                    }
                }
            ]
        }
    ],
    listeners: {
        afterrender: "onloginAfterrender"
    }
})