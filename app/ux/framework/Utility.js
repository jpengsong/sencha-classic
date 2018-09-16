/**
 * 操作Cookie的工具类。需要处理cookie时，使用此类的SetCookie和GetCookie方法来设置和获取cookie值。
 * 例子如下：
 * 
 * 
 *       @example
 *       App.Cookie.SetCookie('username', 'abc');//设置cookie
 *       var name = App.Cookie.GetCookie('username');//获取cookie值
 * 
 */
Ext.define('ux.framework.Cookie', {
    alternateClassName: ['ux.Cookie'],

    statics: {
        /**
        * 设置 cookie
        *       
        * @param {String} name Cookie名称
        * @param {String} value Cookie值
        * @static
        */
        SetCookie: function (name, value) {
            document.cookie = name + "=" + escape(value);
        },

        /**
         * 设置 cookie, 默认30天过期时间
         * @param {String} name Cookie名称
         * @param {String} value Cookie值
         * @param {String} expires
         * @static
         */
        SetExpiresCookie: function (name, value, expires) {
            var Days, exp;

            Days = 30; //cookie 将被保存 30 天
            exp = new Date();
            if (Ext.isEmpty(expires)) {
                exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            } else {
                exp = expires;
            }
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
        },

        /**
        * 获取 cookie
        * @param {String} name Cookie名称
        * @return {Object} Cookie值，没有返回null
        * @static
        */
        GetCookie: function (name) {
            var arr;

            arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));

            if (arr !== null) {
                return unescape(arr[2]);
            }
            return null;
        },

        /**
        * 删除 cookie
        * @param {String} name Cookie名称
        * @static
        */
        DeleteCookie: function (name) {
            var me = this, exp, cookieval;

            exp = new Date();

            exp.setTime(exp.getTime() - 1);
            cookieval = me.GetCookie(name);

            if (cookieval !== null) {
                document.cookie = name + "=" + cookieval;
            }
        }
    }
});

/**
 * 处理用户信息的工具类 
 */
Ext.define('ux.framework.UserInfo', {
    alternateClassName: ['ux.UserInfo'],

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

/**
 * 树节点数据 
 */
Ext.define('ux.framework.Tree', {
    alternateClassName: ['ux.Tree'],
    statics: {
        /**
        * 递归选择节点
        * @param {Object} node
        * @param {Object} checked
        */
        changeChecked: function (node, checked) {
            if (Ext.isArray(node)) {
                for (var i = node.length - 1; i >= 0; i--) {
                    this.changeChecked(node[i], checked);
                }
            } else {
                if (node.data.checked != null) {
                    node.set("checked", checked);
                }
                if (node.childNodes.length > 0) {
                    this.changeChecked(node.childNodes, checked);
                }
            }
        },

        /**
        * 绑定数据树控件数据
        * @param {Array} list 包含主id、父id结构的列表数据
        * @param {String} idField 主id字段名
        * @param {String} parentField 父id字段名
        * @param {Boolean} isExpand 是否展开各级节点
        * @param {Function} nodeConfig 绑定节点时执行的函数
        */
        bindTreeData: function (list, rootNode, idField, parentField, isExpand, isAllExpand, nodeLevel, nodeConfig, loadtype, iconClsField) {
            rootNode = { expanded: true, children: [] }
            var me = this, root = true, rootList = new Array();
            for (var i = 0; i < list.length; i++) {
                if (list[i][parentField] == nodeLevel) {
                    rootList.push(list[i]);
                }
            }
            for (var k = 0; k < rootList.length; k++) {
                var op = {
                    parentNode: rootNode,
                    parentValue: rootList[k][idField],
                    idField: idField,
                    dataList: list,
                    node: rootList[k],
                    parentField: parentField,
                    isExpand: isExpand && isAllExpand,
                    loadtype: loadtype,
                    iconClsField: iconClsField,
                    nodeConfig: nodeConfig
                };
                me.bindNode(op);
            }
            return rootNode;
        },

        /**
        * 绑定节点
        * @param {Object} options 输入参数，包含下列属性的对象
        * @private
        */
        bindNode: function (options) {
            options = options || {};
            var parentNode = options.parentNode;
            var parentValue = options.parentValue;
            var dataList = options.dataList;
            var idField = options.idField;
            var parentField = options.parentField;
            var isExpand = options.isExpand;
            var loadtype = options.loadtype;
            var iconClsField = options.iconClsField;
            var me = this;
            if (options.nodeConfig === null) {
                options.nodeConfig = function (data, node) {
                    return node;
                };
            }
            var node = options.node;
            if (loadtype == 'sync') {
                node.leaf = true;
            } else {
                if (node.CHILD_COUNT > 0) {
                    node.leaf = false;
                } else {
                    node.leaf = true;
                }
            }
            if (!Ext.isEmpty(iconClsField)) {
                node.iconCls = node[iconClsField];
            }
            //            if (isExpand) {
            //                node.expanded = true;
            //            }
            node = options.nodeConfig(options.node, node);
            parentNode.leaf = false;
            parentNode.expanded = isExpand;
            if (parentNode.children == null) {
                parentNode.children = [];
            }
            parentNode.children.push(node);
            var op = {
                parentNode: node,
                parentValue: node[idField],
                idField: idField,
                dataList: dataList,
                parentField: parentField,
                isExpand: isExpand,
                loadtype: loadtype,
                iconClsField: iconClsField,
                nodeConfig: options.nodeConfig
            };
            me.bindTree(op);
        },

        /**
        * 绑定数据
        * @param {Object} options 输入参数，包含下列属性的对象
        * @private
        */
        bindTree: function (options) {
            options = options || {};
            var parentNode = options.parentNode;
            var parentValue = options.parentValue;
            var dataList = options.dataList;
            var idField = options.idField;
            var parentField = options.parentField;
            var isExpand = options.isExpand;
            var loadtype = options.loadtype;
            var iconClsField = options.iconClsField;
            var me = this;
            if (options.nodeConfig === null) {
                options.nodeConfig = function (data, node) {
                    return node;
                };
            }
            for (var i = 0, len = dataList.length; i < len; i++) {
                if (dataList[i][parentField] == parentValue) {
                    var op = {
                        parentNode: parentNode,
                        parentValue: parentValue,
                        idField: idField,
                        dataList: dataList,
                        parentField: parentField,
                        node: dataList[i],
                        isExpand: isExpand,
                        loadtype: loadtype,
                        iconClsField: iconClsField,
                        nodeConfig: options.nodeConfig
                    };
                    me.bindNode(op);
                }
            }
        },


        /**
        * 添加子节点
        * @param {Object} node 父级节点
        * @param {Array} children 子节点数组
        */
        appendChildren: function (node, children) {
            for (i = 0, ln = children.length; i < ln; i++) {
                children[i] = node.createNode(children[i]);
                children[i].phantom = false;
            }
            node.appendChild(children);
        },

        /**
        * 获取树的根节点,是否是超级管理员
        * @return 
        */
        getRootOrgID: function () {
            var rootParentValue = null;
            if (!ux.UserInfo.IsSuperUser) {
                rootParentValue = ux.UserInfo.BelongToOrgID;
            }
            return rootParentValue;
        }
    }
});

/**
 *  Tab页面
 */
Ext.define('ux.framework.Tab', {
    alternateClassName: ['ux.Tab'],
    statics: {
        openPage: function (url, config) {
            var tabsMain, tab = null;
            tabsMain = Ext.getCmp("tabsMain");
            if (tabsMain.items.length == 0) {
                tab = Ext.create("App.view.main.Welcome", { title: "首页", iconCls: 'fa fa-home fa-1-5x' });
            } else {
                if (tabsMain.child('component[xtype=' + url + ']') == null) {
                    tab = Ext.create({ xtype: url, title: config.title, iconCls: config.icon, closable: true });
                }
            }
            if (!Ext.isEmpty(tab)) {
                tabsMain.add(tab);
                tabsMain.setActiveTab(tabsMain.items.length - 1);
            } else {
                tabsMain.setActiveTab(tabsMain.child('component[xtype=' + url + ']'));
            }
        }
    }
})

/**
 * 处理页面的工具类 
 */
Ext.define('ux.framework.Page', {
    alternateClassName: ['ux.Page'],
    statics: {
        getQueryItems: function (queryItems) {
            var me, query = {}; me = this;
            for (var i = 0; i < queryItems.items.length; i++) {
                if (!Ext.isEmpty(queryItems.items[i].getValue()) && !Ext.isEmpty(queryItems.items[i].name)) {
                    query[queryItems.items[i].name] = queryItems.items[i].getValue();
                }
            }
            return query;
        },

        setQueryItems: function (store, queryItems) {
            var queryData, query;
            var queryData = store.getProxy().extraParams.Data;
            if (Ext.isEmpty(queryData)) {
                queryData = {};
                queryData.QueryItems = {};
            } else {
                queryData = Ext.decode(queryData);
            }
            queryData.QueryItems = Ext.apply(queryData.QueryItems, queryItems);
            store.getProxy().setExtraParam("Data", Ext.encode(queryData));
        },

        //选择行数据
        selectionModel: function (grid, isMultSet) {
            var records, rs; rs = false;
            records = grid.getSelectionModel().getSelection();
            if (records.length > 0) {
                if (records.length > 1 && !isMultSet) {
                    Ext.Msg.alert("提示", "只能选择一行数据");
                } else {
                    rs = true;
                }
            } else {
                Ext.Msg.alert("提示", "请选择数据,再操作！");
            }
            return rs;
        },

        //删除
        getGridField: function (grid, field) {
            var records, ids; ids = new Array();
            records = grid.getSelectionModel().getSelection();
            for (var i = 0; i < records.length; i++) {
                ids.push(records[i].data[field]);
            }
            return ids;
        }
    }
})

/**
 * Ext请求数据 
 */
Ext.define("ux.framework.Ajax", {
    alternateClassName: ['ux.Ajax'],
    statics: {
        /**
        * 发起Ajax.request请求
        * @param {Object} option 包含下列属性的对象
        * @param {Object} option.Data 传给后台的参数
        * @param {String} option.url 提交至后台的url地址，缺省为`http://localhost:1841/`
        * @param {String} option.method 提交方法，缺省为`POST`
        * @param {String} option.type 返回类型，缺省为`JSON`
        * @param {String} option.params 提交的其他参数
        * @param {Function} option.success 提交成功后执行的函数
        * @param {Function} option.error 提交失败后执行的函数
        * @param {Boolean} option.async 是否异步提交数据，缺省为`true`
        * @param {Number} option.timeout 请求延时，毫秒，缺省为`30000`
        * @param {Object} option.scope 作用域，缺省为`this`
        * @param {Boolean} option.showMask 是否加遮罩，缺省为`false`
        * @param {Ext.Component} option.MaskTarget 被遮罩的组件
        * @static
        */
        request: function (option) {
            var me = this, config, loadMask, maskTarget, maskTargetMsg, showMask = false;
            //显示遮罩
            if (!Ext.isEmpty(option.showMask) && option.showMask) {
                //显示Mask
                showMask = true;

                if (Ext.isEmpty(option.maskTarget)) {
                    maskTarget = Ext.ComponentQuery.query("container[itemId='mainView']")[0];
                } else {
                    maskTarget = option.maskTarget;
                }
                if (Ext.isEmpty(option.maskTargetMsg)) {
                    maskTargetMsg = "处理中";
                } else {
                    maskTargetMsg = option.maskTargetMsg;
                }
                loadMask = new Ext.LoadMask({
                    msg: maskTargetMsg,
                    target: maskTarget
                });
                loadMask.show();
            };
            config = {
                url: option.url || "",
                method: option.method || "POST",
                params: me.getRequestData(option),
                async: option.async, //异步请求数据
                timeout: option.timeout || 30000,
                success: function (response) {
                    if (showMask) {
                        loadMask.destroy();
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
                    if (showMask) {
                        loadMask.destroy();
                    }
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
                url: "http://localhost:1841/" + option.url,
                timeout: 60000,
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
