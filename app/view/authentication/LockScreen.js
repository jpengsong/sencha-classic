Ext.define('App.view.authentication.LockScreen', {
    extend: 'Ext.window.Window',
    xtype: 'lockscreen',
    autoShow: true,
    maximized: true,
    closable: false,
    cls: 'auth-locked-window',
    title: "锁定",
    titleAlign: 'center',
    layout: {
        type: "vbox",
        align: "center",
        pack: "center"
    },
    defaults:{
        width:450
    },
    items: [
        {
            xtype:"container",
            height:120,
            cls:"base-backgroundcolor",
            layout: {
                type: "hbox",
                align:"center",
                pack:"center"
            },
            items:[
                {xtype:"container"},
                {xtype:"container"}
            ]
        },
        {
            xtype: 'form',
            bodyCls: "loginpanel",
            reference: "form",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [
                {
                    margin: "40 30 20 30",
                    xtype: 'textfield',
                    reference: 'userPwd',
                    value: "123456",
                    emptyText: "密码",
                    inputType: 'password',
                    allowBlank: false,
                    blankText: "密码不允许为空",
                    height:50,
                    maxLength: 15,
                    maxLengthText: "最大长度不超过15位",
                    triggers: {
                        lock: {
                            cls: 'x-fa fa-lock lock-icon'
                        }
                    }
                },
                {
                    margin: "20 30 10 30",
                    xtype: "button",
                    text: '登录',
                    scale:"large",
                    height:50,
                    formBind: true,
                    iconAlign :"right",
                    iconCls:"x-fa fa-chevron-right",
                    listeners: {
                        click: 'onLoginClick'
                    }
                },
                {
                    margin: "0 30 10 30",
                    xtype: "component",
                    html :'<div style="text-align:right"><a href="#view.login" class="link-forgot-password">或者, 使用其他登录凭据</a></div>'
                }
            ]
        }
    ],
    listeners: {
        show: function (obj, eOpts) {
            for (var i = 0; i < obj.tools.length; i++) {
                obj.tools[i].setHidden(true);
            }
        }
    }
})