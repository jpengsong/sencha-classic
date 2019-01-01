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
                    },
                    {
                        xtype: 'combobox',
                        name: 'isEnable',
                        method: config.QueryMethod.Equal,
                        type: "String",
                        bind: {
                            store: "{isenablestore}"
                        },
                        displayField: "name",
                        valueField: "value",
                        width:200,
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
            selType: 'checkboxmodel',
            bind: {
                store: '{gridstore}'
            },
            columns: {
                items: [
                    { text: '用户名', dataIndex: 'userName', width: 100 },
                    { text: '登录名', dataIndex: 'loginName', width: 150 },
                    { text: '手机号', dataIndex: 'mobile', width: 120 },
                    { text: '邮箱', dataIndex: 'email', width: 200 },
                    {
                        text: '是否启用', dataIndex: 'isEnable', width: 80,
                        renderer: function (value) {
                            var strText = "", strColor = "";
                            strText = (value == 1 ? "是" : "否");
                            strColor = (value == 1 ? "green" : "red");
                            return "<span style='color:" + strColor + "'>" + strText + "</span>";
                        }
                    },
                    { text: '备注', dataIndex: 'Description', flex: 1 }
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