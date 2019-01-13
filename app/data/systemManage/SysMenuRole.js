Ext.define('App.data.systemmanage.SysMenuRole', {
    extend: "App.data.Simulated",
    init: function () {
        var me = this;
        me.dataSource = [
            { "SysMenRoleId": "86b5d730-def6-44ea-a96f-5efa90a24fe3", "MenuId": "84a758b5-179b-4893-8706-483167a2f250", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90",  "CreateUserId":"", "CreateUserName":"", "createDate": ""},
            { "SysMenRoleId": "1a7fb08c-b247-4d5b-8f1c-5cc38c0a7416", "MenuId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90",  "CreateUserId":"", "CreateUserName":"", "createDate": ""},
            { "SysMenRoleId": "4706ab90-3e00-431c-95bf-f6ec08896d4b", "MenuId": "b0e23827-a633-4edc-95cd-971fdfeed847", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90",  "CreateUserId":"", "CreateUserName":"", "createDate": ""},
            { "SysMenRoleId": "bedc1237-d4f5-4216-b7a4-e07697606319", "MenuId": "457063da-0b14-4c7f-bb12-a0a8e20d90ee", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90",  "CreateUserId":"", "CreateUserName":"", "createDate": ""},
            { "SysMenRoleId": "9591eda7-5454-4519-a961-f21b2e9cf69f", "MenuId": "4aeab063-da5e-408f-b467-b060e6a6dbf6", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90",  "CreateUserId":"", "CreateUserName":"", "createDate": ""}
        ];
        me.GetSysMenuRoleByRule();
    },

    //获取数据
    GetSysMenuRoleByRule: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "~/api/SystemManage/SysMenuRole/GetSysMenuRoleByRule",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                    responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    }
})
