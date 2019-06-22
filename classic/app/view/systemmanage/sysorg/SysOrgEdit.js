Ext.define("App.view.systemmanage.sysorg.SysOrgEdit", {
    alias: "widget.sysorgedit",
    extend: "Ext.window.Window",
    autoShow: true,
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
                        return { SysOrgId: "00000000-0000-0000-0000-000000000000" };
                    },
                    bind: {
                        defautvalue: "{org.ParentOrgId}",
                        store: "{treestore}"
                    },
                    allowBlank: false,
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '级别',
                    editable: false,
                    allowBlank: false,
                    bind: "{org.Level}",
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '机构名称',
                    allowBlank: false,
                    bind: "{org.OrgName}",
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    fieldLabel: '机构代码',
                    allowBlank: false,
                    bind: "{org.OrgCode}",
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: "numberfield",
                    fieldLabel: '排序',
                    allowBlank: false,
                    bind: "{org.Sort}",
                    afterLabelTextTpl: config.AfterLabelTextRequired
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
                vm = me.getViewModel(),
                scope = view.scope,
                form = me.getReferences().form;
            if (form.isValid()) {
                App.Ajax.request({
                    url: "/api/SystemManage/SysOrg/" + (view.status == "add" ? "AddSysOrg" : "EditSysOrg"),
                    method: (view.status == "add" ? "POST" : "PUT"),
                    nosim: false,
                    type: "JSON",
                    showmask: true,
                    maskmsg: "正在保存...",
                    params: vm.get("org").getData(),
                    success: function (data) {
                        if (!Ext.isEmpty(data.Data)) {
                            if (view.status == "add") {
                                App.TreeNode.appendNode(vm.get("selRecord"), Ext.create("App.model.systemmanage.SysOrg", data.Data));
                            } else {
                                App.TreeNode.updateNode(scope.tree.getStore().findNode("SysOrgId", data.Data.SysOrgId), data.Data);
                            }
                            scope.grid.getStore().loadPage(1);
                            App.Msg.Info("保存成功");
                            view.close();
                        } else {
                            App.Msg.Info("保存失败");
                        }
                    },
                    error: function (msg) {
                        App.Msg.Error(msg);
                    }
                })
            }
        },

        //重置
        onReset: function () {
            var me = this; me.getViewModel().get("org").reject();
        }
    }
})