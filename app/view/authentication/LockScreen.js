Ext.define('App.view.authentication.LockScreen', {
    extend: 'App.view.pages.Base',
    xtype: 'lockscreen',
    controller: "authentication",
    autoShow: true,
    maximized: true,
    cls: 'auth-locked-window',
    title: "锁定",
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
                align: "center"
            },
            items: [
                { xtype: "container", html: "当前账户：Admin", margin: "0 10", style: { "font-size": "16px" } }
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
                    reference: 'loginPwd',
                    emptyText: "密码",
                    inputType: 'password',
                    allowBlank: false,
                    blankText: "密码不允许为空",
                    height: 50,
                    maxLength: 15,
                    maxLengthText: "最大长度不超过15位",
                    triggers: {
                        lock: {
                            width:"40px",
                            cls: 'x-fa fa-lock lock-icon'
                        }
                    }
                },
                {
                    margin: "20 30 10 30",
                    xtype: "button",
                    text: '登录',
                    scale: "large",
                    height: 50,
                    formBind: true,
                    iconAlign: "right",
                    iconCls: "x-fa fa-chevron-right",
                    listeners: {
                        click: 'onRemoveLock'
                    }
                },
                {
                    margin: "0 30 10 30",
                    xtype: "component",
                    html: '<div style="text-align:right"><a href="#view.login" class="link-forgot-password">或者, 使用其他登录凭据</a></div>'
                }
            ]
        }
    ],
    listeners: {
        show: function (obj, eOpts) {
            App.UserInfo.Token = null;
            App.Cookie.DeleteCookie("TokenGuid");
        }
    }
})