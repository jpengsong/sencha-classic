/**
 * 用户授权模拟和接口
 * 
 */
Ext.define('App.data.authentication.Authentication', {
    extend: "App.data.Simulated",
    
    Init: function () {
        var me = this;
        me.Token();
        me.ValidaToken();
    },

    Token: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/Token",
            getData: function (ctx) {
                var data = me.RequestData(ctx).Data,userInfo;
                if(data.LoginName=="Admin"&&data.LoginPassWord=="123456"){
                    UserInfo={
                        Token:"11bdaf6f-e1b9-499d-815e-eddd29c861f2",
                        IsSuperUser:true,
                        UserName:"Admin"
                    };
                }
                return UserInfo;
            }
        })
    },

    ValidaToken:function(){
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/ValidaToken",
            getData: function (ctx) {
                var tokenGuid = me.RequestData(ctx).TokenGuid,userInfo;
                if(tokenGuid=="11bdaf6f-e1b9-499d-815e-eddd29c861f2"){
                    userInfo={
                        Token:"11bdaf6f-e1b9-499d-815e-eddd29c861f2",
                        IsSuperUser:true,
                        UserName:"Admin"
                    };
                }
                return userInfo;
            }
        })
    }
})