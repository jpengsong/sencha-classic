Ext.define('app.store.main.Plist', {
    extend: 'Ext.data.Store',
    alias: 'store.main.Plist',
    fields: ["xtype"],
    data: [
        { xtype: "login" },
        { xtype: "home" }
    ]
});
