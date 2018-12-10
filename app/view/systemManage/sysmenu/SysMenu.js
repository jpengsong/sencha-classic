Ext.define("App.view.systemmanage.sysmenu.SysMenu", {
    xtype: "sysmenu",
    viewModel: "sysmenu",
    controller: "sysmenu",
    extend: "Ext.panel.Panel",
    layout: {
        type: 'fit'
    },
    initComponent: function () {
        var me = this;
        me.initTreePanel();
        me.callParent();
    },

    initTreePanel: function () {
        var me, treePanel, toolbar; me = this;
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
        });

        treePanel = Ext.create('Ext.tree.Panel', {
            tbar: toolbar,
            rootVisible: false,
            flex: 1,
            bind: {
                store: '{treestore}'
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
            columns: [
                {
                    xtype: 'treecolumn',
                    text: '名称',
                    dataIndex: 'MenuName',
                    width: 300,
                    sortable: true
                },
                {
                    text: '菜单编码',
                    dataIndex: 'MenuCode',
                    width: 150,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '排序',
                    dataIndex: 'MenuOrder',
                    width: 80,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '图标',
                    dataIndex: 'IconCls',
                    width: 100,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '页面别名',
                    dataIndex: 'xtype',
                    width: 150,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '路由标识',
                    dataIndex: 'routeId',
                    width: 150,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '是否启用',
                    dataIndex: 'isEnable',
                    width: 100,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '描述',
                    dataIndex: 'Description',
                    flex: 1,
                    sortable: true,
                    align: 'center'
                }
            ]
        });
        me.items = [treePanel];
    },
})