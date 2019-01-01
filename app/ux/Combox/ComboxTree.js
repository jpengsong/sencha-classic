/**
 * 下拉树 使用例子如下 
 * 
 * 作者：小靳一郎  时间：2018-12-31
 * 
 * {
 *   xtype: "comboxtree",
 *   fieldLabel: 'fieldText',
 *   name: "name",
 *   displayField: "text",
 *   valueField: "value",
 *   width: "100%",
 *   height: 200,
 *   rootVisible: false,
 *   bind: {
 *       defaultvalue: "{value}",
 *       store: "{store}"
 *   }
 * },
 */
Ext.define('App.ux.combox.ComboxTree', {
    extend: 'Ext.form.field.Picker',
    xtype: 'comboxtree',
    config: {
        autoLoad: true,
        store: null,
        displayField: "text",
        valueField: "value",
        width: "100%",
        height: 200,
        rootVisible: false,
        treepanel: null,
        querylocal: true,
        defautvalue: ""
    },

    createPicker: function () {
        var me = this;
        me.treepanel = Ext.create({
            xtype: "treepanel",
            floating: true,
            width: me.width,
            height: me.height,
            store: me.store,
            rootVisible: me.rootVisible,
            columns: [{
                xtype: 'treecolumn',
                flex: 1,
                dataIndex: me.displayField,
                renderer: function (value) {
                    return me.rendererRegExp ? value.replace(me.rendererRegExp, '<span style="color:red;font-weight:bold">$1</span>') : value;
                }
            }],
            plugins: {
                requestdata: {
                    autoLoad: me.autoLoad,
                    root: {
                        expanded: true,
                        children: []
                    }
                }
            },
            listeners: {
                select: function (com, record, index, eOpts) {
                    me.setValue(record.data[me.displayField]);
                    me.rendererRegExp = null;
                    me.store.clearFilter();
                    me.collapse();
                },
                load: function () {
                    me.doSetValue();
                }
            }
        });
        return me.treepanel;
    },

    notifyValue: function () {
        var me = this, viewModel = me.getBind().defautvalue.owner; path = me.getBind().defautvalue.stub.path;
        viewModel.set(path, me.defautvalue);
    },

    setDefautvalue: function (value) {
        var me = this;
        me.defautvalue = Ext.isEmpty(value) ? "" : value;
    },

    setStore: function (store) {
        var me = this;
        me.store = store;
        me.getPicker();
    },

    doSetValue: function () {
        var me = this, store = me.store, record, value;
        if (!Ext.isEmpty(store) && !Ext.isEmpty(me.defautvalue)) {
            record = store.findNode(me.valueField, me.defautvalue);
            if (!Ext.isEmpty(record) && !Ext.isEmpty(me.displayField)) {
                value = record.data[me.displayField];
                if (!Ext.isEmpty(record)) {
                    me.setValue(value);
                    me.defautvalue = record.data[me.valueField];
                }
            }
        }
        if (Ext.isEmpty(value)) {
            me.setRawValue("");
        } else {
            me.treepanel.getSelectionModel().select(record);
        }
        me.rendererRegExp = null;
    },
    
    listeners: {
        change: function (me, newvalue, oldvalue, eOpts) {
            if (me.store != null) {
                var store = me.store;
                if (Ext.isEmpty(newvalue)) {
                    me.treepanel.getSelectionModel().deselectAll();
                }
                regExp = new RegExp('.*' + newvalue + '.*');
                me.rendererRegExp = new RegExp('(' + newvalue + ')');
                collection = new Ext.util.MixedCollection();
                store.clearFilter();

                //正则过滤数据
                store.filterBy(function (record, id) {
                    if (record.childNodes.length > 0) {
                        collection.add(record.data.sysOrgId, regExp.test(record.data[me.displayField]));
                        return true;
                    } else {
                        var sysOrgId = record.parentNode.data.sysOrgId;
                        if (collection.containsKey(sysOrgId) && collection.get(sysOrgId)) {
                            return true;
                        } else {
                            collection.add(record.data.sysOrgId, regExp.test(record.data[me.displayField]));
                            return regExp.test(record.data[me.displayField]);
                        }
                    }
                })

                //如果没有一项符合搜索要求的 全部返回false
                if (collection.items.indexOf(true) === -1) {
                    me.store.filterBy(function (record, id) {
                        return false;
                    })
                };
            }
        },

        render: function () {
            var me = this;
            me.inputEl.dom.onclick = function () {
                if (!me.isExpanded) {
                    me.expand();
                    me.focus();
                }
            }
        },

        expand: function () {
            var me = this, store = me.store;
            if (store != null) {
                store.clearFilter();
            }
        },

        collapse: function () {
            var me = this, item;
            if (!me.isExpanded) {
                me.store.findBy(function (record, id) {
                    if (record.data[me.displayField] == me.getValue() && item == undefined) {
                        item = record;
                    }
                })
                if (item != undefined) {
                    me.setDefautvalue(item.data[me.valueField]);
                    me.treepanel.getSelectionModel().select(item);
                } else {
                    me.setDefautvalue("");
                    me.setValue("");
                    me.treepanel.getSelectionModel().deselectAll();
                }
                me.notifyValue();
            }
        }
    }
})