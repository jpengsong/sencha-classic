Ext.define("app.view.main.MainController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    //触发容器组件
    onAfterender: function () {
        var me = this; refs = me.getReferences(); var viewModel = me.getViewModel();
        //修改其它组件主题
        var profile = ux.Cookie.GetCookie("profile");
        if (!Ext.isEmpty(profile)) {
            refs.headerToolbar.el.dom.style.background = viewModel.getData().backColor[profile];
            var profilebtn = (profile + "btn");
            refs[profilebtn].setText(viewModel.getData().themeText);
            refs.mainSetupButton.setUI(profilebtn); refs.logout.setUI(profilebtn); refs.news.setUI(profilebtn);
        }
        //初始化菜单列表数据
    },

    //Toobar 点击设置弹出悬浮窗口
    onClickSetup: function () {
        var me = this; refs = me.getReferences();
        if (refs.mainSetupToolTip.isHidden()) {
            refs.mainSetupToolTip.setTarget(refs.mainSetupButton.getId());
            refs.mainSetupToolTip.show();
        } else {
            refs.mainSetupToolTip.hide();
            refs.mainSetupToolTip.setTarget(false);
        }
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