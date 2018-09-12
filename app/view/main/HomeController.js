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
                    };
                    items.push(item1);
                    if (!Ext.isEmpty(record.children)) {
                        var item1Menu = Ext.create({ xtype: "menu", ui: "first-home-center-west-menu-button-menuItem" });
                        Ext.each(record.children, function (record) {
                            var item1child = { text: record.text, iconCls: record.iconCls };
                            if (!Ext.isEmpty(record.children)) {
                                var item2Menu = Ext.create({ xtype: "menu", ui: "first-home-center-west-menu-button-menuItem" });
                                Ext.each(record.children, function (record) {
                                    var item2child = { text: record.text, iconCls: record.iconCls };
                                    if (!Ext.isEmpty(record.children)) {
                                        var item3Menu = Ext.create({ xtype: "menu", ui: "first-home-center-west-menu-button-menuItem" });
                                        Ext.each(record.children, function (record) {
                                            var item3child = { text: record.text, iconCls: record.iconCls }; 
                                            item3Menu.add(item3child);
                                        })
                                        item2child.menu=item3Menu;
                                    }
                                    item2Menu.add(item2child);
                                })
                                item1child.menu=item2Menu;
                            }
                            item1Menu.add(item1child);
                        })
                        item1.menu = item1Menu;
                    }
                })
                refs.menuLeft.add(items);
            }, error: function (data) {

            }
        })
    }
})