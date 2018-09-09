Ext.define('app.store.main.MenuLocation', {
    autoLoad: true,
    fields: ['type', 'text'],
    alias: 'store.main.MenuLocationStore',
    extend: 'Ext.data.Store',
    model: 'app.model.main.MenuLocation',
    proxy: {
        type: 'ajax',
        actionMethods: { read: 'get' },
        timeout: 60000,
        url:'resources/data/main/MenuLocation.json',
        reader: Ext.create('ux.framework.Reader', { type: config.ComboStore })
    }
});
