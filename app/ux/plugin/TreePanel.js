/*
    *
    *  扩展TreePanel插件
*/
Ext.define("App.ux.plugin.TreePanel", {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.treepanel',

    treepanel: null,

    /**
    * init function
    */
    init: function (treepanel) {
        var me; me = this;
        me.treepanel = treepanel;
        me.treepanel.updateChildNodes = me.updateChildNodes;
    },

    //更新当前节点的所有子节点
    updateChildNodes: function (parentNode) {
        var me, treeStore, reader; me = this, treeStore = me.getStore();
        if (treeStore != null) {
            reader = treeStore.getProxy().getReader(),
                params = {}; params[reader.idField] = parentNode.get(reader.idField);
            App.Ajax.request({
                url: treeStore.getProxy().getUrl(),
                method: "GET",
                nosim: false,
                type: "JSON",
                params: params,
                success: function (data) {
                    data = data.Data;
                    parentNode.removeAll();
                    records = App.TreeNode.bindTreeData(data.List, reader.idField, reader.parentField, reader.iconClsField, false, false, parentNode.get(reader.idField), reader.checkedField);
                    for (var i = 0; i < records.length; i++) {
                        parentNode.appendChild(records[i]);
                    }
                }
            })
        }
    }
})