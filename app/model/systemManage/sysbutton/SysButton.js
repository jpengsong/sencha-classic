Ext.define("App.model.systemmanage.sysbutton.SysButton", {
    extend: "App.model.BaseModel",
    fields: [
        { name: 'sysButtonId', type: 'string' },
        { name: 'sysMenuId', type: 'string' },
        { name: 'btnCode', type: 'string' },
        { name: 'btnName', type: 'string' },
        { name: 'Description', type: 'string' },
        { name: 'IconCls', type: 'string' },
        { name: 'isEnable', type: 'int' },
        { name: 'isDel', type: 'int' },
        { name: 'createUserId', type: 'string' },
        { name: 'createUserName', type: 'string' },
        { name: 'createDate', type: 'date' },
        { name: 'modifyUserId', type: 'string' },
        { name: 'modifyUserName', type: 'string' },
        { name: 'modifyDate', type: 'date' }
    ],
    idProperty: 'sysButtonId'
})