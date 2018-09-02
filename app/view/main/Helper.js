Ext.define('app.view.main.Setup', {
    xtype: "mainSetup",
    reference: "mainSetupToolTip",
    extend: "Ext.tip.ToolTip",
    width: 220,
    height: 225,
    anchor: 'left',
    autoHide: false,
    closable: true,
    header: {
        xtype: "header",
        style: {
            "background-image": "none",
            "background-color": "white",
            "border-style": "none"
        }
    },
    style: {
        "background-image": "none",
        "background-color": "white",
        "border-style": "none"
    },
    bodyStyle: {
        "background-image": "none",
        "background-color": "white",
        "border-style": "none"
    },
    layout: {
        type: 'vbox'
    },
    defaults: {
        width: "100%"
    },
    items: [
        {
            xtype: "title",
            text: '菜单布局',
            textAlign: "center",
            margin: "0 0 3 0",
            style: {
                color: "#232d38",
                font: "400 14px/16px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif"
            }
        },
        {
            xtype: 'combobox',
            columnWidth: 1,
            forceSelection: true,
            bind: { store: "{MenuLocationStore}" },
            queryMode: 'local',
            displayField: 'text',
            valueField: 'type',
            value: 0
        },
        {
            xtype: "title",
            margin: "0 0 3 0",
            text: '更换主题',
            textAlign: "center",
            style: {
                color: "#232d38",
                font: "400 14px/16px 'Open Sans', 'Helvetica Neue', helvetica, arial, verdana, sans-serif"
            }
        },
        {
            flex: 1,
            layout: {
                type: 'table',
                columns: 3
            },
            defaults: {
                margin: '5 2',
                width: 63,
                height: 45,
                border: false
            },
            defaultType: "button",
            items: [
                { reference:"darkblue", ui: "darkblue", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference:"green",ui: "green", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference:"gules",ui: "gules", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference:"gray",ui: "gray", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference:"neptune",ui: "neptune", colspan: 1, listeners: { click: "onThemeChange" } },
                { reference:"aria",ui: "aria", colspan: 1, listeners: { click: "onThemeChange" } }
            ]
        }
    ]
});