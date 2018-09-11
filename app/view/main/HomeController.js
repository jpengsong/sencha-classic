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
    onAfterender: function () {
        var me = this; refs = me.getReferences(); var viewModel = me.getViewModel();
        ux.Ajax.request({
            url: "resources/data/main/Navigation.json",
            method: "GET",
            type: "JSON",
            success: function (data) {
                var records = data.records; var items = [];
                Ext.each(records, function (record) {
                    var item1 = {
                        text: record.text, iconCls: record.iconCls,
                        listeners:
                        {
                            mouseover: "onMenuMouseOver"
                        }
                    }; items.push(item1);
                    if (!Ext.isEmpty(record.children)) {
                        item1.menu = [];
                        Ext.each(record.children, function (record) {
                            var item2 = { text: record.text, iconCls: record.iconCls }; item1.menu.push(item2);
                            if (!Ext.isEmpty(record.children)) {
                                item2.menu = [];
                                Ext.each(record.children, function (record) {
                                    var item3 = { text: record.text, iconCls: record.iconCls }; item2.menu.push(item3);
                                    if (!Ext.isEmpty(record.children)) {
                                        item3.menu = [];
                                        Ext.each(record.children, function (record) {
                                            var item4 = { text: record.text, iconCls: record.iconCls }; item3.menu.push(item4);
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
                console.info(items);
                //refs.menuTop.add(items);
                refs.menuLeft.add(items);
            }, error: function (data) {

            }
        })
    }
})