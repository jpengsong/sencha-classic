Ext.define("App.view.systemManage.sysOrg.SysOrg", {
    xtype: "sysorg",
    viewModel: "sysorg",

    extend: "App.ux.page.Page",
    initComponent: function () {
        var me = this;
        me.initQueryPanel();
        //me.initGridPanel();
        me.initTreePanel();
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
                        value: "123",
                        method: config.QueryMethod.Like,
                        type: "String",
                        fieldLabel: '用户名'
                    }
                ]
            }
        });
        me.addQuery("query", querypanel);
    },

    initTreePanel: function () {
        var me, store, treePanel; me = this;
        store = Ext.create('Ext.data.TreeStore', {
            root: {
                expanded: true,
                children: [
                    { text: 'detention', leaf: true },
                    {
                        text: 'homework', expanded: true, children: [
                            { text: 'book report', leaf: true },
                            { text: 'algebra', leaf: true }
                        ]
                    },
                    { text: 'buy lottery tickets', leaf: true }
                ]
            }
        });

        treePanel = Ext.create('Ext.tree.Panel', {
            flex: 1,
            store: store,
            rootVisible: false
        });
        me.addTree("treePanel", treePanel);
    },

    initGridPanel: function () {
        var me, gridpanel; me = this;
        gridpanel = Ext.create("App.ux.grid.GridPanel", {
            autoLoad: false,
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
                return me.getQuery("query").getQueryItems();
            }
        });
        me.addGrid("Grid", gridpanel);
    }
})