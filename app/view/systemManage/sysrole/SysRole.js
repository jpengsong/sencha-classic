Ext.define("App.view.systemmanage.sysrole.SysRole", {
    xtype: "sysrole",
    viewModel: "sysrole",
    controller: "sysrole",
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
                        name: 'roleName',
                        method: config.QueryMethod.Like,
                        type: "String",
                        fieldLabel: '角色名'
                    }
                ]
            }
        });
      
        
        me.addQuery("query", querypanel);
    },

    initGridPanel: function () {
        var me, gridpanel, toolbar; me = this;
        toolbar = Ext.create({
            xtype: "toolbar",
            layout: "hbox",
            items: [
                {
                    text: '新增',
                    iconCls: "x-fa fa-plus",
                    handler: function () {

                    }
                },
                {
                    text: '编辑',
                    iconCls: "x-fa fa-pencil-square-o"
                },
                {
                    text: '删除',
                    iconCls: "x-fa fa-trash-o"
                }
            ]
        })

        gridpanel = Ext.create("Ext.grid.Panel", {
            tbar: toolbar,
            selType: 'checkboxmodel',
            bind: {
                store: '{gridstore}'
            },
            columns: {
                items: [
                    { text: '角色名称', dataIndex: 'RoleName',width:200 },
                    { text: '描述', dataIndex: 'Description', flex:1 }
                ]
            },
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true
            },
            plugins: {
                requestdata: {
                    autoLoad: true,
                    pagination: true
                }
            }
        });
        me.addGrid("Grid", gridpanel);
    }
})