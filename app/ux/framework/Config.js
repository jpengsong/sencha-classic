Ext.define('ux.framework.Config', {
    alternateClassName: ['config'],
    statics: {
        token: null,
        guid: null,
        pageNode: null,
        init: function () {
            var me = this;
            me.guid = { Empty: "00000000-0000-0000-0000-000000000000" };
            me.pageNode = ["login", "home"];
        },
        setToken: function (userName, userPwd) {
            if (!Ext.isEmpty(userName) && !Ext.isEmpty(userPwd)) {
                var me = this;
                me.token = {
                    userName: userName,
                    userPwd: userPwd
                };
            }
        }
    }
})
