Ext.define("App.view.main.Home", {
    xtype: "home",
    routeId: "home",
    extend: "Ext.panel.Panel",
    iconCls: "x-fa fa-laptop",
    title: "首页",
    scrollable: Ext.scroll.Scroller({ y: true, x: false }),
     layout: {
        type: "vbox",
        align: "stretch"
    },
    items:[
        {
            xtype:"container",
            height:150,
            layout: {
                type: 'table',
                columns: 3
            },
            defaults: {
                bodyStyle: 'padding:20px'
            },
            // items: [
            //     {
            //         html: 'Cell A content'
            //     }, 
            //     {
            //         html: 'Cell B content'
            //     },
            //     {
            //         html: 'Cell C content',
            //         cellCls: 'highlight'
            //     }
            // ]
        }
    ]

    // layout: {
    //     type: "vbox",
    //     align: "stretch"
    // },
    // items: [
    //     {
    //         xtype: "container",
    //         layout: {
    //             type: "hbox",
    //             align: "stretch"
    //         },
    //         defaults:{
    //             height:150,
    //             flex:1,
    //             margin:"0 10 0 0"
    //         },
    //         items: [
    //             {
    //                 xtype:"container",
    //                 style:{
    //                     "background-color":"red"
    //                 },
    //                 html:"一"
    //             },
    //             {
    //                 xtype:"container",
    //                 style:{
    //                     "background-color":"blue"
    //                 },
    //                 html:"一"
    //             },
    //             {
    //                 xtype:"container",
    //                 style:{
    //                     "background-color":"green"
    //                 },
    //                 html:"一"
    //             },
    //             {
    //                 xtype:"container",
    //                 style:{
    //                     "background-color":"yellow"
    //                 },
    //                 html:"一"
    //             }
    //         ]
    //     }
    // ]
})
