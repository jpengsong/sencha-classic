Ext.define("app.view.main.MainController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    lastView: null,
    init: function () {
        config.init();
    },
    routes: {
        //跳转视图
        'view.:node': {
            before: "onBeforeUser",
            action: "onRouteChange"
        },
        //跳转页面
        'box.:node': {
            before: "onBeforeUser",
            action: "onRouteBoxChange"
        },
        //显示返回后会销毁的视图
        'back.:node': {
            before: "onBeforeUser",
            action: "onRouteBackChange"
        }
    },

    //登录检测
    onBeforeUser: function (id, action) {
        var me = this;
        if (id != "login" && Ext.isEmpty(config.token)) {
            action.stop();
            this.redirectTo('view.login', true);
        } else if (id == "login" && !Ext.isEmpty(config.token)) {
            action.stop();
            Ext.util.History.back();
        } else {
            action.resume();
        }
    },

    //view.:node路由触发
    onRouteChange: function (id) {
        var me = this;
        me.setCurrentView("main", id);
    },

    //box.:node路由触发
    onRouteBoxChange: function (id) {
        var me = this;
        var home = me.getCmp("main").child("component[routeId='home']");
        maincard.setActiveItem(home);
        me.setCurrentView("mainCard", id);
    },

    //back.:node路由触发
    onRouteBackChange: function (id) {

    },

    //渲染视图
    setCurrentView: function (maincard, hashTag) {
        var me = this;
        //散列值转小写
        hashTag = (hashTag || '').toLowerCase();
        //获取容器
        var mainCard = Ext.getCmp(maincard);
        //获取容器布局
        var mainLayout = mainCard.getLayout();
        //获取Treelist
        var treeStore = Ext.ComponentQuery.query('treelist[reference="navigationTreeList"]')[0].getStore();
        //从菜单查找routeId
        var node = treeStore == null ? treeStore : treeStore.findNode('routeId', hashTag);
        //如果菜单和白名单没有找到，返回404
        var view = node || config.pageNode.indexOf(hashTag) !== -1 ? hashTag : null || 'page404';
        //当前视图
        var lastView = me.lastView;
        //查找项
        var existingItem = mainCard.child('component[routeId=' + hashTag + ']');
        //新视图
        var newView;
        //当前视图隐藏事件    
        if (lastView) {
            me.fireEvent("viewHide", lastView);
        }
        //判断如果是Window窗口 销毁
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }
        //容器不存在显示视图项 创建
        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                routeId: hashTag
            });
        }
        //新视图不存在或者非窗口
        if (!newView || !newView.isWindow) {
            if (existingItem) {
                lastView = mainLayout.getActiveItem();
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
                newView.fireEvent('viewShow', newView);
            }
            else {
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
            mainCard.fireEvent('activeitemchange', mainCard, newView, lastView);
        }
        me.lastView = newView;
    },

    //初始化主页
    onMainViewRender: function () {
        var me, hash; me = this,
            hash = window.location.hash.replace('#', '');
        if (hash != 'view.login') {
            if (Ext.isEmpty(config.token)) {
                this.redirectTo('view.login', true);
            }
        };
    }

    //主题切换
    // onThemeChange: function () {
    //     var me, profile; me = this; refs = me.getReferences(); viewModel = me.getViewModel();
    //     profile = arguments[0].theme;
    //     ux.Cookie.SetCookie("profile", profile);
    //     window.location = window.location;
    // },

    // //菜单位置切换
    // onNavigationlayoutChange: function () {

    // },

    // //菜单点击事件
    // onNavigationChange: function () {
    //     alert();
    // }
})