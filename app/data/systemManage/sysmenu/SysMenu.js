Ext.define('App.data.systemmanage.sysmenu.Sysmenu', {
    extend: "App.data.Simulated",
    dataSource: [],
    init: function () {
        var me = this;
        //数据来源
        me.dataSource = [
            { "sysMenuId": 1, "parentId": 0, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "组件", "MenuOrder": 0, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 2, "parentId": 0, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "页面", "MenuOrder": 1, "Description": "", "IconCls": "x-fa fa-usd", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 3, "parentId": 0, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "应用", "MenuOrde": 2, "Description": "", "IconCls": "x-fa fa-frown-o", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 4, "parentId": 0, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "高级", "MenuOrde": 3, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 5, "parentId": 0, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "用户", "MenuOrde": 4, "Description": "", "IconCls": "x-fa fa-usd", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 6, "parentId": 0, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "设置", "MenuOrde": 5, "Description": "", "IconCls": "x-fa fa-usd", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 7, "parentId": 0, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "授权", "MenuOrde": 6, "Description": "", "IconCls": "x-fa fa-frown-o", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 8, "parentId": 0, "MenuCode": "SystemManage", "MenuName": "系统管理", "MenuOrde": 7, "Description": "x-fa fa-cog", "IconCls": "", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 9, "parentId": 1, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "栅格", "MenuOrder": 1, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 10, "parentId": 1, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "按钮", "MenuOrder": 2, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 11, "parentId": 1, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "表单", "MenuOrder": 3, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 12, "parentId": 1, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "导航", "MenuOrder": 4, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 13, "parentId": 4, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "book report", "MenuOrder": 1, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 14, "parentId": 4, "MenuCode": "",  "xtype":"", "routeId":"", "MenuName": "algebra", "MenuOrder": 2, "Description": "", "IconCls": "x-fa fa-folder", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 15, "parentId": 8, "MenuCode": "",  "xtype":"sysuser", "routeId":"sysuser", "MenuName": "用户管理", "MenuOrder": 1, "Description": "", "IconCls": "x-fa fa-user-o", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 16, "parentId": 8, "MenuCode": "",  "xtype":"sysorg", "routeId":"", "sysorg": "组织机构", "MenuOrder": 2, "Description": "", "IconCls": "x-fa fa-tree", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 17, "parentId": 8, "MenuCode": "",  "xtype":"sysrole", "routeId":"sysrole", "MenuName": "角色管理", "MenuOrder": 3, "Description": "", "IconCls": "x-fa fa-users", "isEnable": 0, "isDel": 0 },
            { "sysMenuId": 18, "parentId": 8, "MenuCode": "",  "xtype":"sysmenu", "routeId":"sysmenu", "MenuName": "菜单管理", "MenuOrder": 4, "Description": "", "IconCls": "x-fa fa-th-list", "isEnable": 0, "isDel": 0 }
        ],
            //获取分页数据接口
            me.GetSysMenuPage();

        //获取组织机构数据
        me.GetSysMenuByRule();
    },

    //获取分页数据
    GetSysMenuPage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/systemmanage/sysmenu/GetSysMenuPage",
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
            url: "/api/systemmanage/sysmenu/GetSysMenuByRule",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                    responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    }
})
