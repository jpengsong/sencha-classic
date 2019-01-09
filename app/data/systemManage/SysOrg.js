Ext.define('App.data.systemmanage.SysOrg', {
    extend: "App.data.Simulated",
    dataSource: [],
    init: function () {
        var me = this;

        //数据来源
        me.dataSource = [
            { "sysOrgId": "a9955f8c-cfdd-4f61-97a8-55bd9efe1306", "parentOrgId": "", "level": 1, "orgName": "集团公司", "description": "", "sort": 0},
            { "sysOrgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "parentOrgId": "a9955f8c-cfdd-4f61-97a8-55bd9efe1306", "level": 2, "orgName": "金融地产事业部", "description": "", "sort": 100},
            { "sysOrgId": "d1b0b243-870d-4c7d-8bff-a1511eb6fef5", "parentOrgId": "a9955f8c-cfdd-4f61-97a8-55bd9efe1306", "level": 2, "orgName": "综合应用部", "description": "", "sort": 200},
            { "sysOrgId": "2d108446-e44f-4baa-953f-99457152c4cd", "parentOrgId": "a9955f8c-cfdd-4f61-97a8-55bd9efe1306", "level": 2, "orgName": "资产监管事业部", "description": "", "sort": 300},
            { "sysOrgId": "28aecd9e-4dca-4b10-9999-e7ef3579c0f1", "parentOrgId": "a9955f8c-cfdd-4f61-97a8-55bd9efe1306", "level": 2, "orgName": "市场部", "description": "", "sort": 400},
            { "sysOrgId": "29810737-abd3-4f62-8892-3bb90b18caac", "parentOrgId": "a9955f8c-cfdd-4f61-97a8-55bd9efe1306", "level": 2, "orgName": "投资顾问", "description": "", "sort": 500},
            { "sysOrgId": "1e58c1e9-804a-4144-8b9b-31d31f7f54bc", "parentOrgId": "a9955f8c-cfdd-4f61-97a8-55bd9efe1306", "level": 2, "orgName": "行政", "description": "", "sort": 700},
            { "sysOrgId": "5f449327-6134-473f-b1e6-a2c53da8772f", "parentOrgId": "a9955f8c-cfdd-4f61-97a8-55bd9efe1306", "level": 2, "orgName": "财务", "description": "", "sort": 100},
            { "sysOrgId": "284ab9fd-6bac-435a-9f80-bf3cc690ff0c", "parentOrgId": "d1b0b243-870d-4c7d-8bff-a1511eb6fef5", "level": 3, "orgName": "IT开发组", "description": "", "sort": 200},
            { "sysOrgId": "a2c66161-c8b8-4f95-80fc-2142d506f521", "parentOrgId": "d1b0b243-870d-4c7d-8bff-a1511eb6fef5", "level": 3, "orgName": "数据采集组", "description": "", "sort": 300},
            { "sysOrgId": "a093e4c9-05c1-41b1-a967-fa54a9a04a70", "parentOrgId": "d1b0b243-870d-4c7d-8bff-a1511eb6fef5", "level": 3, "orgName": "运维组", "description": "", "sort": 400}
        ],
        //获取分页数据接口
        me.GetSysOrgPage();
        //获取组织机构数据
        me.GetSysOrgTreeByRule();
        //添加组织机构
        me.AddSysOrg();
        //编辑组织机构
        me.EditSysOrg();
        //删除组织机构
        me.DeleteSysOrg();
    },

    //获取分页数据
    GetSysOrgPage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysorg/GetSysOrgPage",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    },

    //获取组织机构数据
    GetSysOrgTreeByRule: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "~/api/systemmanage/sysorg/GetSysOrgTreeByRule",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData),
                data=Ext.decode(requestData.Data);
                responseData = me.getTreeData(me.dataSource, "sysOrgId", "parentOrgId",data.sysOrgId);
                return responseData;
            }
        })
    },

    //添加组织机构数据
    AddSysOrg: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysorg/AddSysOrg",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData();
                me.dataSource.unshift(Ext.decode(requestData.Data));
                responseData.Message = "保存成功";
                return responseData;
            }
        })
    },

    //编辑组织机构数据
    EditSysOrg: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysorg/EditSysOrg",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData(), data;
                data = Ext.decode(requestData.Data);
                for (var i = 0; i < me.dataSource.length; i++) {
                    if (me.dataSource[i].sysOrgId == data.sysOrgId) {
                        Ext.apply(me.dataSource[i], data);
                        break;
                    }
                }
                return responseData;
            }
        })
    },

    //删除组织机构数据
    DeleteSysOrg: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysorg/DeleteSysOrg",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData(), data;
                data = Ext.decode(requestData.Data);
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < me.dataSource.length; j++) {
                        if (me.dataSource[j].sysOrgId == data[i]) {
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
