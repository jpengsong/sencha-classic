//视图
Ext.define('App.view.pages.Error404', {
    extend: 'App.view.pages.Base',
    xtype: 'page404',
    items: [{
        xtype: 'container',
        width: 400,
        cls: 'base-page-inner-container',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [{
            xtype: 'label',
            cls: 'base-page-top-text',
            text: '404'
        },
        {
            xtype: 'label',
            cls: 'base-page-desc',
            html: '<div>找不到该页面!</div><div>返回 <a href="#view.home"> 首页 </a></div>'
        },
        {
            xtype: 'tbspacer',
            flex: 1
        }]
    }]
});