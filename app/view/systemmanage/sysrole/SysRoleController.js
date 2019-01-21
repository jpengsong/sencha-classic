Ext.define("App.view.systemmanage.sysrole.SysRoleController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysrole',

    //新增
    onAdd: function () {
        var me = this, window;
        window = Ext.widget({
            references: me.getReferences(),
            xtype: "sysroleedit",
            status: "add",
            title: '新增角色',
            viewModel: {
                data: {
                    role: Ext.create("App.model.systemmanage.SysRole")
                }
            }
        })
        window.show();
    },

    //编辑
    onEdit: function () {
        var me = this, window, refs = me.getReferences();
        if (App.Page.selectionModel(refs.grid, false)) {
            record = refs.grid.getSelectionModel().getSelection()[0];
            window = Ext.widget({
                references: refs,
                xtype: "sysroleedit",
                status: "edit",
                title: '编辑角色',
                viewModel: {
                    data: {
                        role: Ext.create("App.model.systemmanage.SysRole", record.data)
                    }
                }
            })
        }
        window.show();
    },

    //删除
    onDel: function () {
        var me = this, refs = me.getReferences(), records, idArray = [];
        if (App.Page.selectionModel(refs.grid, true)) {
            records = refs.grid.getSelectionModel().getSelection();
            Ext.each(records, function (record, index) {
                idArray.push(record.id);
            })
            Ext.Msg.confirm("提示", "确认删除选中的" + idArray.length + "行数据项吗？",
                function (btn) {
                    if (btn == "yes") {
                        App.Ajax.request({
                            url: "~/api/SystemManage/SysRole/DeleteSysRole",
                            method: "POST",
                            nosim: false,
                            type: "JSON",
                            showmask: true,
                            maskmsg: "正在删除...",
                            params: idArray,
                            success: function (data) {
                                App.Msg.Info("删除成功");
                                refs.grid.getStore().loadPage(1);
                            },
                            error: function (data) {
                                App.Msg.Error("删除失败");
                            }
                        })
                    }
                })
        }
    },

    //分配权限
    onMenuRole: function () {
        var me = this, refs = me.getReferences(), record, window;
        if (App.Page.selectionModel(refs.grid, false)) {
            record = refs.grid.getSelectionModel().getSelection()[0];
            window = Ext.widget({
                references: me.getReferences(),
                xtype: "sysrolemenu",
                title: '分配权限',
                viewModel: {
                    data: {
                        role: record
                    },
                    stores: {
                        menutreestore: {
                            type: "systemmanage.sysmenu.menutreestore"
                        },
                        menuroletreestore: {
                            type: "systemmanage.sysmenu.menuroletreestore"
                        }
                    }
                }
            })
            window.show();
        }
    }
})