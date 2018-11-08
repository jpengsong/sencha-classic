Ext.define("App.view.systemManage.sysUser.SysUser", {
    xtype: "sysuser",
    viewModel: "sysuser",
    requires: [
        'Ext.layout.container.Border'
    ],
    extend: "App.ux.page.Page",
    initComponent: function () {
        var me = this;
        me.initQueryPanel();
        me.initGridPanel();
        me.callParent();
    },

    initQueryPanel: function () {
        var me, querypanel; me = this;
        querypanel = Ext.create("App.ux.query.QueryPanel", {
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
        me.addQuery("query", querypanel);
    },

    initGridPanel: function () {
        var me, gridpanel; me = this;
        gridpanel = Ext.create("App.ux.grid.GridPanel", {
            bind: {
                store: '{store}'
            },
            autoLoad:true,
            columns: {
                items: [
                    { text: '用户名', dataIndex: 'userName',with:100 },
                    { text: '登录名', dataIndex: 'loginName' ,with:10},
                    { text: '手机号', dataIndex: 'mobile' ,with:50},
                    { text: '邮箱', dataIndex: 'email' }
                ],
                defaults: {
                    flex: 1
                }
            }
        })
        me.addGrid("grid", gridpanel);
    }
})