//视图
Ext.define('App.view.pages.Error404', {
    extend: 'App.ux.page.Dialog',
    xtype: 'page404',
    items: [{
        xtype: 'container',
        width: 400,
        cls: 'ux-page-dialog-inner-container',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [{
            xtype: 'label',
            cls: 'ux-page-dialog-top-text',
            text: '404'
        },
        {
            xtype: 'label',
            cls: 'ux-page-dialog-desc',
            html: '<div>找不到该页面!</div><div>返回 <a href="#view.main"> 首页 </a></div>'
        },
        {
            xtype: 'tbspacer',
            flex: 1
        }]
    }]
});