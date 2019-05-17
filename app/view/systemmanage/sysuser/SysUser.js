Ext.define("App.view.systemmanage.sysuser.SysUser", {
    xtype: "sysuser",
    viewModel: "sysuser",
    controller: "sysuser",
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
                padding:"5 30",
                defaults: {
                    margin: "15 15",
                    labelWidth: 70,
                    style: {
                        "text-align": "center"
                    }
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'UserName',
                        method: config.QueryMethod.Like,
                        type: "String",
                        fieldLabel: '用户名'
                    },
                    {
                        xtype: 'combobox',
                        name: 'IsEnable',
                        method: config.QueryMethod.Equal,
                        type: "String",
                        bind: {
                            store: "{isenablestore}"
                        },
                        displayField: "name",
                        valueField: "value",
                        fieldLabel: '是否启用'
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
                },
                {
                    text: '分配角色',
                    iconCls: "x-fa fa-group",
                    handler: "onUserRole"
                },
                {
                    text: '导入',
                    iconCls: "x-fa fa-upload",
                    handler: "onImport"
                }
            ]
        })

        gridpanel = Ext.create("Ext.grid.Panel", {
            tbar: toolbar,
            reference:"grid",
            columnLines: true,
            selModel : {
                type:"checkboxmodel"
            },
            bind: {
                store:{
                    bindTo:'{gridstore}'
                } 
            },
            columns: {
                items: [
                    { text: '用户名', dataIndex: 'UserName', width: 100 },
                    { text: '登录名', dataIndex: 'LoginName', width: 150 },
                    { text: '手机号', dataIndex: 'Mobile', width: 120 },
                    { text: '邮箱', dataIndex: 'Email', width: 200 },
                    { text: '是否启用', dataIndex: 'IsEnable', width: 80, renderer: function (value) { return "<span style='color:" + (value == 1 ? "green" : "red") + "'>" + (value == 1 ? "是" : "否") + "</span>"; } },
                    { text: '备注', dataIndex: 'Description', flex: 1 }
                ]
            },
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true,
                border:false
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