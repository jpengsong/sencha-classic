Ext.define("App.view.authentication.AuthenticationController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //登录
    onLoginClick: function () {
        var me = this, refs = me.getReferences(), form = refs.form, userName = refs.userName.getValue(), userPwd = refs.userPwd.getValue();
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
                App.UserInfo.UserID = "e415d214-2159-42b3-a50a-f8f407b061ef";
                App.Cookie.SetCookie("user", Ext.encode({ userName: userName, userPwd: userPwd, IsSuperUser: true }));
                me.redirectTo('user.login', true);
            } else {
                alert("用户名或密码不存在");
            }
            myMask.destroy();
        } else {
            alert("请检查登录信息");
        }
    },

    //登录页面初始化
    onloginAfterrender: function () {
        var me=this,refs = me.getReferences();
        if (!Ext.isEmpty(App.Cookie.GetCookie("user"))) {
            var user = Ext.decode(App.Cookie.GetCookie("user"));
            refs.userName.setValue(user.userName);
            refs.userPwd.setValue(user.userPwd);
            me.onLoginClick();
        }
    }
})