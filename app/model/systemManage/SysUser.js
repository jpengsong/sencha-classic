Ext.define("App.model.systemManage.SysUser", {
    extend: "App.model.BaseModel",
    fields: [
        { name: 'sysUserId', type: 'int' },
        { name: 'orgId', type: 'string' },
        { name: 'userName', type: 'string' },
        { name: 'loginName', type: 'string' },
        { name: 'loginPassWord', type: 'string' },
        { name: 'mobile', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'isEdit', type: 'int' },
        { name: 'isEnable', type: 'int' },
        { name: 'isDel', type: 'int' },
        { name: 'createUserId', type: 'string' },
        { name: 'createUserName', type: 'string' },
        { name: 'createDate', type: 'date' },
        { name: 'modifyUserId', type: 'string' },
        { name: 'modifyUserName', type: 'string' },
        { name: 'modifyDate', type: 'date' },
    ],
    idProperty: 'sysUserId'
})