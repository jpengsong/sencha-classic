Ext.define("App.view.login.LoginController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginClick: function () {
        var me, refs, form, userName, userPwd; me = this; refs = me.getReferences(); form = refs.form;
        var myMask = new Ext.LoadMask({
            msg:'登录中...',
            modal :false,
            target : me.getView()
        });
        myMask.show();
        if (form.isValid()) {
            setTimeout(() => {
                userName = refs.userName.getValue();
                userPwd = refs.userPwd.getValue();
                if (userName == "Admin" && userPwd == "123456") {
                    App.UserInfo.userName=userName;
                    App.UserInfo.userPwd=userPwd;
                    App.UserInfo.IsSuperUser=true;
                    App.UserInfo.Token="7e5f5c69-cb23-4bd8-94ad-133c8e5dad2a"; 
                    me.redirectTo('user.login', true);
                }else{
                    alert("用户名或密码不存在");
                }
                myMask.hide();
            }, 1000);
            
        }else{
            alert("请检查登录信息");
        }
    }
})