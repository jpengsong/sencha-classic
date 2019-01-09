Ext.define('App.store.comm.IsEnableStore', {
    extend: 'Ext.data.Store',
    alias: 'store.comm.isenablestore',
    fields: ['name', 'value'],
    data: [
        { name: '是', value: '1' },
        { name: '否', value: '0' }
    ]
});