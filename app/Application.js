/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    requires: [
        'Ext.Img',
        'Ext.form.Label',
        'Ext.list.TreeItem',
        'Ext.layout.container.Table',
        'Ext.layout.container.Border',
        'Ext.layout.container.Column',
        'Ext.data.identifier.Uuid',
        'Ext.dom.Query'
    ],
    name: 'App',
    init : function() {
        Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
            expires : new Date(Ext.Date.now() + (1000*60*60*24*90)) // 90 days
        }));
    },
    quickTips: true
});
