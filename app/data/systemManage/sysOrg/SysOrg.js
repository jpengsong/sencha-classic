Ext.define('App.data.systemManage.sysOrg.SysOrg', {
    extend: "App.data.Simulated",
    dataSource: [],
    init: function () {
        var me = this;

        //数据来源
        me.dataSource = [
            { "sysOrgId": 1, "parentOrgId": 0, "level": 0, "orgName": "集团公司", "description": "", "sort": 0, "isEnable": 0 },
            { "sysOrgId": 2, "parentOrgId": 1, "level": 1, "orgName": "金融地产事业部", "description": "", "sort": 100, "isEnable": 0 },
            { "sysOrgId": 3, "parentOrgId": 1, "level": 1, "orgName": "综合应用部", "description": "", "sort": 200, "isEnable": 0 },
            { "sysOrgId": 4, "parentOrgId": 1, "level": 1, "orgName": "资产监管事业部", "description": "", "sort": 300, "isEnable": 0 },
            { "sysOrgId": 5, "parentOrgId": 1, "level": 1, "orgName": "市场部", "description": "", "sort": 400, "isEnable": 0 },
            { "sysOrgId": 6, "parentOrgId": 1, "level": 1, "orgName": "投资顾问", "description": "", "sort": 500, "isEnable": 0 },
            { "sysOrgId": 7, "parentOrgId": 1, "level": 1, "orgName": "行政", "description": "", "sort": 700, "isEnable": 0 },
            { "sysOrgId": 8, "parentOrgId": 1, "level": 1, "orgName": "财务", "description": "", "sort": 100, "isEnable": 0 },
            { "sysOrgId": 9, "parentOrgId": 3, "level": 2, "orgName": "IT开发组", "description": "", "sort": 200, "isEnable": 0 },
            { "sysOrgId": 10, "parentOrgId": 3, "level": 2, "orgName": "数据采集组", "description": "", "sort": 300, "isEnable": 0 },
            { "sysOrgId": 11, "parentOrgId": 3, "level": 2, "orgName": "运维组", "description": "", "sort": 400, "isEnable": 0 }
        ],
            //获取分页数据接口
            me.GetSysOrgPage();
        //获取组织机构数据
        me.GetSysOrgByRule();
    },

    //获取分页数据
    GetSysOrgPage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/SystemManage/SysOrg/GetSysOrgPage",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                    responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    },

    //获取组织机构数据
    GetSysOrgByRule: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "/api/SystemManage/SysOrg/GetSysOrgByRule",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                    responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    }
})
