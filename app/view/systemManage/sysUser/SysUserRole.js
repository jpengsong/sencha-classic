Ext.define("App.view.systemmanage.sysuser.SysUserRole", {
    alias: "widget.sysuserrole",
    extend: "Ext.window.Window",
    maximizable: true,
    title: "分配角色",
    modal: true,
    width: 450,
    height: 400,
    layout: "fit",
    items: [
        {
            xtype: 'itemselector',
            reference: "itemselector",
            valueField: 'sysRoleId',
            displayField: 'RoleName',
            buttons: ['add', 'remove'],
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
                    text: '重置',
                    iconCls: "x-fa fa-refresh",
                    handler: "onReset"
                }
            ]
        }
    ],
    initComponent: function () {
        var me = this, viewModel = me.getViewModel();
        me.items[0].store = viewModel.get("roleStore");
        App.Ajax.request({
            url: "~/api/systemmanage/sysuserrole/GetSysUserRoleByRule",
            method: "GET",
            async: true,
            nosim: false,
            type: "JSON",
            params: { UserId: viewModel.get("UserId") },
            success: function (data) {
                var value = [];
                for (var i = 0; i < data.Data.List.length; i++) {
                    value.push(data.Data.List[i]["RoleId"]);
                }
                Ext.ComponentQuery.query("component[xtype='itemselector']", me)[0].setValue(value);
            }
        })
        me.callParent();
    },
    controller: {
        //保存
        onSave: function () {
            var me = this,
                view = me.getView();
                App.Ajax.request({
                    url: "~/api/systemmanage/sysuserrole/AddSysUserRole",
                    method: "POST",
                    nosim: false,
                    type: "JSON",
                    showmask: true,
                    maskmsg: "正在保存...",
                    params: {
                        UserId:me.getViewModel().get("UserId"),
                        RoleId:me.getReferences().itemselector.getValue().join(",")
                    },
                    success: function (data) {
                        App.Msg.Info("保存成功");
                        view.close();
                    },
                    error: function (data) {
                        App.Msg.Error("保存异常");
                    }
                })
        },

        //重置
        onReset: function () {
            var me = this, refs = me.getReferences(), form = refs.form;
            form.reset();
        }
    }
})