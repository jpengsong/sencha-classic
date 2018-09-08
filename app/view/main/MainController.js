Ext.define("app.view.main.MainController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    //触发容器组件
    onAfterender: function () {
        var me = this; refs = me.getReferences(); var viewModel = me.getViewModel();
        var profile = ux.Cookie.GetCookie("profile");
        if (!Ext.isEmpty(profile)) {
            setTimeout(function(){
                refs.headerToolbar.el.dom.style.background = viewModel.getData().backColor[profile];
                var profilebtn = (profile + "btn");
                refs[profilebtn].setText(viewModel.getData().themeText);
                refs.mainSetupButton.setUI(profilebtn); refs.logout.setUI(profilebtn); refs.news.setUI(profilebtn);
            },200);
        }
    },

    //设置渲染后创建悬浮窗口
    onAfterrenderSetup: function () {
        var me = this; refs = me.getReferences();
        Ext.create({ xtype: "mainSetup" });
    },

    //点击设置弹出悬浮窗口
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
        var me, res, btns, theme, profile, viewModel; me = this; refs = me.getReferences(); viewModel = me.getViewModel();
        // btns = Ext.ComponentQuery.query("button[text='" + viewModel.getData().themeText + "']", refs.mainSetupToolTip);
        // theme = btns[0].theme;
        profile = arguments[0].theme;
        //if (theme != profile) {
        ux.Cookie.SetCookie("profile", profile);
        window.location = window.location;
        //}
    }
})