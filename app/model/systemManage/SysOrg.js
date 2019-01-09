Ext.define("App.model.systemmanage.SysOrg", {
    extend: "App.model.BaseModel",
    identifier: "uuid",
    fields: [
        { name: 'sysOrgId', type: 'string' },
        { name: 'parentOrgId', type: 'string' },
        { name: 'parentOrgName', type: 'string' },
        { name: 'orgName', type: 'string' },
        { name: 'orgCode', type: 'string' },
        { name: 'level', type: 'int' },
        { name: 'description', type: 'string' },
        { name: 'sort', type: 'int' },
        { name: 'isDel', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'createUserId', type: 'string' },
        { name: 'createUserName', type: 'string' },
        { name: 'createDate', type: 'date' },
        { name: 'modifyUserId', type: 'string' },
        { name: 'modifyUserName', type: 'string' },
        { name: 'modifyDate', type: 'date' }
    ],
    idProperty: 'sysOrgId'
})