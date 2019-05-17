Ext.define("App.view.systemmanage.sysuser.SysUserController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysuser',

    //新增
    onAdd: function () {
        var me = this, record = Ext.create("App.model.systemmanage.SysUser");
        console.info(record);
        Ext.widget({
            title: "新增用户",
            xtype: "sysuseredit",
            status: "add",
            scope: me.getReferences(),
            viewModel: {
                data: {
                    user: record
                },
                stores: {
                    treestore: {
                        type: "systemmanage.sysuser.orgtreestore",
                    }
                }
            }
        })
    },

    //编辑
    onEdit: function () {
        var me = this, refs = me.getReferences(), record;
        if (App.Page.selectionModel(refs.grid, false)) {
            record = refs.grid.getSelectionModel().getSelection()[0].clone();
            Ext.widget({
                title: "编辑用户",
                xtype: "sysuseredit",
                status: "edit",
                scope: me.getReferences(),
                viewModel: {
                    data: {
                        user: record
                    },
                    stores: {
                        treestore: {
                            type: "systemmanage.sysorg.treestore",
                        }
                    }
                }
            })
        }
    },

    //删除
    onDelete: function () {
        var me = this, refs = me.getReferences(), grid = refs.grid, records, idArray = [];;
        if (App.Page.selectionModel(grid, true)) {
            records = grid.getSelectionModel().getSelection();
            Ext.each(records, function (record, index) {
                idArray.push(record.id);
            })
            Ext.Msg.confirm("提示", "确认删除选中的" + idArray.length + "行数据项吗？",
                function (btn) {
                    if (btn == "yes") {
                        App.Ajax.request({
                            url: "/api/SystemManage/SysUser/DeleteSysUser",
                            method: "DELETE",
                            nosim: false,
                            type: "JSON",
                            showmask: true,
                            maskmsg: "正在删除...",
                            params: idArray.join(","),
                            success: function (data) {
                                if (data.Data=="1") {
                                    App.Msg.Info("删除成功");
                                    grid.getStore().loadPage(1);
                                } else {
                                    App.Msg.Error("删除失败");
                                }
                            },
                            error: function (data) {
                                App.Msg.Error("删除异常");
                            }
                        })
                    }
                })
        }
    },

    //分配角色
    onUserRole: function () {
        var me = this,refs = me.getReferences(), grid =refs.grid, sysUserId;
        if (App.Page.selectionModel(grid, false)) {
            sysUserId = grid.getSelection()[0].get("SysUserId");
            Ext.widget("sysuserrole", {
                viewModel: {
                    data: {
                        UserId: sysUserId
                    },
                    stores: {
                        roleStore: {
                            type: "systemmanage.sysuser.comboxrolestore"
                        }
                    },
                    formulas: {
                        value: {
                            get: function () {
                                var value = [], vm = this;
                                App.Ajax.request({
                                    url: "/api/SystemManage/SysUser/GetSysUserRoleByRule",
                                    method: "GET",
                                    nosim: false,
                                    type: "JSON",
                                    params: { UserId: sysUserId },
                                    success: function (data) {
                                        for (var i = 0; i < data.Data.length; i++) {
                                            value.push(data.Data[i]["RoleId"]);
                                        }
                                        vm.set("value", value);
                                    }
                                })
                            }
                        }
                    }
                }
            })
        }
    },

    //导入
    onImport: function () {
        Ext.create({
            xtype: "window",
            height: 200,
            width: 400,
            layout: 'fit',
            items: [
                { xtype: "fileupload" }
            ]
        })
    }
})