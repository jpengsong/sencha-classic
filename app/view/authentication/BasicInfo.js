Ext.define("App.view.authentication.BasicInfo", {
    extend: "Ext.Window",
    xtype: "basicinfo",
    iconCls: "x-fa fa-user-circle",
    title: "个人资料",
    modal: true,
    autoShow: true,
    width: 900,
    height: 400,
    layout: {
        type: 'table',
        columns: 7,
        tableAttrs: {
            style: {
                width: '100%',
                height: '100%',
                "table-layout": "fixed",
                "word-wrap": "break-word",
                "text-align": "center",
                "padding": "2px 2px"
            },
            border: "1"
        }
    },
    defaults: {
        padding: "15px"
    },
    defaultType: "container",
    items: [
        {
            html: "<b>姓名</b>"
        },
        {
            html: ""
        },
        {
            html: '<b>性别</b>'
        },
        {
            html: ""
        },
        {
            html: '<b>出生年月</b>'
        },
        {
            html: ''
        },
        {
            html: '',
            rowspan: 3
        },
        {
            html: '<b>民族</b>'
        },
        {
            html: ''
        },
        {
            html: '<b>学历</b>'
        },
        {
            html: ''
        },
        {
            html: '<b>学位</b>'
        },
        {
            html: ''
        },
        {
            html: '<b>婚否</b>'
        },
        {
            html: ''
        },
        {
            html: '<b>政治面目</b>'
        },
        {
            html: ''
        },
        {
            html: '<b>联系方式</b>'
        },
        {
            bind: {
                html: "{user.Mobile}"
            }
        },
        {
            html: '<b>入职时间</b>'
        },
        {
            html: '',
            colspan: 2
        },
        {
            html: '<b>籍贯</b>'
        },
        {
            html: '',
            colspan: 3
        },
        {
            html: '<b>毕业院校</b>'
        },
        {
            html: '',
            colspan: 2
        },
        {
            html: '<b>所学专业</b>'
        },
        {
            html: '',
            colspan: 3
        }
    ]
})