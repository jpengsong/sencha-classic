Ext.define("app.view.main.MainController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    lastView: null,
    routes: {
        'view.:node': {
            before: "onBeforeUser",
            action: "onRouteChange"
        }
    },

    //view.:node登录检测
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
    onRouteChange: function (hashTag) {
        var me = this;
        me.setCurrentView("view", hashTag);
    },

    //渲染视图
    setCurrentView: function (maincard, hashTag) {
        hashTag = (hashTag || '').toLowerCase();
        var me = this,
            mainCard = Ext.getCmp(maincard),
            //获取容器
            mainLayout = mainCard.getLayout(),
            //获取Treelist
            navigationList = refs.navigationTreeList,
            //查找菜单节点数据
            node = navigationList.getStore().findNode('routeId', hashTag),
            //如果菜单和白名单没有找到，返回404
            view = node || config.whitelist.contains(hashTag) || 'page404',
            //当前视图
            lastView = me.lastView,
            //查找项
            existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
            //新视图
            newView;

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
        //新视图非窗口
        if (!newView || !newView.isWindow) {
            if (existingItem) {
                lastView = mainLayout.getActiveItem();
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }
        me.lastView = newView;
    },

    //初始化主页
    onMainViewRender: function () {
        var me, hash; me = this,
            hash = window.location.hash.replace('#', '');
        if (hash != 'view.home') {
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