
/**
 *  Tab页面
 */
Ext.define('App.ux.utility.Tab', {
    alternateClassName: ['App.Tab'],
    statics: {
        openPage: function (url, config) {
            var tabsMain, tab = null;
            tabsMain = Ext.getCmp("tabsMain");
            if (tabsMain.items.length == 0) {
                tab = Ext.create("App.view.main.Welcome", { title: "首页", iconCls: 'fa fa-home fa-1-5x' });
            } else {
                if (tabsMain.child('component[xtype=' + url + ']') == null) {
                    tab = Ext.create({ xtype: url, title: config.title, iconCls: config.icon, closable: true });
                }
            }
            if (!Ext.isEmpty(tab)) {
                tabsMain.add(tab);
                tabsMain.setActiveTab(tabsMain.items.length - 1);
            } else {
                tabsMain.setActiveTab(tabsMain.child('component[xtype=' + url + ']'));
            }
        }
    }
})
