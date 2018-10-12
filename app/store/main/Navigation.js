Ext.define('app.store.main.Navigation', {
    autoLoad: false,
    fields: ['type', 'text'],
    alias: 'store.main.Navigation',
    extend: 'Ext.data.TreeStore',
    model: 'app.model.main.Navigation',
    defaultRootId:"records",
    proxy: {
        type: 'ajax',
        actionMethods: { read: 'get' },
        timeout: 60000,
        url:'app/data/main/Navigation.json',
        reader: Ext.create('ux.framework.Reader', { type: "ComboStore" })
    }
});
