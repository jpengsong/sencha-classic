Ext.define("App.view.authentication.AuthenticationController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //登录
    onLoginClick: function () {
        var me = this, url, params, tokenGuid = App.Cookie.GetCookie("TokenGuid"), refs = me.getReferences(), form = refs.form, loginName = refs.loginName.getValue(), loginPwd = refs.loginPwd.getValue();
        if (!Ext.isEmpty(tokenGuid)) {
            url = "/api/ValidaToken";
        } else {
            url = "/api/Token";
            params = {
                LoginName: loginName,
                LoginPassWord: loginPwd
            }
        }
        if (form.isValid()) {
            App.Ajax.request({
                url: url,
                method: "POST",
                nosim: true,
                type: "JSON",
                showmask: true,
                maskmsg: "登录中...",
                params: params,
                success: function (rs) {
                    if (!Ext.isEmpty(rs.Data)) {
                        var data = rs.Data;
                        App.UserInfo.Token = data.Token;
                        App.UserInfo.IsSuperUser = data.IsSuperUser;
                        App.UserInfo.UserID = data.UserID;
                        App.UserInfo.UserName = data.UserName;
                        App.UserInfo.LoginName = loginName;
                        App.UserInfo.LoginPassWord = loginPwd;
                        App.Cookie.SetCookie("TokenGuid", data.Token);
                        me.redirectTo('user.login', true);
                    } else {
                        if (!Ext.isEmpty(tokenGuid)) {
                            App.Cookie.DeleteCookie("TokenGuid");
                        } else {
                            App.Msg.Warning("用户名或密码不正确");
                        }
                    }
                },
                error: function (data) {
                    App.Msg.Error("登录异常");
                }
            })
        } else {
            alert("请检查登录信息");
        }
    },

    //解除锁定
    onRemoveLock: function () {
        var me = this, refs = me.getReferences(), loginPwd = refs.loginPwd.getValue();
        if (App.UserInfo.LoginPassWord == loginPwd) {
            App.Ajax.request({
                url: "/api/Token",
                method: "POST",
                nosim: true,
                type: "JSON",
                showmask: true,
                maskmsg: "解锁中...",
                params: {
                    LoginName: App.UserInfo.LoginName,
                    LoginPassWord: App.UserInfo.LoginPassWord
                },
                success: function (rs) {
                    if (!Ext.isEmpty(rs.Data)) {
                        var data = rs.Data;
                        App.UserInfo.Token = data.Token;
                        App.UserInfo.IsSuperUser = data.IsSuperUser;
                        App.UserInfo.UserID = data.UserID;
                        App.UserInfo.UserName = data.UserName;
                        App.Cookie.SetCookie("TokenGuid", data.Token);
                        Ext.util.History.back();
                    } else {
                        App.Msg.Warning("用户名或密码不正确");
                    }
                },
                error: function (data) {
                    App.Msg.Error("锁定异常");
                }
            })
        } else {
            App.Msg.Warning("密码输入错误");
        }

    },

    //登录页面初始化
    onloginAfterrender: function () {
        var me = this, tokenGuid = App.Cookie.GetCookie("TokenGuid");
        if (!Ext.isEmpty(tokenGuid)) {
            me.onLoginClick();
        }
    }
})