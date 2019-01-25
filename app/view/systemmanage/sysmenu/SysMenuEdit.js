Ext.define("App.view.systemmanage.sysmenu.SysMenuEdit", {
    alias: "widget.sysmenuedit",
    extend: "Ext.window.Window",
    maximizable: true,
    autoShow: true,
    modal: true,
    width: 450,
    height: 550,
    layout: {
        type: 'vbox',
        align: "stretch",
    },
    items: [
        {
            xtype: "form",
            reference: "form",
            trackResetOnLoad: true,
            layout: "form",
            items: [
                {
                    xtype: "textfield",
                    fieldLabel: '父级',
                    editable: false,
                    reference: "parentName",
                    bind: "{model.ParentName}"
                },
                {
                    xtype: "combobox",
                    reference: "comboType",
                    fieldLabel: "类型",
                    displayField: 'name',
                    valueField: 'id',
                    editable: false,
                    bind: {
                        value: "{typeValue}",
                        store: "{typeStore}"
                    },
                    listeners: {
                        change: "onComboTypeChange"
                    }
                },
                {
                    xtype: "combobox",
                    fieldLabel: "视图类型",
                    reference: "PageType",
                    displayField: 'name',
                    valueField: 'id',
                    editable: false,
                    value: "tab",
                    bind: {
                        store: "{pageTypeStore}",
                        value: "{model.PageType}"
                    }
                },
                {
                    xtype: "textfield",
                    fieldLabel: '页面类型',
                    allowBlank: false,
                    reference: "ViewType",
                    afterLabelTextTpl: config.AfterLabelTextRequired,
                    bind: "{model.ViewType}"
                },
                {
                    xtype: "textfield",
                    fieldLabel: '按钮编码',
                    reference: "Code",
                    bind: "{model.Code}",
                    allowBlank: false,
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: "textfield",
                    reference: "IconCls",
                    fieldLabel: "图标",
                    bind: "{model.IconCls}"
                },
                {
                    xtype: "textfield",
                    reference: "Name",
                    bind: {
                        value: "{model.Name}",
                        fieldLabel: '{fieldlabelName}'
                    },
                    allowBlank: false,
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: "numberfield",
                    fieldLabel: '排序',
                    allowBlank: false,
                    reference: "Order",
                    bind: "{model.Order}",
                    afterLabelTextTpl: config.AfterLabelTextRequired
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: '是否启用',
                    bind: "{model.IsEnable}",
                    simpleValue: true,
                    items: [
                        { boxLabel: '启用', name: 'IsEnable', inputValue: 1, margin: "0 0 0 70", checked: true },
                        { boxLabel: '禁用', name: 'IsEnable', inputValue: 0, margin: "0 0 0 30" }
                    ]
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: '描述',
                    bind: "{model.Description}"
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
    listeners: {
        render: "onRender"
    },
    controller: {
        //保存
        onSave: function () {
            var me = this,
                view = me.getView(),
                refs = me.getReferences(),
                vm = me.getViewModel(),
                selection = vm.get("model"),
                url,
                selNode = vm.get("selNode"),
                newNode,
                model;
            if (refs.comboType.getValue() == 0) {
                model = Ext.create("App.model.systemmanage.SysMenu");
                model.set("SysMenuId", selection.get("Id"));
                model.set("ParentId", selection.get("ParentId"));
                model.set("MenuName", selection.get("Name"));
                model.set("IconCls", selection.get("IconCls"));
                model.set("Order", selection.get("Order"));
                model.set("ViewType", selection.get("ViewType"));
                model.set("PageType", selection.get("PageType"));
                model.set("IsEnable", selection.get("IsEnable"));
                model.set("Description", selection.get("Description"));
                url = view.status == "add" ? "~/api/SystemManage/SysMenu/AddSysMenu" : "~/api/SystemManage/SysMenu/EditSysMenu";
            } else {
                model = Ext.create("App.model.systemmanage.SysMenu");
                model.set("SysMenuButtonId", selection.get("Id"));
                model.set("MenuId", selection.get("ParentId"));
                model.set("btnCode", selection.get("Code"));
                model.set("btnName", selection.get("Name"));
                model.set("Order", selection.get("Order"));
                model.set("IsEnable", selection.get("IsEnable"));
                model.set("Description", selection.get("Description"));
                url = view.status == "add" ? "~/api/SystemManage/SysMenuButton/AddSysMenuButton" : url = "~/api/SystemManage/SysMenuButton/EditSysMenuButton";
            }
            if (refs.comboType.getValue() == 0 && refs.Name.validate() && refs.Order.validate() && refs.ViewType.validate() && refs.PageType.validate() ||
                refs.comboType.getValue() == 1 && refs.Name.validate() && refs.Code.validate() && refs.Order.validate()) {
                App.Ajax.request({
                    url: url,
                    method: "POST",
                    nosim: false,
                    type: "JSON",
                    showmask: true,
                    maskmsg: "正在保存...",
                    params: model.data,
                    success: function (data) {
                        if (view.status == "add") {
                            newNode = Ext.create("App.model.systemmanage.SysMenuButtonDetail", Ext.decode(data.Data));
                            App.TreeNode.appendNode(selNode,newNode);
                        } else {
                            App.TreeNode.updateNode(selNode, Ext.decode(data.Data));
                        }
                        App.Msg.Info("保存成功");
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
            var me = this; me.getViewModel().get("model").reject();
        },

        //切换表单
        onComboTypeChange: function () {
            var me = this, refs = me.getReferences(), vm = me.getViewModel();
            if (refs.comboType.getValue() == 0) {
                refs.Code.hide();
                refs.ViewType.show();
                refs.PageType.show();
                refs.IconCls.show();
                vm.set("fieldlabelName", "菜单名称");
            } else {
                refs.Code.show();
                refs.ViewType.hide();
                refs.PageType.hide();
                refs.IconCls.hide();
                vm.set("fieldlabelName", "按钮名称");
            }
        },

        //呈现组件后触发
        onRender: function () {
            var me = this, refs = me.getReferences();
            if (me.getView().status == "edit") {
                refs.comboType.setDisabled(true);
                refs.parentName.hide();
            }
        }
    }
})