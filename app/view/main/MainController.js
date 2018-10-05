Ext.define("app.view.main.MainController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    //触发容器组件
    onAfterender: function () {
        var me = this; refs = me.getReferences(); var viewModel = me.getViewModel();
    },

    //主题切换
    onThemeChange: function () {
        var me, profile; me = this; refs = me.getReferences(); viewModel = me.getViewModel();
        profile = arguments[0].theme;
        ux.Cookie.SetCookie("profile", profile);
        window.location = window.location;
    },

    //菜单位置切换
    onNavigationlayoutChange: function () {

    },

    //菜单点击事件
    onNavigationChange: function () {
        alert();
    }
})