Ext.define('app.store.main.Navigation', {
    fields: ['type', 'text'],
    alias: 'store.main.Navigation',
    extend: 'Ext.data.TreeStore',
    model: 'app.model.main.Navigation',
    root: {
        expanded: true,
        children: [
            {
                "text": "组件",
                "iconCls": "x-fa fa-folder",
                "children": [
                    {
                        "text": "栅格",
                        "leaf": true,
                        "iconCls": "x-fa fa-book"
                    },
                    {
                        "text": "按钮",
                        "leaf": true,
                        "iconCls": "x-fa fa-graduation-cap"
                    },
                    {
                        "text": "表单",
                        "leaf": true,
                        "iconCls": "x-fa fa-graduation-cap"
                    },
                    {
                        "text": "导航",
                        "leaf": true,
                        "iconCls": "x-fa fa-graduation-cap"
                    }
                ]
            }, {
                "text": "页面",
                "leaf": true,
                "iconCls": "x-fa fa-usd"
            },
            {
                "text": "应用",
                "leaf": true,
                "iconCls": "x-fa fa-frown-o"
            },
            {
                "text": "高级",
                "iconCls": "x-fa fa-folder",
                "children": [{
                    "text": "book report",
                    "leaf": true,
                    "iconCls": "x-fa fa-book"
                }, {
                    "text": "algebra",
                    "leaf": true,
                    "iconCls": "x-fa fa-graduation-cap"
                }]
            }, {
                "text": "用户",
                "leaf": true,
                "iconCls": "x-fa fa-usd"
            }, {
                "text": "设置",
                "leaf": true,
                "iconCls": "x-fa fa-usd"
            },
            {
                "text": "授权",
                "leaf": true,
                "iconCls": "x-fa fa-frown-o"
            },{
                "text": "系统管理",
                "iconCls": "x-fa fa-folder",
                "children": [
                    {
                        "text": "用户",
                        "leaf": true,
                        "xtype":"sysuser",
                        "iconCls": "x-fa fa-user-o"
                    },
                    {
                        "text": "按钮",
                        "leaf": true,
                        "iconCls": "x-fa fa-graduation-cap"
                    },
                    {
                        "text": "表单",
                        "leaf": true,
                        "iconCls": "x-fa fa-graduation-cap"
                    },
                    {
                        "text": "导航",
                        "leaf": true,
                        "iconCls": "x-fa fa-graduation-cap"
                    }
                ]
            }
        ]
    }
});
