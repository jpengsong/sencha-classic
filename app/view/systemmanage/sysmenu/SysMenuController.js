Ext.define("App.view.systemmanage.sysmenu.SysMenuController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysmenu',

    //新增
    onAdd: function () {
        var me = this, window, view = me.getView(), refs = me.getReferences(), model = model = Ext.create("App.model.systemmanage.SysMenuButtonDetail"), selRecords = refs.treepanel.getSelectionModel().getSelection();
        if (selRecords.length == 1) {
            model.set("ParentId", selRecords[0].get("Id"));
            model.set("ParentName", selRecords[0].get("Name"));
            window = Ext.widget({
                title: "新增菜单",
                xtype: "sysmenuedit",
                status: "add",
                scope: view,
                viewModel: {
                    data: {
                        fieldlabelName: "菜单名称",
                        model: model,
                        selNode: selRecords[0],
                        typeValue: 0,
                        typeStore: Ext.create("Ext.data.Store", {
                            fields: ['id', 'name'],
                            data: [
                                { "id": "0", "name": "菜单" },
                                { "id": "1", "name": "功能" }
                            ]
                        })
                    }
                }
            });
            window.show();
        } else {
            App.Msg.Warning("请选择数据");
        }
    },

    //编辑
    onEdit: function () {
        var me = this, window, view = me.getView(), refs = me.getReferences(), selRecords = refs.treepanel.getSelectionModel().getSelection();
        if (selRecords.length == 1) {
            window = Ext.widget({
                title: "编辑菜单",
                xtype: "sysmenuedit",
                status: "edit",
                scope: view,
                viewModel: {
                    data: {
                        fieldlabelName: "菜单名称",
                        model: Ext.create("App.model.systemmanage.SysMenuButtonDetail", selRecords[0].data),
                        selNode: selRecords[0],
                        typeValue: selRecords[0].get("Type"),
                        typeStore: Ext.create("Ext.data.Store", {
                            fields: ['id', 'name'],
                            data: [
                                { "id": "0", "name": "菜单" },
                                { "id": "1", "name": "功能" }
                            ]
                        })
                    }
                }
            });
            window.show();
        } else {
            App.Msg.Warning("请选择数据");
        }
    },

    //删除
    onDel: function () {
        var me = this, refs = me.getReferences(), tree = refs.treepanel, selRecords, idArray = [], url;
        if (App.Page.selectionModel(tree, true)) {
            selRecords = tree.getSelectionModel().getSelection();
            idArray.push(selRecords[0].get("Id"));
            url = selRecords[0].get("Type") == "0" ? "~/api/SystemManage/SysMenu/DeleteSysMenu" : "~/api/SystemManage/SysMenuButton/DeleteSysMenuButton";
            Ext.Msg.confirm("提示", "确认删除选中的" + idArray.length + "项数据项吗？",
                function (btn) {
                    if (btn == "yes") {
                        App.Ajax.request({
                            url: url,
                            method: "POST",
                            nosim: false,
                            type: "JSON",
                            showmask: true,
                            maskmsg: "正在删除...",
                            params: idArray,
                            success: function (data) {
                                App.Msg.Info("删除成功");
                                selRecords[0].remove();
                            },
                            error: function (data) {
                                App.Msg.Error("删除失败");
                            }
                        })
                    }
                })
        }
    },

    //点击一行
    onRowclick: function (me, record, element, rowIndex, e, eOpts) {
        var me = this, refs = me.getReferences();
        if (record.get("Type") == 0) {
            refs.addbtn.enable();
        } else {
            refs.addbtn.disable();
        }
    }
})