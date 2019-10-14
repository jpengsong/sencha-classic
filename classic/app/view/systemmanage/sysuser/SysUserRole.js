Ext.define("App.view.systemmanage.sysuser.SysUserRole", {
    alias: "widget.sysuserrole",
    extend: "Ext.window.Window",
    maximizable: true,
    autoShow: true,
    title: "分配角色",
    modal: true,
    width: 450,
    height: 400,
    layout: "fit",
    items: [
        {
            xtype: 'itemselector',
            reference: "itemselector",
            valueField: 'SysRoleId',
            displayField: 'RoleName',
            buttons: ['add', 'remove'],
            bind: {
                value: "{value}"
            },
            buttonsText: {
                add: "添加",
                remove: "移除"
            }
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui: "footer",
            layout: {
                type: "hbox",
                align: "center",
                pack: "center"
            },
            items: [
                {
                    text: '保存',
                    iconCls: "x-fa fa-floppy-o",
                    handler: "onSave"
                },
                {
                    text: '关闭',
                    iconCls: "x-fa fa-close",
                    handler: "onClose"
                }
            ]
        }
    ],
    initComponent: function () {
        var me = this, viewModel = me.getViewModel();store =viewModel.get("rolestore");
        App.Page.setExtraParamData(store,null);
        store.setAutoLoad(true);
        me.items[0].store = store;
        me.callParent();
    },
    controller: {
        //保存
        onSave: function () {
            var me = this,
                view = me.getView();
            App.Ajax.request({
                url: "/api/SystemManage/SysUserRole/AddSysUserRole",
                method: "POST",
                nosim: true,
                type: "JSON",
                showmask: true,
                maskmsg: "正在保存...",
                params: {
                    UserId: me.getViewModel().get("UserId"),
                    RoleId: me.getReferences().itemselector.getValue().join(",")
                },
                success: function (data) {
                    if (data.Data == "1") {
                        App.Msg.Info("保存成功");
                        view.close();
                    } else {
                        App.Msg.Info("保存失败");
                    }

                },
                error: function (data) {
                    App.Msg.Error("保存异常");
                }
            })
        },

        //关闭
        onClose: function () {
            this.getView().close();
        }
    }
})