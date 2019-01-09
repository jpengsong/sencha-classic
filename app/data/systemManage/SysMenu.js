Ext.define('App.data.systemmanage.Sysmenu', {
    extend: "App.data.Simulated",
    dataSource: [],
    init: function () {
        var me = this;
        me.dataSource = [
            { "sysMenuId": "2ee4b173-4e09-44db-8550-23d54392077e", "parentId": "", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "页面", "MenuOrder": 0, "Description": "", "IconCls": "x-fa fa-tags", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "a562d8b2-2990-4595-a9eb-04d0c8665710", "parentId": "", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "集成插件", "MenuOrder": 1, "Description": "", "IconCls": "x-fa fa-cogs", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "55291f54-5ff6-4521-836c-492e099cf426", "parentId": "", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "封装", "MenuOrde": 2, "Description": "", "IconCls": "x-fa fa-paper-plane-o", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "186ffc34-1bc1-408c-a8d2-01f5a4499315", "parentId": "", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "UI主题", "MenuOrde": 3, "Description": "", "IconCls": "x-fa fa-tv", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "7bb5e251-e105-4538-9979-eb79cbbc35de", "parentId": "", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "Cmd命令", "MenuOrde": 5, "Description": "", "IconCls": "x-fa fa-plug", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "4fd54f9d-34fd-46a7-81a5-bdf0cbb69339", "parentId": "", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "授权", "MenuOrde": 6, "Description": "", "IconCls": "x-fa fa-usd", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "84a758b5-179b-4893-8706-483167a2f250", "parentId": "", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "版本日志", "MenuOrder": 0, "Description": "", "IconCls": "x-fa fa-envira", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "b729e75c-518d-446e-b34b-d7b2f811fc1d", "parentId": "", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "开发注意", "MenuOrder": 0, "Description": "", "IconCls": "x-fa fa-warning", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "parentId": "", "MenuCode": "SystemManage", "MenuName": "系统管理", "MenuOrde": 7, "Description": "x-fa fa-cog", "IconCls": "x-fa fa-cog", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "699d11e4-d4c4-4cdf-b1bc-8d92ddf70344", "parentId": "2ee4b173-4e09-44db-8550-23d54392077e", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "栅格", "MenuOrder": 1, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "b0e23827-a633-4edc-95cd-971fdfeed847", "parentId": "2ee4b173-4e09-44db-8550-23d54392077e", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "按钮", "MenuOrder": 2, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "457063da-0b14-4c7f-bb12-a0a8e20d90ee", "parentId": "2ee4b173-4e09-44db-8550-23d54392077e", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "表单", "MenuOrder": 3, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "4aeab063-da5e-408f-b467-b060e6a6dbf6", "parentId": "2ee4b173-4e09-44db-8550-23d54392077e", "MenuCode": "", "xtype": "", "routeId": "", "MenuName": "导航", "MenuOrder": 4, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "a7d00cf0-741b-44af-b90b-395698d64bc9", "parentId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "MenuCode": "", "xtype": "sysuser", "routeId": "sysuser", "MenuName": "用户管理", "MenuOrder": 1, "Description": "", "IconCls": "x-fa fa-user-o", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "a176b70f-4ba9-45b5-b021-c44b4215be93", "parentId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "MenuCode": "", "xtype": "sysorg", "routeId": "", "MenuName": "组织机构", "MenuOrder": 2, "Description": "", "IconCls": "x-fa fa-tree", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "577d5ee5-3375-4795-a41e-037e52c0f4a3", "parentId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "MenuCode": "", "xtype": "sysrole", "routeId": "sysrole", "MenuName": "角色管理", "MenuOrder": 3, "Description": "", "IconCls": "x-fa fa-users", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": "04b631a8-3e41-4382-9e43-f5aeaddb338d", "parentId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "MenuCode": "", "xtype": "sysmenu", "routeId": "sysmenu", "MenuName": "菜单管理", "MenuOrder": 4, "Description": "", "IconCls": "x-fa fa-th-list", "isEnable": 0, "isDel": 0 }
        ];
        me.GetSysMenuPage();
        me.GetSysMenuByRule();
    },

    //获取分页数据
    GetSysMenuPage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysmenu/GetSysMenuPage",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                    responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    },

    //获取数据
    GetSysMenuByRule: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "~/api/systemmanage/sysmenu/GetSysMenuByRule",
            getData: function (ctx) {
                return me.SqlQuery(null);
            }
        })
    }
})
