Ext.define('app.store.main.Navigation', {
    autoLoad: true,
    alias: 'store.main.Navigation',
    extend: 'Ext.data.Store',
    model: 'app.model.main.Navigation',
    proxy:ux.Ajax.proxy({
        type: 'Json',
        method:"Get",
        url:'resources/data/main/Navigation.json',
        dataType:config.GridStore
    })
});
