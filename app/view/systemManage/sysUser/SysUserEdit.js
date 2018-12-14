Ext.define("App.view.systemmanage.sysuser.SysUserEdit", {
    alias: "widget.sysuseredit",
    extend: "Ext.window.Window",
    maximizable :true,
    width: 450,
    height: 550,
    layout: "form",
    defaultType: 'textfield',
    textTpl: '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
    items: [
        {
            xtype: "comboxtree",
            fieldLabel: '所属机构',
            name: "orgId",
            displayField: "orgName",
            width:"100%",
            height:200,
            rootVisible:false,
            bind:{
                store:"{treestore}"
            },
            allowBlank: false,
            afterLabelTextTpl: ['<span style="color:red;font-weight:bold" data-qtip="Required">*</span>']
        },
        {
            xtype: "textfield",
            bind: "{user.userName}",
            fieldLabel: '用户名'
        },
        {
            xtype: "textfield",
            fieldLabel: '登录名',
            allowBlank: false,
            bind: "{user.loginName}",
            afterLabelTextTpl: ['<span style="color:red;font-weight:bold" data-qtip="Required">*</span>']
        },
        {
            inputType: 'password',
            fieldLabel: '密码',
            bind: "{user.loginPassWord}",
            allowBlank: false,
            afterLabelTextTpl: ['<span style="color:red;font-weight:bold" data-qtip="Required">*</span>']
        },
        {
            fieldLabel: '手机号',
            bind: "{user.mobile}"
        },
        {
            fieldLabel: '邮箱',
            vtype: 'email',
            bind: "{user.email}"
        },
        {
            xtype: 'radiogroup',
            fieldLabel: '是否启用',
            bind: "{user.isEnable}",
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: "center"
            },
            items: [
                { xtype: 'radiofield', boxLabel: '启用', name: 'isEnable', inputValue: 1, margin: "0 0 0 70", checked: true },
                { xtype: 'radiofield', boxLabel: '禁用', name: 'isEnable', inputValue: 0, margin: "0 0 0 30" }
            ]
        },
        {
            fieldLabel: '描述',
            bind: "{user.Description}",
            xtype: 'textareafield'
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