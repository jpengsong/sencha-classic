Ext.define('App.data.systemmanage.sysuser.SysUser', {
    extend: "App.data.Simulated",
    dataSource:  [],
    init: function () {
        var me = this;
        //数据源
        me.dataSource = [
           
        ];
        me.GetSysUserRoleByRule();
        me.AddSysUserRole();
        me.DeleteSysUserRole();
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
                data=Ext.decode(requestData.Data),
                list = [];
                responseData = me.ResponseData();
                App.Ajax.request({
                    url: "~/api/systemmanage/sysrole/GetSysRoleAll",
                    method: "GET",
                    async:false,
                    nosim: false,
                    type: "JSON",
                    success: function (data) {
                        for(var i=0; i <list.length;i++){
                            for(var j = 0;j<me.data.Data.length;j++){
                                if(list[i].RoleId==me.data.Data[j].sysRoleId){
                                    list[i].RoleName=me.data.Data[j].RoleName;
                                    break;
                                }
                            }
                        }
                    }
                })
                responseData.Data = list;
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
                me.dataSource.unshift(Ext.decode(requestData.Data));
                return responseData;
            }
        })
    },

    //删除用户角色数据
    DeleteSysUserRole: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysuserrole/DeleteSysUserRole",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData(), data;
                data = Ext.decode(requestData.Data);
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < me.dataSource.length; j++) {
                        if (me.dataSource[j].sysUserId == data[i]) {
                            me.dataSource.splice(j,1);
                            break;
                        }
                    }
                }
                return responseData;
            }
        })
    }
})
