Ext.define("App.view.systemmanage.sysuser.SysUserController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysuser',

    //新增
    onAdd: function () {
        var window, me = this, view = me.getView();
        window = Ext.create({
            title:"新增用户",
            xtype: "sysuseredit",
            renderTo:view.getEl()
        });
        window.show();
    }
})