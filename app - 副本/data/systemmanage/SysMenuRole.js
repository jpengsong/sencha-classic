Ext.define('App.data.systemmanage.SysMenuRole', {
    extend: "App.data.Simulated",
    init: function () {
        var me = this;
        me.dataSource = [
            { "SysMenRoleId": "86b5d730-def6-44ea-a96f-5efa90a24fe3", "MenuId": "84a758b5-179b-4893-8706-483167a2f250", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenRoleId": "1a7fb08c-b247-4d5b-8f1c-5cc38c0a7416", "MenuId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenRoleId": "4706ab90-3e00-431c-95bf-f6ec08896d4b", "MenuId": "a7d00cf0-741b-44af-b90b-395698d64bc9", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenRoleId": "73712c73-ac3d-4659-b692-2c13cb759727", "MenuId": "291548e6-5197-4a7a-99db-e2346c9666d4", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenRoleId": "98b9259a-ed78-4e3e-bd61-d04c0827cae5", "MenuId": "ee9775f9-57b5-4831-866d-5378d4f1a222", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenRoleId": "c5fc3f70-79e3-44d9-880b-ddc49eb7f540", "MenuId": "06ae0200-d625-4ae4-8655-89632a366e52", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenRoleId": "0f19c956-2dad-4766-8937-c183876fa942", "MenuId": "62e9a489-4c2d-40fa-9cd9-e4e8399dd18b", "RoleId": "5519da9e-ae64-40ad-b676-bbc724872c90", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" }
        ];
        me.GetSysMenuRoleByRule();
        me.AddSysMenuRole();
    },

    //获取某一角色权限
    GetSysMenuRoleByRule: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "~/api/SystemManage/SysMenuRole/GetSysMenuRoleByRule",
            getData: function (ctx) {
                var requestData = me.requestData(ctx),
                    responseData = me.ResponseData(),
                    data = Ext.decode(requestData.Data),
                    ids = [],
                    menuList = App.SimulateDB.Get("SysMenu"),
                    menuBtnList = App.SimulateDB.Get("SysMenuButton"),
                    list = [];


                for (var i = 0; i < me.dataSource.length; i++) {
                    if (me.dataSource[i].RoleId == data.SysRoleId) {
                        ids.push(me.dataSource[i].MenuId);
                    }
                }

                for (var i = 0; i < ids.length; i++) {
                    for (var j = 0; j < menuList.length; j++) {
                        if (ids[i] == menuList[j].SysMenuId) {
                            list.push({
                                Id: menuList[j]["SysMenuId"],
                                ParentId: menuList[j]["ParentId"],
                                Code: "",
                                Name: menuList[j]["MenuName"],
                                XType: menuList[j]["XType"],
                                RouteId: menuList[j]["RouteId"],
                                Description: menuList[j]["Description"],
                                Order: menuList[j]["Order"],
                                IsEnable: menuList[j]["IsEnable"],
                                IconCls: menuList[j]["IconCls"],
                                Type: "0"
                            })
                        }
                    }
                }

                for (var i = 0; i < ids.length; i++) {
                    for (var j = 0; j < menuBtnList.length; j++) {
                        if (ids[i] == menuBtnList[j].SysMenuButtonId) {
                            list.push({
                                Id: menuBtnList[j]["SysMenuButtonId"],
                                ParentId: menuBtnList[j]["MenuId"],
                                Code: menuBtnList[j]["btnCode"],
                                Name: menuBtnList[j]["btnName"],
                                Description: menuBtnList[j]["Description"],
                                Order: menuBtnList[j]["Order"],
                                XType: "",
                                RouteId: "",
                                IsEnable: menuBtnList[j]["IsEnable"],
                                IconCls: "",
                                Type: "1"
                            })
                        }
                    }
                }
                responseData.Data.List = list;
                return responseData;
            }
        })
    },

    //添加角色权限
    AddSysMenuRole: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "~/api/SystemManage/SysMenuRole/AddSysMenuRole",
            getData: function (ctx) {
                var requestData = me.requestData(ctx),
                    SysMenuRole = App.SimulateDB.Get("SysMenuRole"),
                    responseData = me.ResponseData(),
                    data = Ext.decode(requestData.Data);
                if (!Ext.isEmpty(data.RoleId)) {
                    for (var i = 0; i < SysMenuRole.length; i++) {
                        if (SysMenuRole[i].RoleId == data.RoleId) {
                            SysMenuRole.splice(i, 1);
                            i -= 1;
                        }
                    }
                    debugger;
                    for (var i = 0; i < data.List.length; i++) {
                        SysMenuRole.push(data.List[i]);
                    }
                }
                return responseData;
            }
        })
    }
})
