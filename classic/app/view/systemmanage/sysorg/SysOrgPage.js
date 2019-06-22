Ext.define("App.view.systemmanage.sysorg.SysOrgPage", {
    extend: "App.ux.page.Page",
    xtype: "sysorgpage",
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
            reference:"query",
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
                        name: 'OrgName',
                        method: config.QueryMethod.Like,
                        type: "String",
                        fieldLabel: '机构名称'
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
            defaults:{
                scale:"medium"
            },
            items: [
                {
                    text: '新增',
                    iconCls: "x-fa fa-plus",
                    handler: "onAdd"
                },
                {
                    text: '编辑',
                    iconCls: "x-fa fa-pencil-square-o",
                    handler: "onEdit"
                },
                {
                    text: '删除',
                    iconCls: "x-fa fa-trash-o",
                    handler: "onDelete"
                }
            ]
        })

        gridpanel = Ext.create("Ext.grid.Panel", {
            tbar: toolbar,
            columnLines: true,
            selType: 'checkboxmodel',
            reference:"grid",
            bind: {
                store: '{gridstore}'
            },
            columns: {
                items: [
                    { text: '机构名称', dataIndex: 'OrgName', width: 200 },
                    { text: '机构代码', dataIndex: 'OrgCode', width: 200 },
                    { text: '排序', dataIndex: 'Sort', width: 50 },
                    { text: '描述', dataIndex: 'Description', flex: 1 }
                ]
            },
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true
            },
            plugins: {
                requestdata: {
                    autoLoad: false,
                    pagination: true
                }
            }
        });
        me.addGrid("Grid", gridpanel);
    }
})