Ext.define('App.data.systemmanage.sysmenu.SysMenuPermission', {
    extend: "App.data.Simulated",
    dataSource: [],
    init: function () {
        var me = this;
        //数据来源
        me.dataSource = [
            { "sysMenuPermissionId": 1, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 2, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 3, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 4, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 5, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 6, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 7, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 8, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 9, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 10, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 11, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 12, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 13, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 14, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 15, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 16, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 17, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 18, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""},
            { "sysMenuPermissionId": 19, "menuId": 0, "roleId": "1",  "createUserId":"", "createUserName":"", "createDate": ""}
        ],
            //获取分页数据接口
            me.GetSysMenuPermissionPage();

        //获取组织机构数据
        me.GetSysMenuPermissionByRule();
    },

    //获取分页数据
    GetSysMenuPermissionPage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/systemmanage/sysmenu/GetSysMenuPermissionPage",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                    responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    },

    //获取数据
    GetSysMenuPermissionByRule: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "/api/systemmanage/sysmenu/GetSysMenuPermissionByRule",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                    responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    }
})
