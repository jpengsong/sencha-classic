Ext.define("App.view.main.ChooseSkin", {
    xtype: "chooseskin",
    extend: "Ext.panel.Panel",
    defaultType: "container",
    title: '配色方案',
    flex: true,
    cls: "main-chooseskin",
    layout: {
        type: 'table',
        columns: 2,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },
    defaults: {
        flex: 1,
        style: {
            padding: "10px 10px"
        }
    },
    items: [
        {
            html: "<div class='setTheme'>" +
                "<div class='setTheme-header' style='background-color: #009688;'></div>" +
                '<div class="setTheme-side" style="background-color: #344058;"> <div class="setTheme-logo" style="background-color: #009688;"></div> </div>' +
                '<div class="theme-text" name="green"></div>' +
                "</div>"
        },
        {
            html: "<div class='setTheme'>" +
                "<div class='setTheme-header' style='background-color: #AA3130;'></div>" +
                '<div class="setTheme-side" style="background-color: #fff;"> <div class="setTheme-logo" style="background-color: #AA3130;"></div> </div>' +
                '<div class="theme-text" name="crimson"></div>' +
                "</div>"
        },
        {
            html: "<div class='setTheme'>" +
                "<div class='setTheme-header' style='background-color: rgb(245, 245, 245);'></div>" +
                '<div class="setTheme-side" style="background-color: #344058;"> <div class="setTheme-logo" style="background-color: #1E9FFF;"></div> </div>' +
                '<div class="theme-text" name="skyblue"></div>' +
                "</div>"
        },
        {
            html: "<div class='setTheme'>" +
                "<div class='setTheme-header' style='background-color: #50314F;'></div>" +
                '<div class="setTheme-side" style="background-color: #50314F;"> <div class="setTheme-logo" style="background-color: #50314F;"></div> </div>' +
                '<div class="theme-text" name="purple"></div>' +
                "</div>"
        }
    ],
    listeners: {
        afterRender: "onRender"
    },
    controller: {

        onRender: function () {
            var me = this, manifest =Ext.manifest.profile, items = me.getView().items.items;
            //绑定主题点击事件
            for (var i = 0; i < items.length; i++) {
                items[i].el.dom.addEventListener('click', function () {
                    me.triggerTheme(this);
                });
            }
            Ext.dom.Query.select("div[name='" + manifest + "']", me.getView().el.dom)[0].innerText = "使用中";
        },

        //切换主题
        triggerTheme: function (el) {
            var manifest = App.Cookie.GetCookie("manifest"), themeName =Ext.dom.Query.select("div[class='theme-text']",el)[0].getAttribute("name");
            if (manifest != themeName) {
                App.Cookie.SetExpiresCookie("manifest", themeName);
                window.location.reload();
            }
        }
    }
})