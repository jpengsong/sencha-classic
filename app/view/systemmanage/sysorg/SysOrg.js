Ext.define("App.view.systemmanage.sysorg.SysOrg", {
    xtype: "sysorg",
    viewModel: "sysorg",
    controller: "sysorg",
    extend: "App.ux.page.Page",
    initComponent: function () {
        var me = this;
        me.initTreePanel();
        me.initQueryPanel();
        me.initGridPanel();
        me.callParent();
    },

    initTreePanel: function () {
        var me, treePanel; me = this;
        treePanel = Ext.create('Ext.tree.Panel', {
            reference: "tree",
            rootVisible: false,
            bind: {
                store: '{treestore}'
            },
            columns: [{
                xtype: 'treecolumn',
                flex: 1,
                dataIndex: 'OrgName',
                renderer: 'treeNavNodeRenderer'
            }],
            style: { "border-right": "1px solid #d1d1d1" },
            plugins: {
                requestdata: {
                    autoLoad: true,
                    params: function () {
                        return { SysOrgId: "" };
                    },
                    root: {
                        expanded: true,
                        children: []
                    }
                }
            },
            dockedItems: [
                {
                    xtype: 'textfield',
                    reference: 'navtreeFilter',
                    dock: 'top',
                    emptyText: '搜索...',
                    style: {
                        "border-width": '0px'
                    },
                    triggers: {
                        clear: {
                            cls: 'x-form-clear-trigger',
                            handler: 'onFilterClearTriggerClick',
                            hidden: true,
                            scope: 'controller'
                        },
                        search: {
                            cls: 'x-form-search-trigger',
                            weight: 1,
                            handler: 'onFilterSearchTriggerClick'
                        }
                    },
                    listeners: {
                        change: 'onFilterFieldChange',
                        buffer: 300
                    }
                }
            ],
            listeners: {
                select: "onTreeSelect",
                load: function (store, records, successful, operation, node, eOpts) {
                    if (successful && records.length > 0) {
                        treePanel.getSelectionModel().select(records[0]);
                    }
                }
            }
        });
        me.addTree("treePanel", treePanel, 250);
    },

    initQueryPanel: function () {
        var me, querypanel, queryItems; me = this;
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