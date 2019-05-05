Ext.define("App.view.main.Version", {
    xtype: "version",
    extend: "Ext.panel.Panel",
    title: '更新日志',
    iconCls: "x-fa fa-list-ol",
    flex: true,
    layout: {
        type: 'accordion',
        titleCollapse: true
    },
    items: [
        {
            header: {
                title: 'V2.0',
                layout: {
                    type: "hbox",
                    pack: "end",
                },
                items: [
                    {
                        xtype: "container",
                        html: "2019-xx-xx"
                    }
                ]
            },
            items: [
                {
                    xtype: "container",
                    html: 
                        "<ol>" +
                            "<li>开启全屏</li>" +
                            "<li>个人资料</li>" +
                            "<li>修改密码</li>" +
                            "<li>密码框显示隐藏</li>" +
                            "<li>锁定" +
                            "<li>退出</li>" +
                            "<li>调整首页布局</li>" +
                            "<li>封装上传插件</li>" +
                            "<li>封装下拉Grid</li>" +
                            "<li>多主题切换</li>" +
                            "<li>菜单可切换成横向和左侧</li>" +
                            "<li>添加ExtJS命名编写规范页面</li>" +
                        "</ol>"
                }
            ]
        },
        {
            header: {
                title: 'V1.0',
                layout: {
                    type: "hbox",
                    pack: "end",
                },
                items: [
                    {
                        xtype: "container",
                        html: "2019-02-25"
                    }
                ]
            },
            items: [
                {
                    xtype: "container",
                    html: "<ol>" +
                        "<li>新增主题 " +
                        "<ul>" +
                        "<li>theme-green</li>" +
                        "</ul>" +
                        "</li>" +
                        "<li>新增系统管理模块" +
                        "<ul>" +
                        "<li>菜单管理</li>" +
                        "<li>组织机构</li>" +
                        "<li>角色管理</li>" +
                        "<li>用户管理</li>" +
                        "</ul>" +
                        "</li>" +
                        "<li>主页路由权限跳转</li>" +
                        "<li>新增(404,500,空白页)</li>" +
                        "<li>新增登录页</li>" +
                        "<li>重写 panel,window,layout,locale组件的一些细节</li>" +
                        "<li>公共封装" +
                        "<ol>" +
                        "<li>组件封装" +
                        "<ul>" +
                        "<li>app-ViewController (视图控制器)</li>" +
                        "<li>combox-ComboxTree (下拉树)</li>" +
                        "<li>echart-EChart (图表)</li>" +
                        "<li>page-Page (基础页面)</li>" +
                        "<li>page-TreePage (带左侧树基础页面)</li>" +
                        "<li>plugin-RequestData (扩展组件请求后台参数处理)</li>" +
                        "<li>proxy-API (代理请求后台参数处理)</li>" +
                        "<li>query-QueryPanel (查询组件)</li>" +
                        "<li>reader-JsonReader (处理后台返回数据结果)</li>" +
                        "<li>tree-Ztree (封装Ztree)</li>" +
                        "</ul>" +
                        "</li>" +
                        "<li>方法封装" +
                        "<ul>" +
                        "<li>Ajax (Ext请求数据)</li>" +
                        "<li>Config (全局配置属性)</li>" +
                        "<li>Cookie (浏览器缓存)</li>" +
                        "<li>MessageBox (消息弹出框(信息,异常,询问,警告))</li>" +
                        "<li>Page(处理页面的工具类)</li>" +
                        "<li>Privilege(控制所有页面按钮显隐)</li>" +
                        "<li>SimulateDB(储存本地所有模拟数据)</li>" +
                        "<li>TreeNode(处理树节点)</li>" +
                        "<li>UserInfo(用户信息类)</li>" +
                        "</ul>" +
                        "</li>" +
                        "</ol>" +
                        "</li>" +
                        "</ol>"
                }
            ]
        }
    ],
    listeners: {
        //render: "afterrender"
    }
})