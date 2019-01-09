Ext.define("App.model.systemmanage.SysUser", {
    extend: "App.model.BaseModel",
    identifier: "uuid",
    fields: [
        { name: 'sysUserId', type: 'string' },
        { name: 'orgId', type: 'string' },
        { name: 'userName', type: 'string' },
        { name: 'loginName', type: 'string' },
        { name: 'loginPassWord', type: 'string' },
        { name: 'mobile', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'isEnable', type: 'int', defaultValue: 0 },
        { name: 'isDel', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'createUserId', type: 'string' },
        { name: 'createUserName', type: 'string' },
        { name: 'createDate', type: 'date' },
        { name: 'modifyUserId', type: 'string' },
        { name: 'modifyUserName', type: 'string' },
        { name: 'modifyDate', type: 'date' }
    ],
    idProperty: 'sysUserId'
})