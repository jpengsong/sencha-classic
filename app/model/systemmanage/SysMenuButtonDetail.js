Ext.define("App.model.systemmanage.SysMenuButtonDetail", {
    extend: "App.model.BaseModel",
    identifier: "uuid",
    fields: [
        { name: 'Id', type: 'string' },
        { name: 'ParentId', type: 'string' },
        { name: 'ParentName', type: 'string' },
        { name: 'Code', type: 'string' },
        { name: 'Name', type: 'string' },
        { name: 'Description', type: 'string' },
        { name: 'Order', type: 'string' },
        { name: 'ViewType', type: 'string' },
        { name: 'PageType', type: 'string'},
        { name: 'IsEnable', type: 'int' },
        { name: 'IconCls', type: 'string' },
        { name: 'Type', type: 'int' }
    ],
    idProperty: 'Id'
})