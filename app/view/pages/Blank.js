Ext.define('App.view.pages.Blank', {
    extend: 'Ext.panel.Panel',
    xtype: 'pageblank',
    anchor: '100% -1',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    items: [
        {
            xtype: 'box',
            cls: 'blank-page-container',
            html: '<div class=\'fa-outer-class\'><span class=\'x-fa fa-clock-o\'></span></div><h1>该页面正在建设中!</h1><span class=\'blank-page-text\'>请耐心等待</span>'
        }
    ]
});

