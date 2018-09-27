/**
 * 处理用户信息的工具类 
 */
Ext.define('ux.utility.UserInfo', {
    alternateClassName: ['App.UserInfo'],

    statics: {
        /**
         * 当前用户token
         */
        Token: null,
        /**
         * 当前用户refreshToken
         */
        RefreshToken: null,
        /**
         * 是否是超级管理员
         */
        IsSuperUser: null,

        /**
         * UserID
         */
        UserID: null,
        /**
         * 用户名
         */
        UserName: null,

        setData: function (userId, userName, token, refreshToken, isSuperUser) {
            var me = this;
            me.UserID = userId;
            me.UserName = userName;
            me.Token = token;
            me.RefreshToken = refreshToken;
            me.IsSuperUser = isSuperUser;
        }
    }
});
