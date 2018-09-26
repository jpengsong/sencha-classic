
/**
 * 树节点数据 
 */
Ext.define('ux.utility.TreeNode', {
    alternateClassName: ['ux.TreeNode'],
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
