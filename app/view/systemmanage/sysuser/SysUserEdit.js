Ext.define("App.view.systemmanage.sysuser.SysUserEdit", {
    alias: "widget.sysuseredit",
    extend: "Ext.window.Window",
    maximizable: true,
    modal: true,
    width: 450,
    height: 550,
    autoShow:true,
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
                    displayField: "OrgName",
                    valueField: "SysOrgId",
                    width: "100%",
                    height: 200,
                    rootVisible: false,
                    params: function () {
                        return { SysOrgId: "" };
                    },
                    bind: {
                        defautvalue: "{user.OrgId}",
                        store: "{treestore}"
                    },
                    allowBlank: false,
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '登录名',
                    allowBlank: false,
                    bind: "{user.LoginName}",
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    bind: "{user.UserName}",
                    allowBlank: false,
                    maxLength: 10,
                    fieldLabel: '用户名',
                },
                {
                    xtype: "textfield",
                    inputType: 'password',
                    fieldLabel: '密码',
                    bind: "{user.LoginPassWord}",
                    allowBlank: false,
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '手机号',
                    bind: "{user.Mobile}"
                },
                {
                    xtype: "textfield",
                    fieldLabel: '邮箱',
                    vtype: 'email',
                    bind: "{user.Email}"
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '是否启用',
                    bind: "{user.IsEnable}",
                    simpleValue: true,
                    items: [
                        { boxLabel: '启用', name: 'IsEnable', inputValue: 1, margin: "0 0 0 70" },
                        { boxLabel: '禁用', name: 'IsEnable', inputValue: 0, margin: "0 0 0 30", checked: true }
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
                scope =view.scope,
                data = me.getViewModel().get("user").getData(),
                refs = me.getReferences(),
                form = refs.form;
            if (form.isValid()) {
                App.Ajax.request({
                    url: "~/api/SystemManage/SysUser/" + (view.status == "add" ? "AddSysUser" : "EditSysUser"),
                    method: "POST",
                    nosim: false,
                    type: "JSON",
                    showmask: true,
                    maskmsg: "正在保存...",
                    params: data,
                    success: function (data) {
                        App.Msg.Info("保存成功");
                        scope.grid.getStore().loadPage(1);
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
            var me = this; me.getViewModel().get("user").reject();
        }
    }
})