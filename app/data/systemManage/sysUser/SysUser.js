Ext.define('App.data.systemmanage.sysuser.SysUser', {
    extend: "App.data.Simulated",
    dataSource:  [],
    init: function () {
        var me = this;
        //数据源
        me.dataSource = [
            { "sysUserId": "d0a70e97-06dc-4a39-a3fc-a6ce347635eb", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "徐承平", "loginName": "xuchengping", "loginPassWord": "123456", "mobile": "18701540234", "email": "xuchengping@163.com", "isEnable": 1 },
            { "sysUserId": "50a3a764-bf5e-4704-aa47-8354633325b6", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "段阳焱", "loginName": "duanyangyan", "loginPassWord": "123456", "mobile": "18701540414", "email": "duanyangyan@163.com", "isEnable": 1 },
            { "sysUserId": "e415d214-2159-42b3-a50a-f8f407b061ef", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "郑承恩", "loginName": "zhengchengen", "loginPassWord": "123456", "mobile": "13021023376", "email": "zhengchengen@163.com", "isEnable": 0 },
            { "sysUserId": "407508b8-53ea-470f-b63f-6c043d7b2aee", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "芮敏学", "loginName": "ruiminxue", "loginPassWord": "123456", "mobile": "13021023852", "email": "ruiminxue@163.com", "isEnable": 1 },
            { "sysUserId": "048dd72e-c851-49eb-8c94-8f220a98a14b", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "东承德", "loginName": "dongchengde", "loginPassWord": "123456", "mobile": "13021025016", "email": "dongchengde@163.com", "isEnable": 0 },
            { "sysUserId": "54e69310-c148-46aa-91bb-1ec789c6d714", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "胡成天", "loginName": "huchengtian", "loginPassWord": "123456", "mobile": "13021025191", "email": "huchengtian@163.com", "isEnable": 1 },
            { "sysUserId": "69b6cebd-97a0-4653-91db-0ca264d37612", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "谢欣然", "loginName": "xiexinran", "loginPassWord": "123456", "mobile": "13331155934", "email": "xiexinran@163.com", "isEnable": 1 },
            { "sysUserId": "4beaf596-9da2-4260-b17b-6c055feb5e39", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "惠鸿信", "loginName": "huihongxin", "loginPassWord": "123456", "mobile": "13371633671", "email": "huihongxin@163.com", "isEnable": 1 },
            { "sysUserId": "ad26ade0-e73d-4004-8dc3-6ad1f48d0789", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "晁意蕴", "loginName": "chaoyiwen", "loginPassWord": "123456", "mobile": "13331176769", "email": "chaoyiwen@163.com", "isEnable": 1 },
            { "sysUserId": "fcc7ca4c-65c8-49dd-bc98-227a5fb15e88", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "陆文宣", "loginName": "luwenxuan", "loginPassWord": "123456", "mobile": "13021025126", "email": "luwenxuan@163.com", "isEnable": 1 },
            { "sysUserId": "5a67ebbf-ef38-4aa8-a0b1-d8befeb00e88", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "赵星洲", "loginName": "zhaoxingzhou", "loginPassWord": "123456", "mobile": "13021023836", "email": "zhaoxingzhou@163.com", "isEnable": 1 },
            { "sysUserId": "f7a6567a-feab-4ade-80ad-101a70feab2c", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "芮承允", "loginName": "ruichengyun", "loginPassWord": "123456", "mobile": "13021023852", "email": "ruichengyun@163.com", "isEnable": 1 },
            { "sysUserId": "4447e3f4-70dd-440c-8449-430e1cd16584", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "聂学林", "loginName": "niexuelin", "loginPassWord": "123456", "mobile": "13021025016", "email": "niexuelin@163.com", "isEnable": 1 },
            { "sysUserId": "3f5f4488-79cb-450a-8d20-19f54a04f4ba", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "薄茂学", "loginName": "bomaoxue", "loginPassWord": "123456", "mobile": "15311139513", "email": "bomaoxue@163.com", "isEnable": 1 },
            { "sysUserId": "49a6803d-7758-41bd-9c03-bebc52aafca0", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "盛兴学", "loginName": "shengxingxue", "loginPassWord": "123456", "mobile": "18911977995", "email": "shengxingxue@163.com", "isEnable": 1 },
            { "sysUserId": "87fa02b3-6c94-43fc-9b6c-988c49ba457a", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "鄂鸿哲", "loginName": "ehongzhe", "loginPassWord": "123456", "mobile": "18911977759", "email": "ehongzhe@163.com", "isEnable": 1 },
            { "sysUserId": "73ca9d58-c687-45fe-8d07-3eb067431eb9", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "曾苑博", "loginName": "zengyuanbo", "loginPassWord": "123456", "mobile": "18911973344", "email": "zengyuanbo@163.com", "isEnable": 1 },
            { "sysUserId": "b1ec37ba-4523-427f-820c-0f37b0d02d1d", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "寿成周", "loginName": "shouchengzhou", "loginPassWord": "123456", "mobile": "18911973344", "email": "shouchengzhou@163.com", "isEnable": 1 },
            { "sysUserId": "daa1703e-f951-4c66-8641-9948592bce47", "orgId": "864c43ab-1887-4c8e-b8a5-0f10eac43fe6", "userName": "闻安福", "loginName": "wenanfu", "loginPassWord": "123456", "mobile": "18911919391", "email": "wenanfu@163.com", "isEnable": 1 }
        ];
        //获取分页数据接口
        me.GetSysUserPage();
        //添加用户
        me.AddSysUser();
        //编辑用户
        me.EditSysUser();
        //删除用户
        me.DeleteSysUser();
    },

    //获取分页数据
    GetSysUserPage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysuser/GetSysUserPage",
            getData: function (ctx) {
                var requestData = me.requestData(ctx),
                    condition = me.getCondition(requestData);
                responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    },

    //添加用户数据
    AddSysUser: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysuser/AddSysUser",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData();
                me.dataSource.unshift(Ext.decode(requestData.Data));
                return responseData;
            }
        })
    },

    //编辑用户数据
    EditSysUser: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysuser/EditSysUser",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData(), data;
                data = Ext.decode(requestData.Data);
                for (var i = 0; i < me.dataSource.length; i++) {
                    if (me.dataSource[i].sysUserId == data.sysUserId) {
                        Ext.apply(me.dataSource[i], data);
                        break;
                    }
                }
                return responseData;
            }
        })
    },

    //删除用户数据
    DeleteSysUser: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/systemmanage/sysuser/DeleteSysUser",
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
