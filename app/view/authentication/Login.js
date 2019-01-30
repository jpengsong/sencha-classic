Ext.define("App.view.authentication.Login", {
    xtype: "login",
    routeId: "login",
    extend: "Ext.panel.Panel",
    bodyCls: "auth-login",
    layout: {
        type: "vbox",
        align: "center",
        pack: "center"
    },
    items: [
        {
            xtype: "container",
            html: "<span class='logo ext ext-sencha'></span><span class='label'>Sencha</span>"
        },
        {
            xtype: 'form',
            bodyCls: "loginpanel",
            reference: "form",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            defaults: {
                margin: "5 30",
                width: 200,
                height: 40
            },
            items: [
                {
                    xtype: 'textfield',
                    reference: 'userName',
                    margin: "20 30 5 30",
                    emptyText: "用户名",
                    value: "Admin",
                    allowBlank: false,
                    blankText: "用户名不允许为空",
                    maxLength: 15,
                    maxLengthText: "最大长度不超过15位"
                },
                {
                    xtype: 'textfield',
                    reference: 'userPwd',
                    value: "123456",
                    emptyText: "密码",
                    inputType: 'password',
                    allowBlank: false,
                    blankText: "密码不允许为空",
                    maxLength: 15,
                    maxLengthText: "最大长度不超过15位"
                },
                {
                    xtype: "button",
                    margin: "5 30 25 30",
                    text: '登录',
                    formBind: true,
                    listeners: {
                        click: 'onLoginClick'
                    }
                }
            ]
        }
    ],
    controller: {
        onLoginClick: function () {
            var me = this, refs = me.getReferences(), form= refs.form, userName = refs.userName.getValue(), userPwd = refs.userPwd.getValue() ;
            var myMask = new Ext.LoadMask({
                msg: '登录中...',
                componentCls: "x-mask-ui",
                target: Ext.getCmp("mainCardPanel")
            });
            myMask.show();
            if (form.isValid()) {
                if (userName == "Admin" && userPwd == "123456") {
                    App.UserInfo.userName = userName;
                    App.UserInfo.userPwd = userPwd;
                    App.UserInfo.IsSuperUser = true; //默认超级管理员
                    App.UserInfo.Token = "7e5f5c69-cb23-4bd8-94ad-133c8e5dad2a";
                    me.redirectTo('user.login', true);
                } else {
                    alert("用户名或密码不存在");
                }
                myMask.destroy();
            } else {
                alert("请检查登录信息");
            }
        }
    }
})