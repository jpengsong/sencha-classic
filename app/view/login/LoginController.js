Ext.define("App.view.login.LoginController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginClick: function () {
        var me, refs, form, userName, userPwd; me = this; refs = me.getReferences(); form = refs.form;
        if (form.isValid()) {
            userName = refs.userName.getValue();
            userPwd = refs.userPwd.getValue();
            if (userName == "Admin" && userPwd == "123456") {
                config.setToken(userName, userPwd,true);
                me.redirectTo('user.login', true);
            }else{
                alert("用户名或密码不存在");
            }
        }else{
            alert("请检查登录信息");
        }
    }
})