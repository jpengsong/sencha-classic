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
            displayField: "orgName",
            rootVisible: false,
            bind: {
                store: '{treestore}'
            },
            style: {
                "border-right-width": "2px",
                "border-right-style": "solid",
                "border-right-color": "#d1d1d1"
            },
            plugins: {
                requestdata: {
                    autoLoad: true,
                    root: {
                        expanded: true,
                        children: []
                    }
                }
            },
            dockedItems: [{
                xtype: 'textfield',
                reference: 'navtreeFilter',
                dock: 'top',
                emptyText: 'Search',
                triggers: {
                    clear: {
                        cls: 'x-form-clear-trigger',
                        handler: 'onNavFilterClearTriggerClick',
                        hidden: true,
                        scope: 'controller'
                    },
                    search: {
                        cls: 'x-form-search-trigger',
                        weight: 1,
                        handler: 'onNavFilterSearchTriggerClick',
                        scope: 'controller'
                    }
                },
        
                listeners: {
                    change: 'onNavFilterFieldChange',
                    buffer: 300
                }
            }]
        });
        me.addTree("treePanel", treePanel,250);
    },

    initQueryPanel: function () {
        var me, querypanel, queryItems; me = this;
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
                        name: 'orgName',
                        method: config.QueryMethod.Like,
                        type: "String",
                        fieldLabel: '机构名称'
                    }
                ]
            },
            getQueryItems: function () {
                queryItems = App.Page.getQueryItems(Ext.ComponentQuery.query("container[reference='searchcondition']", querypanel)[0]);
                queryItems.push({ key: "parentOrgId", Value: "1", Method: " = ", Type: "String" });
                return queryItems;
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
                    { text: '机构名称', dataIndex: 'orgName', width: 200 },
                    { text: '是否启用', dataIndex: 'isEnable', width: 100 },
                    { text: '排序', dataIndex: 'sort', width: 50 },
                    { text: '描述', dataIndex: 'description', flex: 1 }
                ]
            },
            bbar: {
                xtype: 'pagingtoolbar',
                displayInfo: true
            },
            plugins: {
                requestdata: {
                    autoLoad: true,
                    pagination: true,
                    params: function () {
                        return me.getQuery("query").getQueryItems();
                    }
                }
            }
        });
        me.addGrid("Grid", gridpanel);
    }
})