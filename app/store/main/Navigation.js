Ext.define('app.store.main.Navigation', {
    autoLoad: true,
    alias: 'store.main.Navigation',
    extend: 'Ext.data.Store',
    model: 'app.model.main.Navigation',
    proxy:ux.Ajax.proxy({
        type: 'Ajax',
        method:"Get",
        url:'resources/data/main/Navigation.json',
        dataType:config.GridStore
    })
});
