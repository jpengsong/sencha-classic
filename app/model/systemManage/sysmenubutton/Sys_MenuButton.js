Ext.define("App.model.systemmanage.sysmenu.Sys_MenuButton", {
    extend: "App.model.BaseModel",
    identifier: "uuid",
    fields: [
        { name: 'sysMenuId', type: 'string' },
        { name: 'parentId', type: 'string' },
        { name: 'MenuCode', type: 'string' },
        { name: 'MenuName', type: 'string' },
        { name: 'MenuOrder', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'IconCls', type: 'string' },
        { name: 'xtype', type: 'string' },
        { name: 'routeId', type: 'string' },
        { name: 'isEnable', type: 'int' },
        { name: 'isDel', type: 'int' },
        { name: 'createUserId', type: 'string' },
        { name: 'createUserName', type: 'string' },
        { name: 'createDate', type: 'date' },
        { name: 'modifyUserId', type: 'string' },
        { name: 'modifyUserName', type: 'string' },
        { name: 'modifyDate', type: 'date' }
    ],
    idProperty: 'sysMenuId'
})