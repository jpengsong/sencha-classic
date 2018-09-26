Ext.define("App.model.main.Navigation", {
    extend: "Ext.data.Model",
    fields: [
        { name: 'id', type: 'string' },
        { name: 'parentid', type: 'string' },
        { name: 'text', type: 'string' },
        { name: 'iconCls', type: 'string' },
        { name: 'xtype', type: 'string' },
        { name: 'routeId', type: 'string' },
        { name: 'Sort', type: 'int' },
    ],
    idProperty: 'id'
})