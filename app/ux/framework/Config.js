Ext.define('ux.framework.Config', {
    alternateClassName: ['config'],
    config: {

    },
    token: null,
    whitelist: null,
    GridStore: "GridStore",
    TreeStore: "TreeStore",
    ComboStore: "ComboStore",
    Guid: { Empty: "00000000-0000-0000-0000-000000000000" },
    initComponent: function () {
        var me = this;
        me.initWhitelist();
        me.callParent();
    },
    setToken: function (userName, userPwd) {
        if (!Ext.isEmpty(userName) && !Ext.isEmpty(userPwd)) {
            var me = this;
            me.token = {
                userName: userName,
                userPwd: userPwd
            };
        }
    },
    initWhitelist() {
        var me = this;
        me.whitelist = new Ext.util.Collection();
        me.whitelist.add("login");
        me.whitelist.add("home");
    }
})

