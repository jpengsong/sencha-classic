Ext.define("App.view.authentication.UpdatePassword", {
    alias: "widget.updatepassword",
    extend: "Ext.window.Window",
    title: "修改密码",
    width: 500,
    height: 330,
    modal: true,
    autoShow: true,
    minLength: 6,
    maxLength: 15,
    layout: {
        type: "vbox",
        align: "center"
    },
    defaults: {
        padding: "10 10",
        width: "90%"
    },
    items: [
        {
            fieldLabel: '输入旧密码',
            labelWidth: 120,
            xtype: "passwordfield",
            allowBlank: false,
            afterLabelTextTpl: config.AfterLabelTextRequired,
            reference: "oldPassword"
        },
        {
            fieldLabel: '输入新密码',
            labelWidth: 120,
            xtype: "passwordfield",
            reference: "newPwd",
            allowBlank: false,
            afterLabelTextTpl: config.AfterLabelTextRequired,
            listeners: {
                change: "onChangePwd"
            }
        },
        {
            fieldLabel: '再次输入新密码',
            labelWidth: 120,
            xtype: "passwordfield",
            reference: "newPwd1",
            afterLabelTextTpl: config.AfterLabelTextRequired,
            allowBlank: false,
            validator: function (val) {
                var me = this; newPwdVal = me.up().down("passwordfield[reference='newPwd']").getValue();
                return newPwdVal != val ? "两次密码输入不一致" : true;
            }
        },
        {
            xtype: "container",
            layout: {
                type: "hbox",
                padding: "0px 0px",
            },
            padding: "0px 0px",
            items: [
                {
                    labelWidth: 130,
                    labelSeparator: "",
                    xtype: 'displayfield',
                    fieldLabel: ' '
                },
                {
                    xtype: "image",
                    width: "65%",
                    margin: "-10px ",
                    height: 40,
                    reference: "image",
                    src: "resources/images/updatepassword/q0.jpg"
                }
            ]
        }
    ],
    controller: {

        //保存
        onSave: function () {
            var me = this; refs = me.getReferences();
        },

        //关闭
        onClose: function () {
            var me = this; me.getView().close();
        },

        //更改密码
        onChangePwd: function () {
            var me = this; refs = me.getReferences();
            var strength = 0;
            value = refs.newPwd.getValue();
            if (Ext.isEmpty(value)) {
                strength = 0;
            } else {
                if (value.length > 5 && value.match(/[\da-zA-Z]+/)) {
                    if (value.match(/\d+/)) {
                        strength++;
                    }
                    if (value.match(/[a-z]+/)) {
                        strength++;
                    }
                    if (value.match(/[A-Z]+/)) {
                        strength++;
                    }
                    if (value.match(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/)) {
                        strength++;
                    }
                }
            }
            refs.image.setSrc("resources/images/updatepassword/q" + strength + ".jpg");
        }
    },
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
                    iconCls: "x-fa fa-refresh",
                    handler: "onClose"
                }
            ]
        }
    ]
})