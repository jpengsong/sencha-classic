Ext.define("App.view.authentication.AuthenticationController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //登录
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
})