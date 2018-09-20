Ext.define("app.view.main.HomeController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home',
    menu: null,
    // 导航按钮设置组件渲染完成后触发
    onAfterrenderNavigationSetup: function () {
        var me, refs, tip; me = this; refs = me.getReferences();
        tip = Ext.create({ xtype: "HomeheadNavigationsetupTip" });
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

    //菜单项悬浮
    onMenuMouseOver: function (th, e, eOpts) {
        var me, menu; me = this;
        if (me.menu != null) {
            me.menu.hideMenu();
        }
        menu = th.getMenu();
        if (menu != null) {
            me.menu = th;
            me.menu.showMenu();
        }
    },

    //初始化菜单数据
    onafterrender: function () {
        var me = this; refs = me.getReferences(); var vm = me.getViewModel();
        refs.navmenu.setStore(vm.getStore("navigation"));
    },

    //折叠
    onMicro:function(){
        var me = this; refs = me.getReferences(); var vm = me.getViewModel();
        var isMicro= refs.navmenu.getMicro();
        if(!isMicro){
            refs.navmenu.up('container').setWidth(50);
            refs.logo.setWidth(50);
            refs.navmenu.setMicro(true);
        }else{
            refs.navmenu.up('container').setWidth(220);
            refs.logo.setWidth(220);
            refs.navmenu.setMicro(false);
        }
    }
})