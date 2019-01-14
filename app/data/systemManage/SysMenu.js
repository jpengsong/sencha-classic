Ext.define('App.data.systemmanage.SysMenu', {
    extend: "App.data.Simulated",
    init: function () {
        var me = this;
        me.dataSource = [
            { "SysMenuId": "2ee4b173-4e09-44db-8550-23d54392077e", "ParentId": "", "XType": "", "RouteId": "", "MenuName": "页面", "Order": 0, "Description": "", "IconCls": "x-fa fa-tags", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "4fd54f9d-34fd-46a7-81a5-bdf0cbb69339", "ParentId": "", "XType": "", "RouteId": "", "MenuName": "授权费用", "Order": 6, "Description": "", "IconCls": "x-fa fa-usd", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "a562d8b2-2990-4595-a9eb-04d0c8665710", "ParentId": "", "XType": "", "RouteId": "", "MenuName": "集成插件", "Order": 1, "Description": "", "IconCls": "x-fa fa-cogs", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "55291f54-5ff6-4521-836c-492e099cf426", "ParentId": "", "XType": "", "RouteId": "", "MenuName": "封装详情", "Order": 2, "Description": "", "IconCls": "x-fa fa-paper-plane-o", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "186ffc34-1bc1-408c-a8d2-01f5a4499315", "ParentId": "", "XType": "", "RouteId": "", "MenuName": "主题", "Order": 3, "Description": "", "IconCls": "x-fa fa-tv", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "7bb5e251-e105-4538-9979-eb79cbbc35de", "ParentId": "", "XType": "", "RouteId": "", "MenuName": "Sencha Cmd", "Order": 5, "Description": "", "IconCls": "x-fa fa-plug", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "84a758b5-179b-4893-8706-483167a2f250", "ParentId": "", "XType": "", "RouteId": "", "MenuName": "版本迭代", "Order": 0, "Description": "", "IconCls": "x-fa fa-envira", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "b729e75c-518d-446e-b34b-d7b2f811fc1d", "ParentId": "", "XType": "", "RouteId": "", "MenuName": "开发注意事项", "Order": 0, "Description": "", "IconCls": "x-fa fa-warning", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "f34dd1b5-b570-4d63-8485-ac6ec3602c8f", "ParentId": "b729e75c-518d-446e-b34b-d7b2f811fc1d", "XType": "", "RouteId": "", "MenuName": "ExtJS学习路线", "Order": 0, "Description": "", "IconCls": "x-fa fa-line-chart", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "33167e29-8f7c-464b-a1d8-ff7e26d9d25f", "ParentId": "b729e75c-518d-446e-b34b-d7b2f811fc1d", "XType": "", "RouteId": "", "MenuName": "命名规范", "Order": 0, "Description": "", "IconCls": "x-fa fa-tag", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "3ea653dd-6eec-46ae-a12b-1c7cd42e7c4a", "ParentId": "b729e75c-518d-446e-b34b-d7b2f811fc1d", "XType": "", "RouteId": "", "MenuName": "性能优化", "Order": 0, "Description": "", "IconCls": "x-fa fa-tag", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "ParentId": "", "MenuCode": "SystemManage", "MenuName": "系统管理", "Order": 7, "Description": "", "IconCls": "x-fa fa-cog", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "699d11e4-d4c4-4cdf-b1bc-8d92ddf70344", "ParentId": "2ee4b173-4e09-44db-8550-23d54392077e", "XType": "", "RouteId": "", "MenuName": "空白页", "Order": 1, "Description": "", "IconCls": "x-fa fa-tag", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "b0e23827-a633-4edc-95cd-971fdfeed847", "ParentId": "2ee4b173-4e09-44db-8550-23d54392077e", "XType": "", "RouteId": "", "MenuName": "page404", "Order": 2, "Description": "", "IconCls": "x-fa fa-tag", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "457063da-0b14-4c7f-bb12-a0a8e20d90ee", "ParentId": "2ee4b173-4e09-44db-8550-23d54392077e", "XType": "", "RouteId": "", "MenuName": "page500", "Order": 3, "Description": "", "IconCls": "x-fa fa-tag", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "a7d00cf0-741b-44af-b90b-395698d64bc9", "ParentId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "XType": "sysuser", "RouteId": "sysuser", "MenuName": "用户管理", "Order": 1, "Description": "", "IconCls": "x-fa fa-user-o", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "a176b70f-4ba9-45b5-b021-c44b4215be93", "ParentId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "XType": "sysorg", "RouteId": "", "MenuName": "组织机构", "Order": 2, "Description": "", "IconCls": "x-fa fa-tree", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "577d5ee5-3375-4795-a41e-037e52c0f4a3", "ParentId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "XType": "sysrole", "RouteId": "sysrole", "MenuName": "角色管理", "Order": 3, "Description": "", "IconCls": "x-fa fa-users", "IsEnable": 1, "isDel": 0 },
            { "SysMenuId": "04b631a8-3e41-4382-9e43-f5aeaddb338d", "ParentId": "f0474f1f-5cf7-413d-9aec-d4c91ae55b9f", "XType": "sysmenu", "RouteId": "sysmenu", "MenuName": "菜单管理", "Order": 4, "Description": "", "IconCls": "x-fa fa-th-list", "IsEnable": 1, "isDel": 0 }
        ];
        me.GetSysMenuPage();
        me.GetSysMenuByRule();
        me.GetSysMenuButtonTreeDetail();
        me.AddSysMenu();
        me.EditSysMenu();
        me.DeleteSysMenu();

    },

    //获取分页数据
    GetSysMenuPage: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/SystemManage/SysMenu/GetSysMenuPage",
            getData: function (ctx) {
                var requestData = Ext.decode(ctx.params.RequestData), condition = me.getCondition(requestData),
                    responseData = me.SqlQuery(condition);
                return responseData;
            }
        })
    },

    //获取数据
    GetSysMenuByRule: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/SystemManage/SysMenu/GetSysMenuByRule",
            getData: function (ctx) {
                return me.SqlQuery(null);
            }
        })
    },

    //获取菜单按钮树节点
    GetSysMenuButtonTreeDetail: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            url: "~/api/SystemManage/SysMenu/GetSysMenuButtonTreeDetail",
            getData: function (ctx) {
                var menuBtnList = App.SimulateDB.Get("SysMenuButton"),list=[],responseData =  me.ResponseData();
                for(var i =0;i<me.dataSource.length;i++){
                    list.push({
                        Id:me.dataSource[i]["SysMenuId"],
                        ParentId:me.dataSource[i]["ParentId"],
                        Code:"",
                        Name:me.dataSource[i]["MenuName"],
                        XType:me.dataSource[i]["XType"],
                        RouteId:me.dataSource[i]["RouteId"],
                        Description:me.dataSource[i]["Description"],
                        Order:me.dataSource[i]["Order"],
                        IsEnable:me.dataSource[i]["IsEnable"],
                        IconCls:me.dataSource[i]["IconCls"],
                        Type:"0"
                    })
                }
                for(var i =0;i<menuBtnList.length;i++){
                    list.push({
                        Id:menuBtnList[i]["SysMenuButtonId"],
                        ParentId:menuBtnList[i]["MenuId"],
                        Code:menuBtnList[i]["btnCode"],
                        Name:menuBtnList[i]["btnName"],
                        Description:me.dataSource[i]["Description"],
                        Order:menuBtnList[i]["Order"],
                        XType:"",
                        RouteId:"",
                        IsEnable:menuBtnList[i]["IsEnable"],
                        IconCls:"",
                        Type:"1"
                    })
                }
                responseData.Data.List = list;
                return responseData;
            }
        })
    },

    //添加菜单
    AddSysMenu: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/SystemManage/SysMenu/AddSysMenu",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData(),data=Ext.decode(requestData.Data);
                me.dataSource.unshift(data);
                var model={
                    Id:data["SysMenuId"],
                    ParentId:data["ParentId"],
                    Code:data["MenuCode"],
                    Name:data["MenuName"],
                    XType:data["XType"],
                    RouteId:data["RouteId"],
                    Description:data["Description"],
                    Order:data["Order"],
                    IsEnable:data["IsEnable"],
                    IconCls:data["IconCls"],
                    Type:"0"
                }
                responseData.Data =Ext.encode(model);
                return responseData;
            }
        })
    },

    //编辑菜单
    EditSysMenu: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/SystemManage/SysMenu/EditSysMenu",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData(), data;
                data = Ext.decode(requestData.Data);
                for (var i = 0; i < me.dataSource.length; i++) {
                    if (me.dataSource[i].SysMenuId == data.SysMenuId) {
                        Ext.apply(me.dataSource[i], data);
                        break;
                    }
                }
                var model={
                    Id:data["SysMenuId"],
                    ParentId:data["ParentId"],
                    Code:data["MenuCode"],
                    Name:data["MenuName"],
                    XType:data["XType"],
                    RouteId:data["RouteId"],
                    Description:data["Description"],
                    Order:data["Order"],
                    IsEnable:data["IsEnable"],
                    IconCls:data["IconCls"],
                    Type:"0"
                }
                responseData.Data =Ext.encode(model);
                return responseData;
            }
        })
    },

    //删除菜单
    DeleteSysMenu: function () {
        var me = this;
        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "~/api/SystemManage/SysMenu/DeleteSysMenu",
            getData: function (ctx) {
                var requestData = me.requestData(ctx), responseData = me.ResponseData(), data;
                data = Ext.decode(requestData.Data);
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < me.dataSource.length; j++) {
                        if (me.dataSource[j].SysMenuId == data[i]) {
                            me.dataSource.splice(j, 1);
                            break;
                        }
                    }
                }
                return responseData;
            }
        })
    }
})
