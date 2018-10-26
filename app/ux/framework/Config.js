Ext.define('ux.framework.Config', {
    alternateClassName: ['config'],
    statics: {
        user: null,
        guid: null,
        pageNode: null,
        init: function () {
            var me = this;
            me.guid = { Empty: "00000000-0000-0000-0000-000000000000" };
            me.pageNode = ["login", "home"];
            me.getToken();
        },

        setToken: function (userName, userPwd,isFirst) {
            var me = this;
            if (!Ext.isEmpty(userName) && !Ext.isEmpty(userPwd)) {
                me.user = {
                    userName: userName,
                    userPwd: userPwd,
                    isFirst:isFirst
                };
                ux.Cookie.SetCookie('token', JSON.stringify(me.user));
            }
        },

        getToken: function () {
            var me, token; me = this;
            token = ux.Cookie.GetCookie('token');
            if (!Ext.isEmpty(token)&&Ext.isEmpty(me.user)) {
                me.user =JSON.parse(token);
            }
            return token;
        }
    }
})
