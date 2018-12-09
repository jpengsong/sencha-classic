Ext.define("App.view.systemmanage.sysorg.SysOrgController", {
    extend: 'Ext.app.ViewController',
    alias: "controller.sysorg",

    //选择某一项
    onTreeSelect: function (store, record, index, eOpts) {
        var me = this, querypanel = me.getView().getQuery("query"), gridStore = me.getViewModel().getStore("gridstore");
        Ext.override(querypanel, {
            getQueryItems: function () {
                var queryItems = App.Page.getQueryItems(Ext.ComponentQuery.query("container[reference='searchcondition']", querypanel)[0]);
                queryItems.push({ key: "parentOrgId", Value: record.data.id, Method: " = ", Type: "String" });
                return queryItems;
            }
        });
        App.Ajax.setQueryItems(gridStore, querypanel.getQueryItems());
        gridStore.loadPage(1);
    }
})