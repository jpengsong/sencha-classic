Ext.define('app.store.main.Navigation', {
    fields: ['type', 'text'],
    alias: 'store.main.Navigation',
    extend: 'Ext.data.TreeStore',
    model: 'app.model.main.Navigation',
    //defaultRootId:"records"
    // data:{
    //     "Data": {
    //         "records": [
    //             {
    //                 "text": "主页",
    //                 "leaf": true,
    //                 "iconCls": "x-fa fa-frown-o"
    //             },
    //             {
    //                 "text": "组件",
    //                 "iconCls": "x-fa fa-folder",
    //                 "children": [
    //                     {
    //                         "text": "栅格",
    //                         "leaf": true,
    //                         "iconCls": "x-fa fa-book"
    //                     },
    //                     {
    //                         "text": "按钮",
    //                         "leaf": true,
    //                         "iconCls": "x-fa fa-graduation-cap"
    //                     },
    //                     {
    //                         "text": "表单",
    //                         "leaf": true,
    //                         "iconCls": "x-fa fa-graduation-cap"
    //                     },
    //                     {
    //                         "text": "导航",
    //                         "leaf": true,
    //                         "iconCls": "x-fa fa-graduation-cap"
    //                     }
    //                 ]
    //             }, {
    //                 "text": "页面",
    //                 "leaf": true,
    //                 "iconCls": "x-fa fa-usd"
    //             },
    //             {
    //                 "text": "应用",
    //                 "leaf": true,
    //                 "iconCls": "x-fa fa-frown-o"
    //             },
    //             {
    //                 "text": "高级",
    //                 "iconCls": "x-fa fa-folder",
    //                 "children": [{
    //                     "text": "book report",
    //                     "leaf": true,
    //                     "iconCls": "x-fa fa-book"
    //                 }, {
    //                     "text": "algebra",
    //                     "leaf": true,
    //                     "iconCls": "x-fa fa-graduation-cap"
    //                 }]
    //             }, {
    //                 "text": "用户",
    //                 "leaf": true,
    //                 "iconCls": "x-fa fa-usd"
    //             }, {
    //                 "text": "设置",
    //                 "leaf": true,
    //                 "iconCls": "x-fa fa-usd"
    //             },
    //             {
    //                 "text": "授权",
    //                 "leaf": true,
    //                 "iconCls": "x-fa fa-frown-o"
    //             }
    //         ]
    //     }
    // },
    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'records'
    //     }
    // }
    // proxy: {
    //     type: 'ajax',
    //     actionMethods: { read: 'get' },
    //     timeout: 60000,
    //     url:'app/data/main/Navigation.json',
    //     reader: Ext.create('ux.framework.Reader', { type: "ComboStore" })
    // }
});
