Ext.define("App.view.systemmanage.sysorg.SysOrgEdit", {
    alias: "widget.sysorgedit",
    extend: "Ext.window.Window",
    maximizable: true,
    modal: true,
    width: 450,
    height: 400,
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
                    editable: false,
                    hideTrigger: true,
                    displayField: "OrgName",
                    valueField: "SysOrgId",
                    width: "100%",
                    height: 200,
                    rootVisible: false,
                    params: function () {
                        return { SysOrgId: "" };
                    },
                    bind: {
                        defautvalue: "{org.ParentOrgId}",
                        store: "{treestore}"
                    },
                    allowBlank: false,
                    afterLabelTextTpl: config.textTpl.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '级别',
                    editable: false,
                    allowBlank: false,
                    bind: "{org.Level}",
                    afterLabelTextTpl: config.textTpl.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '机构名称',
                    allowBlank: false,
                    bind: "{org.OrgName}",
                    afterLabelTextTpl: config.textTpl.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '机构代码',
                    allowBlank: false,
                    bind: "{org.OrgCode}",
                    afterLabelTextTpl: config.textTpl.AfterLabelTextRequired
                },
                {
                    xtype: "numberfield",
                    fieldLabel: '排序',
                    allowBlank: false,
                    bind: "{org.Sort}",
                    afterLabelTextTpl: config.textTpl.AfterLabelTextRequired
                },
                {
                    fieldLabel: '描述',
                    bind: "{org.Description}",
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
                scope = view.scope,
                gridstore = scope.getGrid("Grid").getStore(),
                viewModel = me.getViewModel(),
                record = viewModel.get("org"),
                refs = me.getReferences(),
                form = refs.form;
            treepanel = scope.getTree("treePanel");
            if (form.isValid()) {
                App.Ajax.request({
                    url: "~/api/SystemManage/SysOrg/" + (view.status == "add" ? "AddSysOrg" : "EditSysOrg"),
                    method: "POST",
                    nosim: false,
                    type: "JSON",
                    showmask: true,
                    maskmsg: "正在保存...",
                    params: record,
                    success: function (data) {
                        App.Msg.Info("保存成功");
                        gridstore.loadPage(1);
                        App.TreeNode.updateChildNodes(viewModel.get("selTreeRecord"));
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