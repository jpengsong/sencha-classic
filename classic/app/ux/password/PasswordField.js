Ext.define("App.ux.password.PasswordField", {
    alias: "widget.passwordfield",
    extend: "Ext.form.field.Text",
    pwdstatus: true,
    inputType: "password",
    triggers: {
        eye: {
            cls: 'x-fa fa-eye lock-icon',
            hidden: true,
            handler: function () {
                var me = this;
                me.pwdstatus = false;
                me.passWordShow();
            }
        },
        eyeslash: {
            cls: 'x-fa fa-eye-slash lock-icon',
            handler: function () {
                var me = this;
                me.pwdstatus = true;
                me.passWordShow();
            }
        }
    },

    passWordShow: function () {
        var me = this;
        if (me.pwdstatus) {
            me.inputEl.dom.type = "text";
            me.getTriggers()["eye"].show();
            me.getTriggers()["eyeslash"].hide();
        } else {
            me.inputEl.dom.type = "password";
            me.getTriggers()["eye"].hide();
            me.getTriggers()["eyeslash"].show();
        }
    },

    listeners: {
        render: function () {
            var me = this;
            me.inputEl.dom.autocomplete = "new-password";
        }
    }
})