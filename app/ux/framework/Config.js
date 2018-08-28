Ext.define('ux.framework.Config', {
    alternateClassName: ['Config'],
    statics: {
        StoreType: {
            GridStore: "GridStore",
            TreeStore: "TreeStore",
            ComboStore: "TreeListStore",
            ComboStore: "ComboStore",
        },

        Toast: {
            Stack: 3,   //数量
            Warning: 'warning', //信息
            Info: 'info', //警告
            Error: 'error', //误差
            Success: 'success', //成功
        },

        RootSize: {
            RootTbarHeight: 60, //头部高度
            NavgationTreeWidth: 250, //左侧菜单宽度
            NavgationMenuHeight: 32,  //上侧菜单高度
            RootBbarHeight: 40 //底部高度
        },

        Guid: {
            Empty: "00000000-0000-0000-0000-000000000000"
        },

        ExceptionCode: {
            PC_0001: "PC_0001",//登录过期

            PC_0002: "PC_0002",//没有访问权限

            PC_0003: "PC_0003",//执行错误

            PC_0004: "PC_0004"//验证错误
        },

        ResponseDataType:
        {
            Json: 1,
            String: 2
        }
    }
})

