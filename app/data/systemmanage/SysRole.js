Ext.define('App.data.systemmanage.SysRole', {
    extend: "App.data.Simulated",
    init: function () {
        var me = this;
        me.dataSource = [
            { "SysRoleId": "5519da9e-ae64-40ad-b676-bbc724872c90", "RoleName": "超级管理员", "Description": "", "isDel": 0 },
            { "SysRoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "RoleName": "管理员", "Description": "", "isDel": 0 },
            { "SysRoleId": "ad046681-b0cd-43ea-883f-3081a51bb1ef", "RoleName": "普通用户", "Description": "", "isDel": 0 },
            { "SysRoleId": "8bf287fa-6f7d-4d9e-83cb-c53dac4a0cd8", "RoleName": "部门领导", "Description": "", "isDel": 0 },
            { "SysRoleId": "b71aac1d-7a02-4c06-b66b-e0be2d587fb2", "RoleName": "游客", "Description": "", "isDel": 0 }
        ];
        me.GetSysRolePage();
        me.GetSysRoleAll();
        me.AddSysRole();
        me.EditSysRole();
        me.DeleteSysRole();
    },

    //获取分页数据
    GetSysRolePage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/SystemManage/SysRole/GetSysRolePage",
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
            url: "/api/SystemManage/SysRole/GetSysRoleAll",
            getData: function (ctx) {
                var responseData = me.ResponseData();
                responseData.Data = {};
                responseData.Data.List = me.dataSource;
                return responseData;
            }
        })
    },

    //添加角色
    AddSysRole: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/SystemManage/SysRole/AddSysRole",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData();
                me.dataSource.unshift(Ext.decode(requestData.Data));
                return responseData;
            }
        })
    },

    //编辑角色
    EditSysRole: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/SystemManage/SysRole/EditSysRole",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData(), data;
                data = Ext.decode(requestData.Data);
                for (var i = 0; i < me.dataSource.length; i++) {
                    if (me.dataSource[i].SysRoleId == data.SysRoleId) {
                        Ext.apply(me.dataSource[i], data);
                        break;
                    }
                }
                return responseData;
            }
        })
    },

    //删除角色
    DeleteSysRole: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/SystemManage/SysRole/DeleteSysRole",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData(), data;
                data = Ext.decode(requestData.Data);
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < me.dataSource.length; j++) {
                        if (me.dataSource[j].SysRoleId == data[i]) {
                            me.dataSource.splice(j, 1);
                            break;
                        }
                    }
                }
                return responseData;
            }
        })
    },
})
