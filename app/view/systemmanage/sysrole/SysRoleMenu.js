Ext.define("App.view.systemmanage.sysrole.SysRoleMenu", {
    alias: "widget.sysrolemenu",
    extend: "Ext.window.Window",
    maximizable: true,
    modal: true,
    width: 650,
    height: '90%',
    layout: {
        type: "hbox",
        align: "stretch"
    },
    defaults: {
        margin: "5 5"
    },
    items: [
        {
            xtype: 'fieldset',
            title: '所有权限',
            collapsible: true,
            padding: "0 0 0 0",
            layout: "fit",
            flex: 1,
            items: [
                {
                    xtype: "treepanel",
                    rootVisible: false,
                    reference: "tree",
                    flex: 1,
                    displayField: "Name",
                    valueField: "Id",
                    bind: {
                        store: '{menutreestore}'
                    },
                    plugins: {
                        requestdata: {
                            autoLoad: true,
                            root: {
                                expanded: true
                            }
                        }
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: '已有权限',
            collapsible: true,
            padding: "0 0 0 0",
            layout: "fit",
            flex: 1,
            items: [
                {
                    xtype: "treepanel",
                    rootVisible: false,
                    flex: 1,
                    displayField: "Name",
                    valueField: "Id",
                    bind: {
                        store: '{menuroletreestore}'
                    }
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
                    text: '关闭',
                    iconCls: "x-fa fa-close",
                    handler: "onClose"
                }
            ]
        }
    ],
    controller: {

        //保存
        onSave: function () {
            var me = this,
                view = me.getView(),
                refs = me.getReferences(),
                vm = me.getViewModel(),
                records = refs.tree.getChecked(),
                roleId =vm.get("role").get("SysRoleId"),
                data = [];
            for (var i = 0; i < records.length; i++) {
                data.push(
                    {
                        SysMenRoleId:Ext.data.identifier.Uuid.create().generate(),
                        MenuId:records[i].get("Id"),
                        RoleId:roleId,
                        Type:records[i].get("Type")
                    }
                ) 
            }
            App.Ajax.request({
                url: "~/api/SystemManage/SysMenuRole/AddSysMenuRole",
                method: "POST",
                nosim: false,
                type: "JSON",
                showmask: true,
                maskmsg: "正在保存...",
                params: {
                    RoleId:roleId,
                    List: data  
                },
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
        },

        //关闭
        onClose: function () {
            var me = this; me.getView().close();
        },

        onRender: function () {
            var me = this, vm = me.getViewModel(), store = vm.get("menuroletreestore"), allstore = vm.get("menutreestore");
            App.Page.setExtraParamData(store, { SysRoleId: vm.get("role").get("SysRoleId") });
            store.setAutoLoad(true);
            store.on({
                single: true,
                load: function (store, records, successful) {
                    if (successful) {
                        me.storeSuccessful = true;
                        me.checkedStatus(store, allstore);
                    }
                }
            })

            allstore.on({
                single: true,
                load: function (allstore, records, successful) {
                    if (successful) {
                        me.allstoreSuccessful = true;
                        me.checkedStatus(store, allstore);
                    }
                }
            })
        },

        checkedStatus: function (store, allstore) {
            var me = this;
            if (me.storeSuccessful && me.allstoreSuccessful) {
                Ext.Object.eachValue(store.byIdMap, function (node) {
                    if (node.get("Id") != "root") {
                        allstore.byIdMap[node.get("Id")].set("checked", true);
                    }
                })
            }
        }
    },
    listeners: {
        render: "onRender"
    }
})