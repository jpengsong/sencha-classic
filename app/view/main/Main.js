Ext.define("app.view.main.Main", {
    extend: "Ext.container.Viewport",
    layout: {
        type: "vbox"
    },
    defaults: {
        width: "100%"
    },
    items: [
        {
            xtype: "toolbar",
            width:"100%",
            height: 55,
            padding: "0 0",
            defaults: {
                margin: "0 5 0 10",
                scale: "small"
            },
            style: {
                "background": "#025b80"
            },
            items: [
                {
                    xtype: "image",
                    width:100,
                    height:'100%',
                    src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAH0AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKw9U8YaDpAIutRi3/wDPOM72/IfSuPv/AIv2wDLp2mSudvD3DBcH/dXOR+NWoSlsjuw+WYvEa0qba77L72emUV4he/FHxBc7xCYLZWGAI0yV9wTWRP408SXMLRSavcbG67SFP5gA1oqEj1qfC2NkryaXzPoaivmz/hINa/6C9/8A+BL/AONH9v61/wBBe/8A/Al/8af1d9zp/wBUq/8Az8X3M+k6K+bP7f1r/oL3/wD4Ev8A41dtfGfiKyQJFq1wVBziQ78/icmh4eXcifCeJS92af3n0NRXi1r8V9ehZjPFa3AI4BQrj8jXR6f8XdPkIXUN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AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//Z",
                },
                '->',
                {
                    xtype: "button",
                    ui: "darkblue",
                    text: "消息",
                    iconCls: 'x-fa fa-comment-o',
                },
                {
                    xtype: "button",
                    ui: "darkblue",
                    text: "设置",
                    iconCls: 'x-fa fa-home',
                    handler: function () {
                        var me = this;
                        var tip1 = Ext.create('Ext.tip.ToolTip', {
                            target: me.getId(),
                            width: 220,
                            height: 225,
                            anchor: 'left',
                            autoHide: false,
                            closable: true,
                            header: {
                                xtype: "header",
                                style: {
                                    "background-image": "none !important",
                                    "background-color": "white !important",
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
                                    store: Ext.create('Ext.data.Store', {
                                        fields: ['type', 'text'],
                                        data: [
                                            { "type": "0", "text": "左右" },
                                            { "type": "1", "text": "上下" }
                                        ]
                                    }),
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
                                        { text: "使用中", ui: "darkblue", colspan: 1 },
                                        { ui: "green", colspan: 1 },
                                        { ui: "gules", colspan: 1 },
                                        { ui: "gray", colspan: 1 },
                                        { ui: "neptune", colspan: 1 },
                                        { ui: "aria", colspan: 1 }
                                    ]
                                }
                            ]
                        });
                        tip1.show();
                    }
                },
                { xtype: "button", ui: "darkblue", text: "注销", iconCls: "x-fa fa-power-off" }
            ]
        },
        { flex: 12, html: "eeeeee" },
    ]
})  