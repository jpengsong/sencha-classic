Ext.define('App.ux.utility.Config', {
    alternateClassName: ['config'],
    statics: {
        QueryMethod : {
            /**
             * 等于
             * @readonly
             */
            Equal: " = ",
            /**
             * 不等于
             * @readonly
             */
            NotEqual: " != ",
            /**
             * 大于
             * @readonly
             */
            GreaterThan: " > ",
            /**
             * 大于等于
             * @readonly
             */
            GreaterThanOrEqual: " >= ",
            /**
             * 小于
             * @readonly
             */
            LessThan: " < ",
            /**
             * 小于等于
             * @readonly
             */
            LessThanOrEqual: " <= ",
            /**
             * Like
             * @readonly
             */
            Like: " Like ",
            /**
             * Is Null
             * @readonly
             */
            IsNull: " Is Null ",
            /**
             * Is Not Null
             * @readonly
             */
            IsNotNull: " Is Not Null ",
            /**
            * In
            * @readonly
            */
            In: " In "
        },

        Guid :{
            /**
             * 提供空Guid字符串
             * @readonly
             */
            Empty: "00000000-0000-0000-0000-000000000000"
        },
        setToken: function (userName, userPwd,isFirst) {
            var me = this;
            if (!Ext.isEmpty(userName) && !Ext.isEmpty(userPwd)) {
                me.user = {
                    userName: userName,
                    userPwd: userPwd,
                    isFirst:isFirst
                };
                App.Cookie.SetCookie('token', JSON.stringify(me.user));
            }
        },

        getToken: function () {
            var me, token; me = this;
            token = App.Cookie.GetCookie('token');
            if (!Ext.isEmpty(token)&&Ext.isEmpty(me.user)) {
                me.user =JSON.parse(token);
            }
            //return token;
            return {"userName":"Admin","userPwd":"123456","isFirst":true};
        },
    }
})
