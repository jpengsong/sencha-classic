Ext.define("App.view.systemManage.sysUser.SysUser", {
    xtype: "sysuser",
    viewModel: "sysuser",
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
            grid: "Grid",
            scope: me,
            queryConfig: {
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
                        name: 'userName',
                        method: config.QueryMethod.Like,
                        type: "String",
                        fieldLabel: '用户名'
                    }
                ]
            }
        });
        me.addQuery("queryw", querypanel);
    },

    initGridPanel: function () {
        var me, gridpanel; me = this;
        gridpanel = Ext.create("App.ux.grid.GridPanel", {
            autoLoad: true,
            bind: {
                store: '{gridstore}'
            },
            columns: {
                items: [
                    { text: '用户名', dataIndex: 'userName', width: 100 },
                    { text: '登录名', dataIndex: 'loginName', width: 10 },
                    { text: '手机号', dataIndex: 'mobile', width: 50 },
                    { text: '邮箱', dataIndex: 'email' }
                ],
                defaults: {
                    flex: 1
                }
            },
            getParams: function () {
                return me.getQuery("queryw").getQueryItems();
            }
        });
        me.addGrid("Grid", gridpanel);
    }
})