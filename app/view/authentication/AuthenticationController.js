Ext.define("App.view.authentication.AuthenticationController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //登录
    onLoginClick: function () {
        var me = this, refs = me.getReferences(), form = refs.form, userName = refs.userName.getValue(), userPwd = refs.userPwd.getValue();
        if (form.isValid()) {
            App.Cookie.DeleteCookie("TokenGuid");
            App.Cookie.DeleteCookie("LoginName");
            App.Cookie.DeleteCookie("LoginPassWord");
            App.Ajax.request({
                url: "/api/Token",
                method: "POST",
                nosim: true,
                type: "JSON",
                showmask: true,
                maskmsg: "登录中...",
                params: {
                    LoginName: userName,
                    LoginPassWord: userPwd
                },
                success: function (rs) {
                    var data = Ext.decode(rs.Data);
                    App.UserInfo.Token = data.Token;
                    App.UserInfo.IsSuperUser = data.IsSuperUser;
                    App.UserInfo.UserID = data.UserID;
                    App.UserInfo.UserName = data.UserName;
                    App.Cookie.SetCookie("TokenGuid", data.Token);
                    App.Cookie.SetCookie("LoginName", userName);
                    App.Cookie.SetCookie("LoginPassWord", userPwd);
                    me.redirectTo('user.login', true);
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
        var me = this, refs = me.getReferences();
        var loginName = App.Cookie.GetCookie("LoginName");
        var loginPassWord = App.Cookie.GetCookie("LoginPassWord");
        if (!Ext.isEmpty(loginName) && !Ext.isEmpty(loginPassWord)) {
            refs.userName.setValue(loginName);
            refs.userPwd.setValue(loginPassWord);
            me.onLoginClick();
        }
    }
})