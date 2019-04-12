Ext.define('App.store.main.Plist', {
    extend: 'Ext.data.Store',
    alias: 'store.main.plist',
    fields: ["ViewType"],
    data: [
        { ViewType: "login" },
        { ViewType: "home" },
        { ViewType: "page404" },
        { ViewType: "page500" },
        { ViewType: "lockscreen" }
    ]
});
