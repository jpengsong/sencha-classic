Ext.define("app.view.systemManage.sysUser.SysUser", {
    requires: [
        'Ext.layout.container.Border'
    ],
    xtype: "sysuser",
    extend: "App.page.Page",
    initComponent: function () {
        var me = this;
        me.initQueryPanel();
        me.callParent();
    },

    initQueryPanel: function () {
        var me, querypanel; me = this;
        querypanel = Ext.create({
            xtype: "querypanel",
            configs: {
                defaults: {
                    margin: "5 5",
                    labelWidth: 70,
                    style: {
                        "text-align": "center"
                    }
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: '用户名'
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        fieldLabel: '所在部门'
                    }
                ]
            }
        });
        me.addQuery("query",querypanel);
    }
})