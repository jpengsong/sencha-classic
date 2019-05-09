Ext.define("App.view.main.MainController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    lastView: null,
    routes: {

        //跳转视图
        'view.:node': {
            before: "onBeforeUser",
            action: "onRouteChange"
        },

        //页签页面
        'tab.:node': {
            before: "onBeforeUser",
            action: "onRouteTabChange"
        },

        //登录成功跳转
        'user.:node': {
            before: "onBeforeLoginUser",
            action: "onRouteUserChange"
        }
    },

    //用户登录检测
    onBeforeLoginUser: function (id, action) {
        if (!Ext.isEmpty(App.UserInfo.Token)) {
            action.resume();
        } else {
            action.stop();
            this.redirectTo('view.login', true);
        }
    },

    //登录检测
    onBeforeUser: function (id, action) {
        var me = this;
        //未登陆并且不是登录页
        if (Ext.isEmpty(App.UserInfo.Token) && id != "login") {
            action.stop();
            me.redirectTo('view.login', true);
        } else {
            action.resume();
        }
    },

    //view.:node路由触发
    onRouteChange: function (id) {
        var me = this;
        me.setCurrentView("mainCardPanel", id);
    },

    //tab.:node路由触发
    onRouteTabChange: function (id) {
        var me; me = this;
        me.setCurrentView("mainTabPanel", id);
    },

    //user.:node 登录成功后触发
    onRouteUserChange: function (id) {
        var me = this, refs = me.getReferences(), vm = me.getViewModel();
        if (!Ext.isEmpty(App.UserInfo.Token)) {
            var store = refs.navigationTreeList.getStore();
            if (!store.getAutoLoad()) {
                store.setAutoLoad(true);
            }
            me.redirectTo("view.main");
        } else {
            me.redirectTo("view.login");
        }
    },

    //渲染视图
    setCurrentView: function (maincard, hashTag) {
        var me, vm; me = this; vm = me.getViewModel(), refs = me.getReferences();
        //散列值转小写
        hashTag = (hashTag || '').toLowerCase();
        //获取容器
        var mainCard = Ext.getCmp(maincard);
        //获取容器布局
        var mainLayout = mainCard.getLayout();
        //获取Treelist
        var treeStore = refs.navigationTreeList.getStore();
        //从菜单查找routeId
        var node = treeStore == null ? treeStore : treeStore.findNode('ViewType', hashTag);
        //如果菜单和白名单没有找到，返回404
        var view = node || vm.getStore("plist").find("ViewType", hashTag) > 0 ? hashTag : null || 'page404';
        //当前视图
        var lastView = me.lastView;
        //查找项
        var existingItem = mainCard.child('component[routeId=' + hashTag + ']');
        //获取当前已经存在的window窗口
        var window = Ext.WindowManager.getActive();
        //新视图
        var newView;
        //当前视图隐藏事件
        if (lastView) {
            lastView.fireEvent("viewHide", lastView);
        }
        //判断如果是Window窗口 销毁
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        } else {
            //上个视图不是Window视图窗口,当前页面有则关闭它
            if (window && window.isWindow && !window.isToast) {
                window.close();
            }
        }
        //容器不存在显示视图项 创建
        if (!existingItem) {
            newView = Ext.create({
                xtype: view,
                closable: true,
                routeId: hashTag
            });

            if (maincard == "mainTabPanel" && !Ext.isEmpty(node)) {
                newView.setIconCls(node.get("IconCls"));
                newView.setTitle(node.get("MenuName"));
            }
        }
        //新视图不存在或者非窗口
        if (!newView || !newView.isWindow) {
            if (existingItem) {
                lastView = mainLayout.getActiveItem();
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                mainLayout.setActiveItem(mainCard.add(newView));
            }
        }
        //将当前视图保存到lastView中
        me.lastView = newView;
        //导航菜单选中对应的节点
        if (node) {
            refs.navigationTreeList.setSelection(node);
        }
    },

    //初始化主页
    onMainViewRender: function () {
        var me = this, hash = window.location.hash.replace('#', '');
        if (Ext.isEmpty(App.UserInfo.Token) && hash != 'view.login') {
            me.redirectTo('view.login', true);
        } else if (!Ext.isEmpty(App.UserInfo.Token)) {
            me.redirectTo('user.login', true);
        }
        me.getViewModel().set("theme", Ext.manifest.profile);
    },

    //点击菜单项
    onNavigationTreeListChange: function (treelist, record, eOpts) {
        var me = this, data = record.data;
        if (!Ext.isEmpty(data.ViewType) && !Ext.isEmpty(data.PageType)) {
            me.redirectTo(data.PageType + "." + data.ViewType);
        }
    },

    //页签切换
    onTabChange: function (tabPanel, newCard, oldCard, eOpts) {
        var me = this, hash = window.location.hash.replace('#', '');
        if (hash != "tab." + newCard.xtype) {
            me.redirectTo('tab.' + newCard.xtype);
        }
    },

    //菜单折叠
    onMicro: function () {
        var me = this, refs = me.getReferences(), vm = me.getViewModel(), isMicro = refs.navigationTreeList.getMicro();
        if (!isMicro) {
            refs.logo.setWidth(50);
            refs.logo.addCls("ext-sencha");
            refs.logo.setHtml("");
            refs.navigationTreeList.up('container').setWidth(50);
            refs.navigationTreeList.setMicro(true);
        } else {
            refs.logo.setWidth(220);
            refs.logo.removeCls("ext-sencha");
            refs.logo.setHtml("sencha");
            refs.navigationTreeList.up('container').setWidth(220);
            refs.navigationTreeList.setMicro(false);
        }
    },

    //锁定
    onLock: function () {
        var me = this;
        me.redirectTo('view.lockscreen');
    },

    //退出登录
    onLogout: function () {
        var me = this;
        App.UserInfo.Token = null;
        App.Cookie.DeleteCookie("user");
        window.location.reload();
    },

    //右侧弹出窗
    onVersionWindow: function () {
        var me = this,
            mainCardPanel = Ext.getCmp("mainCardPanel"),
            refs = me.getReferences(),
            width = 400,
            height = (mainCardPanel.getHeight() - refs.header.getHeight()),
            y = mainCardPanel.getHeight() - height,
            x = mainCardPanel.getWidth();
        Ext.widget({
            xtype: "rwindow",
            width: width,
            height: height,
            y: y,
            x: x,
            items: [
                { xtype: "version" }
            ]
        });
    },

    //选择配色
    onThemeWindow: function () {
        var me = this,
            mainCardPanel = Ext.getCmp("mainCardPanel"),
            refs = me.getReferences(),
            width = 300,
            height = (mainCardPanel.getHeight() - refs.header.getHeight()),
            y = mainCardPanel.getHeight() - height,
            x = mainCardPanel.getWidth();
        Ext.widget({
            xtype: "rwindow",
            width: width,
            height: height,
            y: y,
            x: x,
            items: [
                { xtype: "chooseskin" }
            ]
        });
    },

    //开启全屏
    onFullScreen: function () {
        var element = Ext.getBody().dom;
        if (document.isFullScreen != undefined) {
            if (document.isFullScreen) {
                document.cancelFullScreen();
            } else {
                element.requestFullScreen();
            }
        }
        if (document.mozIsFullScreen != undefined) {
            if (document.mozIsFullScreen) {
                document.mozCancelFullScreen();
            } else {
                element.mozRequestFullScreen();
            }
        }
        if (document.webkitIsFullScreen != undefined) {
            if (document.webkitIsFullScreen) {
                document.webkitCancelFullScreen();
            } else {
                element.webkitRequestFullscreen();
            }
        }
    },

    //个人资料
    onBasicInfo: function (obj) {
        Ext.widget({
            xtype: "basicinfo",
            animateTarget: obj
        })
    },

    //修改密码
    onUpdatePassWord: function (obj) {
        Ext.widget({
            xtype: "updatepassword",
            animateTarget: obj
        })
    }
})