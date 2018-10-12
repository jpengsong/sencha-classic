/**
 * Ext请求数据 
 */
Ext.define("ux.framework.Ajax", {
    alternateClassName: ['ux.Ajax'],
    statics: {
        /**
        * 发起Ajax.request请求
        * @param {Object} option 包含下列属性的对象
        * @param {Object} option.data 传给后台的参数
        * @param {Object} option.baseUrl 提交至后台的url地址，缺省为`http://localhost:1841/`
        * @param {String} option.url 提交至后台的url接口
        * @param {String} option.method 提交方法，缺省为`POST`
        * @param {String} option.type 返回类型，缺省为`JSON`
        * @param {String} option.params 提交的其他参数
        * @param {Function} option.success 提交成功后执行的函数
        * @param {Function} option.error 提交失败后执行的函数
        * @param {Boolean} option.async 是否异步提交数据，缺省为`true`
        * @param {Number} option.timeout 请求延时，毫秒，缺省为`30000`
        * @param {Object} option.scope 作用域，缺省为`this`
        * @static
        */
        request: function (option) {
            var me = this, config;
            config = {
                url: (option.baseUrl || "http://localhost:1841/") + (option.url || ""),
                method: option.method || "POST",
                params: me.getRequestData(option),
                async: option.async || true, //异步请求数据
                timeout: option.timeout || 30000,
                success: function (response) {
                    var responseData = response.responseText;
                    if (option.type == "JSON") {
                        responseData = Ext.decode(responseData);
                    }
                    if (Ext.isFunction(option.success)) {
                        option.success(responseData.Data);
                    }
                },
                failure: function (msg) {
                    if (Ext.isFunction(option.error)) {
                        option.error(msg);
                    }
                }
            };
            Ext.Ajax.request(config);
        },
        /**
         * 发起Ajax.proxy请求
         * @param {String} option.url 提交至后台的url地址，缺省为`http://localhost:1841/`
         * @param {Number} option.timeout 请求延时，毫秒，缺省为`60000`
         * @param {Object} option.type 请求类型，缺省为`JSON`
         * @param {Object} option.Data 传给后台的参数
         * @param {String} option.method 提交方法，缺省为`POST`
         * *
         */
        proxy: function (option) {
            var me = this;
            new Ext.data.proxy.Ajax({
                timeout: 60000,
                url: "http://localhost:1841/" + option.url,
                extraParams: me.getRequestData(option),
                actionMethods: { read: option.method || "POST" },
                reader: Ext.create('ux.framework.Reader', { type: option.dataType })
            })
        },

        /**
        * 获取url参数名称内容
        * @param {String} url 
        * @param {String} name 
        * @return {Object} 没有返回null
        * @static
        * 
        */
        getQueryString: function (url, name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = url.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        },

        /**
        * 获取 RequestData ,适用于所有请求。
        * 请求后台action有固定的格式，包括TokenGuid和Data。
        * 此方法根据传入参数构造出一个标准json格式的数据，一般不直接调用。
        * 
        * @param {Object} option 包含下列属性的对象
        * @param {Object} oData 传给后台的参数 
        * @static
        * @private
        */
        getRequestData: function (option) {
            var me = this, data = "";
            if (option.data !== undefined) {
                if (Ext.typeOf(option.data) === "object" || Ext.typeOf(option.data) === "array") {
                    data = Ext.encode(option.data)

                } else {
                    data = option.data;
                }
            }
            return { TokenGuid: me.getUserToken(), Data: data };
        },

        /**
        * 获取用户token
        * @return {String} 当前用户token
        */
        getUserToken: function () {
            return ux.UserInfo.Token;
        }
    }
})