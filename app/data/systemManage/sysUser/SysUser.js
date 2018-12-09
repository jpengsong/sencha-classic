Ext.define('App.data.systemmanage.sysuser.SysUser', {
    extend: "App.data.Simulated",
    dataSource: [],
    init: function () {
        var me = this;
        //数据来源
        me.dataSource = [
            { "sysUserId": 1, "orgId": "2", "userName": "张三1", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 2, "orgId": "2", "userName": "张三3", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 3, "orgId": "2", "userName": "张三4", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 4, "orgId": "2", "userName": "张三5", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 5, "orgId": "2", "userName": "张三6", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 6, "orgId": "2", "userName": "张三7", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 7, "orgId": "2", "userName": "张三8", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 9, "orgId": "2", "userName": "张三9", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 10, "orgId": "2", "userName": "张三10", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 11, "orgId": "2", "userName": "张三11", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 12, "orgId": "2", "userName": "张三12", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 13, "orgId": "2", "userName": "张三13", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 14, "orgId": "2", "userName": "张三14", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 15, "orgId": "2", "userName": "张三15", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 16, "orgId": "2", "userName": "张三16", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 17, "orgId": "2", "userName": "张三17", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 18, "orgId": "2", "userName": "张三18", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 19, "orgId": "2", "userName": "张三19", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 20, "orgId": "2", "userName": "张三20", "loginName": "zhangsan", "mobile": "13500000000" }
        ],
        //获取分页数据接口
        me.GetSysUserPage();
    },

    //获取分页数据
    GetSysUserPage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/systemmanage/sysuser/GetSysUserPage",
            getData: function (ctx) {
                var requestData= Ext.decode(ctx.params.RequestData),condition= me.getCondition(requestData),
                    responseData=me.SqlQuery(condition);
                return responseData;
            }
        })
    }
})
