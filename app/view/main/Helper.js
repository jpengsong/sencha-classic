// Ext.define('app.view.main.Setup', {
//     xtype: "mainSetup",
//     reference: "mainSetupToolTip",
//     extend: "Ext.tip.ToolTip",
//     width: 220,
//     height: 225,
//     anchor: 'left',
//     autoHide: false,
//     closable: true,
//     ui:"maintip",
//     header: {
//         xtype: "header"
//     },
//     layout: {
//         type: 'vbox'
//     },
//     defaults: {
//         width: "100%"
//     },
//     items: [
//         {
//             xtype: "title",
//             text: '菜单布局',
//             textAlign: "center",
//             margin: "0 0 3 0",
//             style: {
//                 color: "#232d38",
//                 font: "400 14px/16px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif"
//             }
//         },
//         {
//             xtype: 'combobox',
//             columnWidth: 1,
//             forceSelection: true,
//             bind: { store: "{MenuLocationStore}" },
//             queryMode: 'local',
//             displayField: 'text',
//             valueField: 'type',
//             value: 0
//         },
//         {
//             xtype: "title",
//             margin: "0 0 3 0",
//             text: '更换主题',
//             textAlign: "center",
//             style: {
//                 color: "#232d38",
//                 font: "400 14px/16px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif"
//             }
//         },
//         {
//             flex: 1,
//             layout: {
//                 type: 'table',
//                 columns: 3
//             },
//             defaults: {
//                 margin: '5 2',
//                 width: 63,
//                 height: 45,
//                 border: false
//             },
//             defaultType: "button",
//             items: [
//                 { reference: "firstbtn", theme: "first", ui: "firstbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "thirdbtn", theme: "third", ui: "thirdbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "fourthbtn", theme: "fourth", ui: "fourthbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "fifthbtn", theme: "fifth", ui: "fifthbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "sixthbtn", theme: "sixth", ui: "sixthbtn", colspan: 1, listeners: { click: "onThemeChange" } },
//                 { reference: "secondbtn", theme: "second", ui: "secondbtn", colspan: 1, listeners: { click: "onThemeChange" } }
//             ]
//         }
//     ]
// });