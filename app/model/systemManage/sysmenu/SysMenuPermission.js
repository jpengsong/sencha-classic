Ext.define("App.model.systemmanage.sysmenu.SysMenuPermission", {
    extend: "App.model.BaseModel",
    identifier: "uuid",
    fields: [
        { name: 'sysMenuPermissionId', type: 'string' },
        { name: 'menuId', type: 'string' },
        { name: 'roleId', type: 'string' },
        { name: 'createUserId', type: 'string' },
        { name: 'createUserName', type: 'string' },
        { name: 'createDate', type: 'date' }
    ],
    idProperty: 'sysMenuPermissionId'
})