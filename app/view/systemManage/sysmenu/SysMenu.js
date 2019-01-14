Ext.define("App.view.systemmanage.sysmenu.SysMenu", {
    xtype: "sysmenu",
    viewModel: "sysmenu",
    controller: "sysmenu",
    style: { "border-top": "1px solid #d1d1d1" },
    extend: "Ext.panel.Panel",
    layout: "fit",
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
                    reference: "addbtn",
                    iconCls: "x-fa fa-plus",
                    handler: "onAdd"
                },
                {
                    text: '编辑',
                    reference: "editbtn",
                    iconCls: "x-fa fa-pencil-square-o",
                    handler: "onEdit"
                },
                {
                    text: '删除',
                    reference: "delbtn",
                    iconCls: "x-fa fa-trash-o",
                    handler: "onDel"
                }
            ]
        });

        treePanel = Ext.create({
            xtype: "treepanel",
            reference: "treepanel",
            tbar: toolbar,
            rootVisible: false,
            checkPropagation: 'both',
            animate: true,
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
                    text: '菜单名称',
                    dataIndex: 'Name',
                    width: 250,
                    sortable: true
                },
                {
                    text: '编码',
                    dataIndex: 'Code',
                    width: 150,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '排序',
                    dataIndex: 'Order',
                    width: 80,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '图标',
                    dataIndex: 'IconCls',
                    width: 80,
                    sortable: true,
                    align: 'center',
                    renderer: function (value) {
                        return "<i class='" + value + "'></i>";
                    }
                },
                {
                    text: '页面类型',
                    dataIndex: 'XType',
                    width: 150,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '路由',
                    dataIndex: 'RouteId',
                    width: 150,
                    sortable: true,
                    align: 'center'
                },
                {
                    text: '是否启用',
                    dataIndex: 'IsEnable',
                    width: 100,
                    sortable: true,
                    align: 'center',
                    renderer: function (value) { return "<span style='color:" + (value == 1 ? "green" : "red") + "'>" + (value == 1 ? "是" : "否") + "</span>"; }
                },
                {
                    text: '描述',
                    dataIndex: 'Description',
                    flex: 1,
                    sortable: true,
                    align: 'center'
                }
            ],
            listeners: {
                rowclick: "onRowclick"
            }
        });
        me.items = [treePanel];
    }
})