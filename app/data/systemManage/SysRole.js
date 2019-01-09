Ext.define('App.data.systemmanage.SysRole', {
    extend: "App.data.Simulated",
    dataSource: [],
    init: function () {
        var me = this;
        me.dataSource = [
            { "sysRoleId": "5519da9e-ae64-40ad-b676-bbc724872c90", "RoleName": "超级管理员", "Description": "", "isDel": 0 },
            { "sysRoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "RoleName": "管理员", "Description": "", "isDel": 0 },
            { "sysRoleId": "ad046681-b0cd-43ea-883f-3081a51bb1ef", "RoleName": "普通用户", "Description": "", "isDel": 0 },
            { "sysRoleId": "8bf287fa-6f7d-4d9e-83cb-c53dac4a0cd8", "RoleName": "部门领导", "Description": "", "isDel": 0 },
            { "sysRoleId": "b71aac1d-7a02-4c06-b66b-e0be2d587fb2", "RoleName": "游客", "Description": "", "isDel": 0 }
        ];
        me.GetSysRolePage();
        me.GetSysRoleAll();
    },

    //获取分页数据
    GetSysRolePage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysrole/GetSysRolePage",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                    responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    },

    //获取所有角色
    GetSysRoleAll: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysrole/GetSysRoleAll",
            getData: function (ctx) {
                var responseData = me.ResponseData();
                responseData.Data = {};
                responseData.Data.List = me.dataSource;
                return responseData;
            }
        })
    }
})
