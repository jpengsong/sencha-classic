Ext.define("App.view.systemmanage.sysuser.SysUserEdit", {
    alias: "widget.sysuseredit",
    extend: "Ext.window.Window",
    width: 600,
    height: 400,
    layout: "form",
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: '所属机构',
            name: 'orgId'
        },
        {
            fieldLabel: '用户名',
            name: 'userName'
        },
        {
            fieldLabel: '登录名',
            name: 'loginName'
        },
        {
            fieldLabel: '密码',
            name: 'loginPassWord'
        },
        {
            fieldLabel: '手机号',
            name: 'mobile'
        },
        {
            fieldLabel: '邮箱',
            name: 'email'
        },
        {
            fieldLabel: '是否启用',
            name: 'email'
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui:"footer",
            layout: {
                type: "hbox",
                align: "center",
                pack:"center"
            },
            items: [
                {
                    text: '保存',
                    iconCls: "x-fa fa-floppy-o",
                    handler: function () {

                    }
                },
                {
                    text: '重置',
                    iconCls: "x-fa fa-refresh",
                    handler: function () {

                    }
                }
            ]
        }
    ]
})