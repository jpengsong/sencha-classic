
/**
 * 树节点数据 
 */
Ext.define('App.ux.utility.TreeNode', {
    alternateClassName: ['App.TreeNode'],
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
        bindTreeData: function (list, idField, parentField, textField, iconClsField, isExpand, isAllExpand, rootId, checkedField) {
            var me = this, rootNode = [], options = {};
            if (!Ext.isEmpty(idField) && !Ext.isEmpty(parentField) && !Ext.isEmpty(textField)) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i][parentField] == rootId) {
                        options = (
                            {
                                id: list[i][idField],
                                parentid: list[i][parentField],
                                text: list[i][textField],
                                iconCls: list[i][iconClsField],
                                idField: idField,
                                parentField: parentField,
                                textField: textField,
                                isAllExpand: isAllExpand,
                                checkedField: checkedField,
                                expanded: isExpand || isAllExpand,
                                node: list[i],
                                leaf: true,
                                list: list,
                                children: []
                            }
                        );
                        rootNode.push(options);
                        me.bindNode(options);
                    }
                }
            }
            return rootNode;
        },

        /**
        * 绑定节点
        * @param {Object} options 输入参数，包含下列属性的对象
        * @private
        */
        bindNode: function (options) {
            var me = this, list = options.list, parentid = options.id, node = {};
            for (var i = 0; i < list.length; i++) {
                if (list[i][options.parentField] == parentid) {
                    node = {
                        id: list[i][options.idField],
                        parentid: parentid,
                        text: list[i][options.textField],
                        iconCls: list[i][options.iconClsField],
                        idField: options.idField,
                        parentField: options.parentField,
                        textField: options.textField,
                        isAllExpand: options.isAllExpand,
                        checkedField: options.checkedField,
                        expanded: options.isAllExpand,
                        node: list[i],
                        leaf: true,
                        list: list,
                        children: []
                    };
                    options.children.push(node);
                    options.leaf=false;
                    me.bindNode(node);
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
