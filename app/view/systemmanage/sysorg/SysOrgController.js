Ext.define("App.view.systemmanage.sysorg.SysOrgController", {
    extend: 'Ext.app.ViewController',
    alias: "controller.sysorg",

    //左侧组织机构选中某一项
    onTreeSelect: function (store, record, index, eOpts) {
        var me = this, refs = me.getReferences(), vm = me.getViewModel(), querypanel = refs.query, gridStore = vm.getStore("gridstore");
        Ext.override(querypanel, {
            getQueryItems: function () {
                var queryItems = App.Page.getQueryItems(Ext.ComponentQuery.query("container[reference='searchcondition']", querypanel)[0]);
                queryItems.push({ key: "ParentOrgId", Value: record.data.SysOrgId, Method: " = ", Type: "String" });
                return queryItems;
            }
        });
        App.Page.setQueryItems(gridStore, querypanel.getQueryItems());
        gridStore.loadPage(1);
    },

    //组织机构返回结果
    treeNavNodeRenderer: function (value) {
        return this.rendererRegExp ? value.replace(this.rendererRegExp, '<span style="color:red;font-weight:bold">$1</span>') : value;
    },

    //组织机构文本搜索
    onFilterFieldChange: function (field, value) {
        var me = this, store = me.getViewModel().get("treestore"), regExp, collection; me.rendererRegExp = null;
        if (store != null) {
            store.clearFilter();
            if (value) {
                field.getTrigger('clear').show();
                me.rendererRegExp = new RegExp('(' + value + ')');
                regExp = new RegExp('.*' + value + '.*');
                collection = new Ext.util.MixedCollection();
                //正则过滤数据
                store.filterBy(function (record, id) {
                    if (record.childNodes.length > 0) {
                        collection.add(record.data.SysOrgId, regExp.test(record.data.OrgName));
                        return true;
                    } else {
                        var SysOrgId = record.parentNode.data.SysOrgId;
                        if (collection.containsKey(SysOrgId) && collection.get(SysOrgId)) {
                            return true;
                        } else {
                            collection.add(record.data.SysOrgId, regExp.test(record.data.OrgName));
                            return regExp.test(record.data.OrgName);
                        }
                    }
                })

                //如果没有一项符合搜索要求的 全部返回false
                if (collection.items.indexOf(true) === -1) {
                    store.filterBy(function (record, id) {
                        return false;
                    })
                };
            } else {
                field.getTrigger('clear').hide();
            }
        }
    },

    //组织机构清除图标
    onFilterClearTriggerClick: function () {
        this.getReferences().navtreeFilter.setValue();
    },

    //组织机构放大镜图标
    onFilterSearchTriggerClick: function () {
        var field = this.getReferences().navtreeFilter;
        this.onFilterFieldChange(field, field.getValue());
    },

    //添加
    onAdd: function () {
        var me = this, record, refs = me.getReferences();
        if (App.Page.selectionModel(refs.tree, false)) {
            selRecord = refs.tree.getSelectionModel().getSelection()[0];
            record = Ext.create("App.model.systemmanage.SysOrg");
            record.set("ParentOrgId", selRecord.get("SysOrgId"));
            record.set("level", selRecord.get("level") + 1);
            Ext.widget({
                title: "新增机构",
                xtype: "sysorgedit",
                status: "add",
                scope: refs,
                viewModel: {
                    data: {
                        org: record,
                        selRecord: selRecord
                    },
                    stores: {
                        treestore: {
                            type: "systemmanage.sysorg.treestore",
                        }
                    }
                }
            });
        }
    },

    //编辑
    onEdit: function () {
        var me = this, record, refs = me.getReferences();
        if (App.Page.selectionModel(refs.grid, false)) {
            record = refs.grid.getSelectionModel().getSelection()[0];
            selRecord = refs.tree.getSelectionModel().getSelection()[0];
            Ext.widget({
                title: "编辑机构",
                xtype: "sysorgedit",
                status: "edit",
                scope: refs,
                viewModel: {
                    data: {
                        org: record.clone(),
                        selRecord: selRecord
                    },
                    stores: {
                        treestore: {
                            type: "systemmanage.sysorg.treestore",
                        }
                    }
                }
            });
        };
    },

    //删除
    onDelete: function () {
        var me = this, refs = me.getView().scope.getReferences(), records, idArray = [];
        if (App.Page.selectionModel(refs.grid, true)) {
            records = refs.grid.getSelectionModel().getSelection();
            Ext.each(records, function (record, index) {
                idArray.push(record.get("SysOrgId"));
            })
            Ext.Msg.confirm("提示", "确认删除选中的" + idArray.length + "行数据项吗？",
                function (btn) {
                    if (btn == "yes") {
                        App.Ajax.request({
                            url: "~/api/SystemManage/SysOrg/DeleteSysOrg",
                            method: "POST",
                            nosim: false,
                            type: "JSON",
                            showmask: true,
                            maskmsg: "正在删除...",
                            params: idArray,
                            success: function (data) {
                                App.Msg.Info("删除成功");
                                refs.grid.getStore().loadPage(1);
                                App.TreeNode.updateChildNodes(refs.tree.getSelectionModel().getSelection()[0]);
                            },
                            error: function (data) {
                                App.Msg.Error("删除失败");
                            }
                        })
                    }
                })
        }
    }
})