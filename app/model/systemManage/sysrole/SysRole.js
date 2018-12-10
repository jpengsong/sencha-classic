Ext.define("App.model.systemmanage.sysrole.SysRole", {
    extend: "App.model.BaseModel",
    fields: [
        { name: 'sysRoleId', type: 'string' },
        { name: 'RoleCode', type: 'string' },
        { name: 'RoleName', type: 'string' },
        { name: 'RoleDescription', type: 'string' },
        { name: 'isEnable', type: 'int' },
        { name: 'isDel', type: 'int' },
        { name: 'createUserId', type: 'string' },
        { name: 'createUserName', type: 'string' },
        { name: 'createDate', type: 'date' },
        { name: 'modifyUserId', type: 'string' },
        { name: 'modifyUserName', type: 'string' },
        { name: 'modifyDate', type: 'date' }
    ],
    idProperty: 'sysRoleId'
})