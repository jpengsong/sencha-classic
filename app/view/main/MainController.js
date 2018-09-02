Ext.define("app.view.main.MainController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    //触发容器组件
    onAfterlayout: function () {
        var me = this; refs = me.getReferences(); var viewModel = me.getViewModel();
        ux.Ajax.request({
            url: "resources/data/main/MainSetup.json",
            method: "GET",
            type: "JSON",
            success: function (data) {
                refs[data.Data.theme].setText(viewModel.getData().themeText);
                refs.headerToolbar.el.dom.style.background = viewModel.getData().ui[data.Data.theme];
                refs.mainSetupButton.setUI(data.Data.theme); refs.logout.setUI(data.Data.theme); refs.news.setUI(data.Data.theme);
            }, error: function () {
                alert(2);
            }
        })
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
        var me, res, btns, currentTheme, theme, viewModel; me = this; refs = me.getReferences(); viewModel = me.getViewModel();
        btns = Ext.ComponentQuery.query("button[text='" + viewModel.getData().themeText + "']", refs.mainSetupToolTip);
        if (btns.length > 0) {
            currentTheme = btns[0].reference;
        }
        theme = arguments[0].reference;
        if (currentTheme != theme) {
            refs.headerToolbar.el.dom.style.background = viewModel.getData().ui[theme];
            refs[theme].setText(viewModel.getData().themeText);
            refs[currentTheme].setText("");
            refs.mainSetupButton.setUI(theme); refs.logout.setUI(theme); refs.news.setUI(theme);
        }
    }
})