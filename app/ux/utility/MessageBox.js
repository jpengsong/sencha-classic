/**
 * Ext 提示框的工具类
 */
Ext.define('App.ux.utility.MessageBox', {
    alternateClassName: ['App.Msg'],
    statics: {

        /**
        * 信息框
        *       
        * @param {object} 消息 或者 弹框配置项
        * @static
        */
        Info: function (object) {
            var config = {
                title: '提示',
                buttons: Ext.MessageBox.OK,
                icon: Ext.Msg.INFO
            };
            if (Ext.typeOf(object) == "string") {
                config.msg = object;
            }
            if (Ext.typeOf(object) == "object") {
                Ext.apply(config, object);
            }
            config.msg=config.msg;
            Ext.MessageBox.show(config);
        },

        /**
        * 异常框
        *       
        * @param {object} 消息 或者 弹框配置项
        * @static
        */
        Error: function (object) {
            var config = {
                title: '提示',
                buttons: Ext.MessageBox.OK,
                icon: Ext.Msg.ERROR
            };
            if (Ext.typeOf(object) == "string") {
                config.msg = object;
            }
            if (Ext.typeOf(object) == "object") {
                Ext.apply(config, object);
            }
            config.msg=config.msg;
            Ext.MessageBox.show(config);
        },

        /**
        * 询问框
        *       
        * @param {object} 消息 或者 弹框配置项
        * @static
        */
        Question: function (object) {
            var config = {
                title: '提示',
                buttons: Ext.MessageBox.OK,
                icon: Ext.Msg.QUESTION
            };
            if (Ext.typeOf(object) == "string") {
                config.msg = object;
            }
            if (Ext.typeOf(object) == "object") {
                Ext.apply(config, object);
            }
            config.msg=config.msg;
            Ext.MessageBox.show(config);
        },

        /**
        * 警告框
        *       
        * @param {object} 消息 或者 弹框配置项
        * @static
        */
        Warning: function (object) {
            var config = {
                title: '提示',
                buttons: Ext.MessageBox.OK,
                icon: Ext.Msg.WARNING
            };
            if (Ext.typeOf(object) == "string") {
                config.msg = object;
            }
            if (Ext.typeOf(object) == "object") {
                Ext.apply(config, object);
            }
            config.msg=config.msg;
            Ext.MessageBox.show(config);
        }
    }
})