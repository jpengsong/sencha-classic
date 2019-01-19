Ext.define("App.model.systemmanage.SysMenuButton", {
    extend: "App.model.BaseModel",
    identifier: "uuid",
    fields: [
        { name: 'SysMenuButtonId', type: 'string' },
        { name: 'MenuId', type: 'string' },
        { name: 'MenuName', type: 'string' },
        { name: 'btnCode', type: 'string' },
        { name: 'btnName', type: 'string' },
        { name: 'Description', type: 'string' },
        { name: 'Order', type: 'int' },
        { name: 'IsEnable', type: 'int' },
        { name: 'isDel', type: 'int' },
        { name: 'CreateUserId', type: 'string' },
        { name: 'CreateUserName', type: 'string' },
        { name: 'CreateDate', type: 'date' },
        { name: 'ModifyUserId', type: 'string' },
        { name: 'ModifyUserName', type: 'string' },
        { name: 'ModifyDate', type: 'date' }
    ],
    idProperty: 'SysMenuButtonId'
})