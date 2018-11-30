Ext.define("App.ux.grid.GridPanel", {
    extend: 'Ext.grid.Panel',
    pagination: true,
    initComponent: function () {
        var me; me = this;
        me.initpagination();
        me.initautoload();
        me.callParent();
    },
    privates: {
        /**
        * 初始化分页控件
        * @param pagination为true启用
        * 
        */
        initpagination: function () {
            var me = this;
            if (me.pagination) {
                me.bbar = {
                    xtype: 'pagingtoolbar',
                    displayInfo: true,
                    plugins: {
                        'ux-progressbarpager': true
                    }
                }
            };
        },

        /**
        * 初始化加载
        * 
        */
        initautoload: function () {
            var me = this, isload = me.autoLoad;
            if (isload) {
                me.autoLoad = false;
            }
            Ext.defer(function () {
                if (me.store != null) {
                    if (Ext.isFunction(me.getParams)) {
                        App.Ajax.setQueryItems(me.store, me.getParams());
                        me.store.pagination = me.pagination;
                    }
                    if (isload) {
                        me.store.loadPage(1);
                    }
                }
            }, 200);
        }
    }
})