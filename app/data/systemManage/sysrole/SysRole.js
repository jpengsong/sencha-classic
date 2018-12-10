Ext.define('App.data.systemmanage.sysrole.SysRole', {
    extend: "App.data.Simulated",
    dataSource: [],
    init: function () {
        var me = this;
        //数据来源
        me.dataSource = [
           
        ],
        //获取分页数据接口
        me.GetSysRolePage();
    },

    //获取分页数据
    GetSysRolePage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/systemmanage/sysrole/GetSysRolePage",
            getData: function (ctx) {
                var requestData= Ext.decode(ctx.params.RequestData),condition= me.getCondition(requestData),
                    responseData=me.SqlQuery(condition);
                return responseData;
            }
        })
    }
})
