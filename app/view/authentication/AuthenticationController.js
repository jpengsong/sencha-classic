Ext.define("App.view.authentication.AuthenticationController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //登录
    onLoginClick: function () {
        var me = this, url, params, tokenGuid = App.Cookie.GetCookie("TokenGuid"), refs = me.getReferences(), form = refs.form, userName = refs.userName.getValue(), userPwd = refs.userPwd.getValue();
        if (!Ext.isEmpty(tokenGuid)) {
            url = "/api/ValidaToken";
        } else {
            url = "/api/Token";
            params = {
                LoginName: userName,
                LoginPassWord: userPwd
            }
        }

        if (form.isValid()) {
            App.Ajax.request({
                url: url,
                method: "POST",
                nosim: false,
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

    //登录页面初始化
    onloginAfterrender: function () {
        var me = this, tokenGuid = App.Cookie.GetCookie("TokenGuid");
        if (!Ext.isEmpty(tokenGuid)) {
            me.onLoginClick();
        }
    }
})