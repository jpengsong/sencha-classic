/**
 * 模拟菜单角色数据源和菜单角色接口
 * 
 */
Ext.define('App.data.systemmanage.SysMenuRole', {
    extend: "App.data.Simulated",
    
    Init: function () {
        var me = this;
        me.dataSource = [
            { "SysMenuRoleId": "86b5d730-def6-44ea-a96f-5efa90a24fe3", "MenuId": "84a758b5-179b-4893-8706-483167a2f250", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "1a7fb08c-b247-4d5b-8f1c-5cc38c0a7416", "MenuId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "4706ab90-3e00-431c-95bf-f6ec08896d4b", "MenuId": "a7d00cf0-741b-44af-b90b-395698d64bc9", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "a0843d46-e3be-4857-8d4e-fbc62587909c", "MenuId": "a176b70f-4ba9-45b5-b021-c44b4215be93", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "ac228172-735d-4f44-aaf6-56e80a714d6e", "MenuId": "577d5ee5-3375-4795-a41e-037e52c0f4a3", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "ab2a0dc9-31ee-4d97-a9db-e1538b0fe646", "MenuId": "04b631a8-3e41-4382-9e43-f5aeaddb338d", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 0, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "8bf0bd0d-a476-42d0-96bb-e2dc15df5d01", "MenuId": "33eca309-33ad-4f14-94a7-155b35fe8d1c", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "6b76a189-c353-4f3c-a813-8c208737fcbc", "MenuId": "cadf5e65-81d0-4155-bf36-8dca403e5328", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "b293a470-77fe-4d10-bb17-dff0217be02c", "MenuId": "f74b8164-57a5-47e4-a96b-cc7bf8b65361", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "bc32baeb-b0ef-4e1f-93bf-70f356eb5015", "MenuId": "64f1f216-1f1a-4dc9-9252-d66ffe657796", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "0f4c33d8-9242-4466-84c8-f6df08c3f5a5", "MenuId": "e25a0320-11b1-4a6f-ab11-ad23b3e92f87", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "1b36c69b-1712-450c-b32c-5898cf2ee33b", "MenuId": "ae866bdb-24de-42c1-ad11-09bc537e08d3", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "93143ef9-f0c0-4691-ab6e-34e93a2a7358", "MenuId": "2b0caca1-1e38-429e-a63b-44e8be05b73f", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "6a1df656-b2c9-42c0-99d6-079a7ced70e3", "MenuId": "23ba4611-f3ee-4131-aa15-9c36a6bcca6d", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "822677d6-9c18-48f7-a9b8-f0f38acd1318", "MenuId": "7d7db0d5-e78b-4430-99b5-5d359a78cc9f", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "c5fc3f70-79e3-44d9-880b-ddc49eb7f540", "MenuId": "06ae0200-d625-4ae4-8655-89632a366e52", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "0f19c956-2dad-4766-8937-c183876fa942", "MenuId": "62e9a489-4c2d-40fa-9cd9-e4e8399dd18b", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "98b9259a-ed78-4e3e-bd61-d04c0827cae5", "MenuId": "ee9775f9-57b5-4831-866d-5378d4f1a222", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" },
            { "SysMenuRoleId": "73712c73-ac3d-4659-b692-2c13cb759727", "MenuId": "291548e6-5197-4a7a-99db-e2346c9666d4", "RoleId": "2d5d5db2-c08e-4ef9-b58f-3ef1d85eadf9", "Type": 1, "CreateUserId": "", "CreateUserName": "", "createDate": "" }
        ];
        me.GetSysMenuRoleByRule();
        me.AddSysMenuRole();
    },

    //获取某一角色权限
    GetSysMenuRoleByRule: function () {
        var me = this,data={};
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "/api/SystemManage/SysMenuRole/GetSysMenuRoleByRule",
            getData: function (ctx) {
                var data = me.RequestData(ctx).Data,
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
                data.List=list;
                return data;
            }
        })
    },

    //添加角色权限
    AddSysMenuRole: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "/api/SystemManage/SysMenuRole/AddSysMenuRole",
            getData: function (ctx) {
                var data = me.RequestData(ctx).Data,
                    SysMenuRole = App.SimulateDB.Get("SysMenuRole");
                if (!Ext.isEmpty(data.RoleId)) {
                    for (var i = 0; i < SysMenuRole.length; i++) {
                        if (SysMenuRole[i].RoleId == data.RoleId) {
                            SysMenuRole.splice(i, 1);
                            i -= 1;
                        }
                    }
                    for (var i = 0; i < data.List.length; i++) {
                        SysMenuRole.push(data.List[i]);
                    }
                }
                return 1;
            }
        })
    }
})
