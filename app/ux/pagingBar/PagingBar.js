Ext.define('ux.pagingBar.PagingBar', {
    extend: 'Ext.toolbar.Paging',
    pageSize: null,
    currentPage: 1,
    initComponent: function () {
        var me = this;
        me.callParent();
    },
    getPageData: function () {
        var me = this;
        var store = this.store,
            totalCount = store.getTotalCount(),
            pageCount = Math.ceil(totalCount / me.scope.pageSize),
            toRecord = Math.min(store.currentPage * me.scope.pageSize, totalCount);
        return {
            total: totalCount,
            currentPage: store.currentPage,
            pageCount: Ext.Number.isFinite(pageCount) ? pageCount : 1,
            fromRecord: ((store.currentPage - 1) * me.scope.pageSize) + 1,
            toRecord: toRecord || totalCount
        };
    },
    getPagingItems: function () {
        var me = this,
            inputListeners = {
                scope: me,
                blur: me.onPagingBlur
            };
        inputListeners[Ext.supports.SpecialKeyDownRepeat ? 'keydown' : 'keypress'] = me.onPagingKeyDown;
        return [
            {
                itemId: 'first',
                tooltip: me.firstText,
                overflowText: me.firstText,
                iconCls: Ext.baseCSSPrefix + 'tbar-page-first',
                disabled: true,
                handler: me.moveFirst,
                scope: me
            },
            {
                itemId: 'prev',
                tooltip: me.prevText,
                overflowText: me.prevText,
                iconCls: Ext.baseCSSPrefix + 'tbar-page-prev',
                disabled: true,
                handler: me.movePrevious,
                scope: me
            },
            '-',
            me.beforePageText,
            {
                xtype: 'numberfield',
                itemId: 'inputItem',
                name: 'inputItem',
                cls: Ext.baseCSSPrefix + 'tbar-page-number',
                allowDecimals: false,
                minValue: 1,
                hideTrigger: true,
                enableKeyEvents: true,
                keyNavEnabled: false,
                selectOnFocus: true,
                submitValue: false,
                // mark it as not a field so the form will not catch it when getting fields
                isFormField: false,
                width: me.inputItemWidth,
                margin: '-1 2 3 2',
                listeners: inputListeners
            },
            {
                xtype: 'tbtext',
                itemId: 'afterTextItem',
                html: Ext.String.format(me.afterPageText, 1)
            },
            '-',
            {
                itemId: 'next',
                tooltip: me.nextText,
                overflowText: me.nextText,
                iconCls: Ext.baseCSSPrefix + 'tbar-page-next',
                disabled: true,
                handler: me.moveNext,
                scope: me
            },
            {
                itemId: 'last',
                tooltip: me.lastText,
                overflowText: me.lastText,
                iconCls: Ext.baseCSSPrefix + 'tbar-page-last',
                disabled: true,
                handler: me.moveLast,
                scope: me
            },
            '-',
            {
                itemId: 'refresh',
                tooltip: me.refreshText,
                overflowText: me.refreshText,
                iconCls: Ext.baseCSSPrefix + 'tbar-loading',
                disabled: me.store.isLoading(),
                handler: me.doRefresh,
                scope: me
            }
        ];
    }
});