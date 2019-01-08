Ext.define('App.data.systemmanage.sysuser.SysUser', {
    extend: "App.data.Simulated",
    init: function () {
        var me = this;
        me.dataSource = [
            { "SysUserRoleId": "cbffea09-0244-4a76-9070-19c832f0fef3", "UserId": "d0a70e97-06dc-4a39-a3fc-a6ce347635eb", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90" },
            { "SysUserRoleId": "dcdf04e9-98f3-4955-aba4-082c23f67483", "UserId": "d0a70e97-06dc-4a39-a3fc-a6ce347635eb", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9" },
            { "SysUserRoleId": "7cc81f2f-244f-4e74-87b5-1dd43d1ad9f8", "UserId": "d0a70e97-06dc-4a39-a3fc-a6ce347635eb", "RoleId": "ad046681-b0cd-43ea-883f-3081a51bb1ef" },
            { "SysUserRoleId": "478c6457-4587-4a60-81d8-1ad15baa8907", "UserId": "d0a70e97-06dc-4a39-a3fc-a6ce347635eb", "RoleId": "8bf287fa-6f7d-4d9e-83cb-c53dac4a0cd8" }
        ];
        me.GetSysUserRoleByRule();
        me.AddSysUserRole();
    },

    //获取某个用户下的所有角色
    GetSysUserRoleByRule: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysuserrole/GetSysUserRoleByRule",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData),
                    data = Ext.decode(requestData.Data);
                responseData = me.ResponseData();
                responseData.Data.List = [];
                for (var i = 0; i < me.dataSource.length; i++) {
                    if (data.UserId == me.dataSource[i].UserId) {
                        responseData.Data.List.push(me.dataSource[i]);
                    }
                }
                return responseData;
            }
        })
    },

    //添加用户的角色
    AddSysUserRole: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysuserrole/AddSysUserRole",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData();
                var data = Ext.decode(requestData.Data);
                if (!Ext.isEmpty(data.UserId)) {
                    for (var i = 0; i < me.dataSource.length; i++) {
                        if (me.dataSource[i].UserId == data.UserId) {
                            me.dataSource.splice(i, 1);
                            i-=1;
                        }
                    }
                    if (!Ext.isEmpty(data.RoleId)) {
                        var roleIds =data.RoleId.split(",");
                        for (var i = 0; i < roleIds.length; i++) {
                            me.dataSource.push({
                                    SysUserRoleId:Ext.data.identifier.Uuid.create().generate(),
                                    UserId:data.UserId,
                                    RoleId:roleIds[i]
                                });
                        }
                    }
                }
                return responseData;
            }
        })
    }
})
