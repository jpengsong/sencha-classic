Ext.define("App.view.systemmanage.sysuser.SysUserEdit", {
    alias: "widget.sysuseredit",
    extend: "Ext.window.Window",
    maximizable: true,
    modal: true,
    width: 450,
    height: 550,
    layout: "fit",
    items: [
        {
            xtype: "form",
            reference: "form",
            layout: "form",
            items: [
                {
                    xtype: "comboxtree",
                    fieldLabel: '所属机构',
                    name: "orgId",
                    reference: "orgId",
                    displayField: "orgName",
                    valueField: "sysOrgId",
                    width: "100%",
                    height: 200,
                    rootVisible: false,
                    params: function () {
                        return { sysOrgId: "" };
                    },
                    bind: {
                        defautvalue: "{user.orgId}",
                        store: "{treestore}"
                    },
                    allowBlank: false,
                    afterLabelTextTpl: config.textTpl.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '登录名',
                    allowBlank: false,
                    bind: "{user.loginName}",
                    afterLabelTextTpl: config.textTpl.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    bind: "{user.userName}",
                    allowBlank: false,
                    reference: "userName",
                    maxLength: 10,
                    fieldLabel: '用户名',
                },
                {
                    xtype: "textfield",
                    inputType: 'password',
                    fieldLabel: '密码',
                    bind: "{user.loginPassWord}",
                    allowBlank: false,
                    afterLabelTextTpl: config.textTpl.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '手机号',
                    bind: "{user.mobile}"
                },
                {
                    xtype: "textfield",
                    fieldLabel: '邮箱',
                    vtype: 'email',
                    bind: "{user.email}"
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '是否启用',
                    bind: "{user.isEnable}",
                    simpleValue: true,
                    items: [
                        { boxLabel: '启用', name: 'isEnable', inputValue: 1, margin: "0 0 0 70" },
                        { boxLabel: '禁用', name: 'isEnable', inputValue: 0, margin: "0 0 0 30", checked: true }
                    ]
                },
                {
                    fieldLabel: '描述',
                    bind: "{user.Description}",
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
                record = me.getViewModel().get("user"),
                refs = me.getReferences(),
                form = refs.form;
            if (form.isValid()) {
                App.Ajax.request({
                    url: "~/api/systemmanage/sysuser/" + (view.status == "add" ? "AddSysUser" : "EditSysUser"),
                    method: "POST",
                    nosim: false,
                    type: "JSON",
                    showmask: true,
                    maskmsg: "正在保存...",
                    params: record,
                    success: function (data) {
                        App.Msg.Info("保存成功");
                        var gridstore = view.scope.getGrid("Grid").getStore();
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