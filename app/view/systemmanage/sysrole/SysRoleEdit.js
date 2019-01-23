Ext.define("App.view.systemmanage.sysrole.SysRoleEdit", {
    alias: "widget.sysroleedit",
    extend: "Ext.window.Window",
    maximizable: true,
    modal: true,
    width: 400,
    height: 300,
    layout: "fit",
    items: [
        {
            xtype: "form",
            reference: "form",
            layout: "form",
            items: [
                {
                    xtype: "textfield",
                    fieldLabel: '角色名',
                    allowBlank: false,
                    bind: "{role.RoleName}",
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    fieldLabel: '描述',
                    bind: "{role.Description}",
                    xtype: 'textareafield'
                }
            ]
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
    controller: {

        //保存
        onSave: function () {
            var me = this,
                view = me.getView(),
                record = me.getViewModel().get("role"),
                refs = me.getReferences(),
                form = refs.form;
            if (form.isValid()) {
                App.Ajax.request({
                    url: "~/api/SystemManage/SysRole/" + (view.status == "add" ? "AddSysRole" : "EditSysRole"),
                    method: "POST",
                    nosim: false,
                    type: "JSON",
                    showmask: true,
                    maskmsg: "正在保存...",
                    params: record.getData(),
                    success: function (data) {
                        App.Msg.Info("保存成功");
                        var gridstore = view.references.grid.getStore();
                        gridstore.loadPage(1);
                        view.close();
                    },
                    error: function (data) {
                        App.Msg.Error("保存异常");
                    }
                })
            }
        },

        //重置
        onReset: function () {
            var me = this, refs = me.getReferences(), form = refs.form;
            form.reset();
        }
    }
})