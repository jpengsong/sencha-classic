Ext.define("App.view.systemmanage.sysorg.SysOrg", {
    extend: "App.ux.page.TreePage",
    xtype: "sysorg",
    viewModel: "sysorg",
    controller: "sysorg",
    initComponent: function () {
        var me = this;
        me.initTreePanel();
        me.initPagePanel();
        me.callParent();
    },

    initTreePanel: function () {
        var me, treePanel; me = this;
        treePanel = Ext.create('Ext.tree.Panel', {
            reference: "tree",
            bodyBorder:false,
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
                    bodyBorder:false,
                    reference: 'navtreeFilter',
                    dock: 'top',
                    emptyText: '搜索...',
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

    initPagePanel: function () {
        var me = this,pagePanel;
        pagePanel = Ext.create("App.view.systemmanage.sysorg.SysOrgPage", {
            reference: "page"
        });
        me.addPage("pagePanel", pagePanel);
    }
})