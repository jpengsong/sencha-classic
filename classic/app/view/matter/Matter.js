Ext.define("App.view.matter.Matter", {
    extend: "Ext.panel.Panel",
    xtype: "matter",
    scrollable: Ext.scroll.Scroller({ y: true, x: false }),
    layout: {
        type: 'accordion',
        titleCollapse: true,
        animate: true,
        fill: false
    },
    padding: 20,
    defaultType: "panel",
    items: [
        {
            title: '命名规范及注意事项',
            layout: {
                type: 'vbox',
                align:"stretch"
            },
            defaultType: "container",
            defaults: {
            },
            items: [
                {
                    html: "<pre>" +
                            "Ext.define('<code style='color:red'>App.view.systemmanage.sysuser.SysUser'</code>, //所有类的首单词和末尾单词采用大写其余小写{<br>"+
                            "   extend: 'App.ux.page.Page',<br>"+
                            "   xtype: <code style='color:red'>'sysuser'</code>,    //所有类的别名（alias或xtype采用小写，名称过长可以用 '_' 划分 例：sys_user ）<br>"+
                            "   name:'xxx',         //类的属性采用全小写，严禁大写 例：Name<br>"+
                            "});<br>"+
                        "</pre>"
                },
                {
                    html: "<pre>" +
                            "//方法事件的方法名开头以 <code style='color:red'>on</code> 开头 注意小写<br>"+
                            "//每个方法之间空出一行间距</br>"+
                            "//非公共或特殊需求说明方法体禁止注释滥用 适用所有地方</br>"+
                            "//严禁无用代码出现方法中保持代码简洁 适用所有地方</br>"+
                            "Ext.define('App.view.systemmanage.sysuser.SysUserController', {<br>"+
                            "   extend: 'Ext.app.ViewController'<br>"+
                            "   alias: 'controller.sysuser'<br>"+
                            "   <br>"+
                            "   //新增<br>"+
                            "   <code style='color:red'>on</code>Add: function () {...}<br>"+
                            "   <br>"+
                            "   //修改<br>"+
                            "   <code style='color:red'>on</code>Edit: function () {...}<br>"+
                            "   <br>"+
                            "   //删除<br>"+
                            "   <code style='color:red'>on</code>Del: function () {...}<br>"+
                            "})"+
                        "</pre>"
                },
                {
                    html: "<pre>" +
                            "//非全局定义id和防止id冲突以及整体规范约束，开发中不建议在组件上定义id，查找组件可以使用以下几项方法<br>"+
                            "1:使用 reference:'xxx' 在controller中获取<br>"+
                            "2:donw()或up() <br>"+
                            "3:使用Ext.ComponentQuery查找 "+
                          "</pre>"
                },
                {
                    html: "<pre>" +
                            "//建议按照业务来划分项目文件夹<br>"+
                            "App<br>"+
                            "view<br>"+
                            "    systemmanager<br>"+
                            "        sysuser<br>"+
                            "        sysrole<br>"+
                            "        sysmenu<br>"+
                            "        ...<br>"+
                          "</pre>"
                },
                {
                    html: "<pre>" +
                            "//建议抛弃6之前版本和传统开发模式，采用前后端分离，遵循官方给的结构方案<br>"+
                            "App<br>"+
                            "   data<br>"+
                            "   model<br>"+
                            "   store<br>"+
                            "   ux<br>"+
                            "   view<br>"+
                            "   Application.js<br>"+
                            "   Application.scss<br>"+
                            "ext<br>"+
                            "overrides<br>"+
                            "resources<br>"+
                            "sass<br>"+
                            "app.js<br>"+
                            "app.json<br>"+
                            "bootstrap.css<br>"+
                            "bootstrap.js<br>"+
                            "bootstrap.json<br>"+
                            "bootstrap.jsonp<br>"+
                            "build.xml<br>"+
                            "index.html<br>"+
                            "workspace.json<br>"+
                          "</pre>"
                },
                {
                    html: "<pre>" +
                            "//css命名规范<br>"+
                            "所有编写css最终是以全局引用而并非局部引用，为防止css命名冲突 若非定义全局css命名，建议css命名按照业务划分命名 例：<br>"+
                            "   1：给登录页定义样式 .authentication-login<br>"+
                            "   2：给用户管理页定义样式 .systemmanage-sysuser<br>"+
                            "子样式不要全局裸露 应定义在父容器里面， 例<br>"+
                            ".authentication-login {<br>"+
                            "   .authentication-xxx{<br>"+
                            "       padding:xxx<br>"+
                            "   }<br>"+
                            "}<br>"+
                          "</pre><br>"
                },
                {
                    html: "<pre>" +
                            "//开发建议<br>"+
                            "   为提高开发者的开发维护效率使其更好专注于业务开发方面，建议将架构交给专人负责，用于解决日常遇到的问题，定期进行版本迭代<br>"+
                          "</pre><br>"
                }
            ]
        },
        {
            title: '项目结构', 
            html: "<pre>" +
                    "App<br>"+
                    "   //模拟数据源文件夹 用来存放本地数据和模拟接口<br>"+
                    "   data<br>"+
                    "       //请求模拟数据的基础操作类<br>"+
                    "       Simulated.js<br>"+
                    "   view<br>"+
                    "   //实体类<br>"+
                    "   model<br>"+
                    "       BaseModel.js<br>"+
                    "   //仓库<br>"+
                    "   store<br>"+
                    "   //公共组件和方法<br>"+
                    "   ux<br>"+
                    "       app<br>"+
                    "           ViewController.js<br>"+
                    "       combox<br>"+
                    "           ComboxTree.js<br>"+
                    "       echart<br>"+
                    "           EChart.js<br>"+
                    "       page<br>"+
                    "           Dialog.js<br>"+
                    "           Page.js<br>"+
                    "           TreePage.js<br>"+
                    "       password<br>"+
                    "           PasswordField.js<br>"+
                    "       plugin<br>"+
                    "           RequestData.js<br>"+
                    "       proxy<br>"+
                    "           API.js<br>"+
                    "           Server.js<br>"+
                    "       query<br>"+
                    "           QueryPanel.js<br>"+
                    "       reader<br>"+
                    "           JsonReader.js<br>"+
                    "       tree<br>"+
                    "           Ztree.js<br>"+
                    "       upload<br>"+
                    "           FileUpload.js<br>"+
                    "       utility<br>"+
                    "           Ajax.js<br>"+
                    "           Config.js<br>"+
                    "           Cookie.js<br>"+
                    "           MessageBox.js<br>"+
                    "           Page.js<br>"+
                    "           Privilege.js<br>"+
                    "           ResponseCode.js<br>"+
                    "           SimulateDB.js<br>"+
                    "           TreeNode.js<br>"+
                    "           UserInfo.js<br>"+
                    "   //视图<br>"+
                    "   view<br>"+
                    "   Application.js<br>"+
                    "   Application.scss<br>"+
                    "ext<br>"+
                    "overrides<br>"+
                    "resources<br>"+
                    "sass<br>"+
                    "app.js<br>"+
                    "app.json<br>"+
                    "bootstrap.css<br>"+
                    "bootstrap.js<br>"+
                    "bootstrap.json<br>"+
                    "bootstrap.jsonp<br>"+
                    "build.xml<br>"+
                    "index.html<br>"+
                    "workspace.json<br>"+
                "</pre>"
        }
    ]
})
