/**
 * 处理用户信息的工具类 
 */
Ext.define('App.ux.utility.UserInfo', {
    alternateClassName: ['App.UserInfo'],

    statics: {
        /**
         * 当前用户token
         */
        Token: null,
        
        /**
         * 是否是超级管理员
         */
        IsSuperUser: null,

        /**
         * UserID
         */
        UserID: null,

        /**
         * 账号名
         */
        LoginName: null,

        /**
         * 用户名
         */
        UserName: null,

        /**
         * 密码
         */
        LoginPassWord:null,

        /**
         * 业务代码
         */
        BizCodes:[]
    }
});
