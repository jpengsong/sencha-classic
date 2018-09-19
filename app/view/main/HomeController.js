Ext.define("app.view.main.HomeController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home',
    
    // 导航按钮设置组件渲染完成后触发
    onAfterrenderNavigationSetup: function () {
        var me, refs, tip; me = this; refs = me.getReferences();
        tip = Ext.create({ xtype: "HomeheadNavigationetupTip" });
        refs.HomeheadSetup.tip = tip;
    },

    //点击导航按钮设置弹出悬浮窗口
    onClickNavigationSetup: function () {
        var me, refs, tip; me = this; refs = me.getReferences();
        tip = refs.HomeheadSetup.tip;
        if (tip.isHidden()) {
            tip.setTarget(refs.HomeheadSetup.getId());
            tip.show();
        } else {
            tip.hide();
            tip.setTarget(false);
        }
    },
})