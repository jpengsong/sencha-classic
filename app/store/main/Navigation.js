Ext.define('app.store.main.Navigation', {
    autoLoad: true,
    alias: 'store.main.Navigation',
    extend: 'Ext.data.Store',
    model: 'app.model.main.Navigation',
    proxy: {
        type: 'ajax',
        actionMethods: { read: 'get' },
        timeout: 60000,
        url:'resources/data/main/Navigation.json',
        reader: Ext.create('ux.framework.Reader', { type: config.GridStore })
    }
});
