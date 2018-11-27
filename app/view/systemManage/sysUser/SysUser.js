Ext.define("App.view.systemManage.sysUser.SysUser", {
    requires: [
        'Ext.layout.container.Border'
    ],
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
        me.addQuery("query", querypanel);
    },

    initGridPanel: function () {
        var me, gridpanel; me = this;
        gridpanel = Ext.create("App.ux.grid.GridPanel", {
            autoLoad: true,
            bind: {
                store: '{store}'
            },
            columns: {
                items: [
                    { text: '主键', dataIndex: 'sysUserId', sortable: true, width: 100 },
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
                return me.getQuery("query").getQueryItems();
            }
        });
        me.addGrid("Grid", gridpanel);
    }
})