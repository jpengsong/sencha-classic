Ext.define("App.view.main.MainController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    lastView: null,
    init: function () {
    },
    routes: {
        //跳转视图
        'view.:node': {
            before: "onBeforeUser",
            action: "onRouteChange"
        },
        //跳转页面
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
        if (Ext.isEmpty(App.UserInfo.Token) && id != "login") {
            action.stop();
            me.redirectTo('view.login', true);
        } else if (!Ext.isEmpty(App.UserInfo.Token) && id == "login") {
            action.stop();
            Ext.util.History.back();
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
            me.redirectTo("view.welcome");
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

    onTabChange: function (tabPanel, newCard, oldCard, eOpts) {
        var me = this, hash = window.location.hash.replace('#', '');
        if (hash != "tab." + newCard.xtype) {
            me.redirectTo('tab.' + newCard.xtype);
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
    },

    //切换菜单项
    onNavigationTreeListChange: function (treelist, record, eOpts) {
        var me = this, selNodes = Ext.dom.Query.select(".x-treelist-row"), data = record.data;
        for (var i = 0; i < selNodes.length; i++) {
            selNodes[i].style.backgroundColor = "";
        }
        if (data.children == null && data.parentId == "root" || data.parentId != "root") {
            var selNode = Ext.dom.Query.selectNode(".x-treelist-item-selected > .x-treelist-row", treelist.el.dom);
            if (selNode == null) {
                selNode = Ext.dom.Query.selectNode(".x-treelist-navigation .x-treelist-item-selected > .x-treelist-row");
            }
            selNode.style.backgroundColor = "#009688";
        }
        if (!Ext.isEmpty(data.ViewType) && !Ext.isEmpty(data.PageType)) {
            me.redirectTo(data.PageType + "." + data.ViewType);
        }
    },

    //折叠
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
    }
})