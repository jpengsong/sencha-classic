/**
 * Ext请求数据 
 */
Ext.define("App.ux.utility.Ajax", {
    alternateClassName: ['App.Ajax'],
    statics: {
        /**
        * 发起Ajax.request请求
        * @param {Object} option 包含下列属性的对象
        * @param {Object} option.data 传给后台的参数
        * @param {Object} option.baseUrl 提交至后台的url地址，缺省为``
        * @param {String} option.url 提交至后台的url接口
        * @param {String} option.method 提交方法，缺省为`POST`
        * @param {String} option.type 返回类型，缺省为`JSON`
        * @param {String} option.params 提交的其他参数
        * @param {Function} option.success 提交成功后执行的函数
        * @param {Function} option.error 提交失败后执行的函数
        * @param {Boolean} option.async 是否异步提交数据，缺省为`true`
        * @param {Number} option.timeout 请求延时，毫秒，缺省为`30000`
        * @param {Object} option.scope 作用域，缺省为`this`
        * @param {Boolean} option.nosim 参数设置 false 请求本地接口,true 请求远程接口 缺省为true
        * @param {Boolean} option.showmask 参数设置true显示遮罩
        * @param {String} option.maskmsg 遮罩显示消息 缺省为 '正在请求数据...'
        * @static
        */
        request: function (option) {
            var me = this, config, myMask;
            if (option.showmask) {
                myMask = Ext.create({
                    xtype:"loadmask",
                    msg: option.maskmsg || '正在请求数据...',
                    componentCls: "x-mask-ui",
                    target: Ext.getCmp("mainCardPanel")
                });
                myMask.show();
            }
            config = {
                url: (option.baseUrl || "") + (option.url || ""),
                method: option.method || "POST",
                nosim: Ext.isEmpty(option.nosim) ? true : option.nosim,
                params: Ext.apply({ RequestData: me.getRequestData(option.params) }),
                async: option.async || true, //异步请求数据
                timeout: option.timeout || 30000,
                success: function (response) {
                    if (option.showmask) {
                        myMask.destroy();
                    }
                    var responseData = response.responseText;
                    if (option.type == "JSON") {
                        responseData = Ext.decode(responseData);
                    }
                    if (Ext.isFunction(option.success)) {
                        option.success(responseData);
                    }
                },
                failure: function (msg) {
                    if (option.showmask) {
                        myMask.destroy();
                    }
                    if (Ext.isFunction(option.error)) {
                        option.error(msg);
                    }
                }
            };
            Ext.Ajax.request(config);
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
        getRequestData: function (oData) {
            var me = this, data = "";
            if (Ext.isEmpty(data)) {
                if (Ext.typeOf(oData) === "object" || Ext.typeOf(oData) === "array") {
                    data = Ext.encode(oData);
                } else {
                    data = oData;
                }
            }
            return Ext.encode({ TokenGuid: me.getUserToken(), Data: data });
        },

        /**
         * 获取用户token
         * @return {String} 当前用户token
         */
        getUserToken: function () {
            var token = "";
            if (Ext.isEmpty(App.UserInfo.Token)) {
                token = Ext.util.Cookies.get("TokenGuid");
            }
            else {
                token = App.UserInfo.Token;
            }
            return token;
        }
    }
})