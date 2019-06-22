Ext.define("App.view.home.Home", {
    xtype: "home",
    routeId: "home",
    extend: "Ext.panel.Panel",
    viewModel: "home",
    iconCls: "x-fa fa-laptop",
    title: "首页",
    scrollable: Ext.scroll.Scroller({ y: true, x: false }),
    bodyStyle: {
        background: '#f2f2f2'
    },
    layout: {
        type: 'responsivecolumn', states: { small: 800, medium: 1200, large: 0 }
    },
    defaultType:"component",
    items: [
        {
            height: 147,
            responsiveCls: 'large-25 medium-50 small-100',
            html: '<div class="home-card"><div class="home-card-header">访问量<span class="home-badge home-bg-blue homeadmin-badge">周</span></div><div class="home-card-body homeadmin-card-list"><p class="homeadmin-big-font">9,999,666</p><p>总计访问量<span class="homeadmin-span-color">88万 </span></p></div></div>'
        },
        {
            height: 147,
            responsiveCls: 'large-25 medium-50 small-100',
            html: '<div class="home-card"><div class="home-card-header">下载<span class="home-badge home-bg-cyan homeadmin-badge">月</span></div><div class="home-card-body homeadmin-card-list"><p class="homeadmin-big-font">33,555</p><p>新下载<span class="homeadmin-span-color">10% </span></p></div></div>'
        },
        {
            height: 147,
            responsiveCls: 'large-25 medium-50 small-100',
            html: '<div class="home-card"><div class="home-card-header">收入<span class="home-badge home-bg-green homeadmin-badge">年</span></div><div class="home-card-body homeadmin-card-list"><p class="homeadmin-big-font">999,666</p><p>总收入<span class="homeadmin-span-color">*** </span></p></div></div>'
        },
        {
            height: 147,
            responsiveCls: 'large-25 medium-50 small-100',
            html: '<div class="home-card"><div class="home-card-header">活跃用户<span class="home-badge home-bg-orange homeadmin-badge">月</span></div><div class="home-card-body homeadmin-card-list"><p class="homeadmin-big-font">66,666</p><p>最近一个月<span class="homeadmin-span-color">15% </span></p></div></div>'
        },
        {
            xtype: "echart",
            title: "访问量",
            reference: "visitsChart",
            height: 400
        },
        {
            xtype: "gridpanel",
            responsiveCls: 'large-50 medium-100 small-100',
            title: '本周活跃用户列表',
            bind: {
                store: "{weekuserstore}"
            },
            columns: [
                {
                    text: '用户名', dataIndex: 'name', sortable: false, align: "center", flex: 1,
                    renderer: function (value, row, obj, index) {
                        if (index == 0) {
                            value = "<span style='color:#FF5722'>" + value + "</span>";
                        } else if (index == 1) {
                            value = "<span style='color:#FFB800'>" + value + "</span>";
                        } else if (index == 2) {
                            value = "<span style='color:#5FB878'>" + value + "</span>";
                        }
                        return value;
                    }
                },
                {
                    text: '最后登录时间', dataIndex: 'time', sortable: false, align: "center", flex: 1,
                    renderer: function (value) {
                        value = "<span class='x-fa fa-clock-o'></span>&nbsp" + value;
                        return value;
                    }

                },
                { text: '状态', dataIndex: 'status', sortable: false, align: "center", flex: 1 },
                {
                    text: '获得赞', dataIndex: 'zan', sortable: false, align: "center", flex: 1,
                    renderer: function (value) {
                        value = value + "&nbsp<span class='x-fa fa-thumbs-o-up'></span>";
                        return value;
                    }
                }
            ]
        },
        {
            xtype: "gridpanel",
            responsiveCls: 'large-50 medium-100 small-100',
            title: '用户全国分布',
            bind: {
                store: "{countryspreadstore}"
            },
            columns: [
                { text: '排名', dataIndex: 'sort', width: 50, align: "center", sortable: false },
                { text: '地区', dataIndex: 'region', flex: 1, align: "center", sortable: false },
                { text: '人数', dataIndex: 'number', flex: 1, align: "center", sortable: false }
            ]
        }
    ],
    listeners: {
        afterrender: "onAfterrender"
    },
    controller: {

        onAfterrender: function () {
            var me = this;
            me.initVisitsChart();
        },

        //初始化访问量图表
        initVisitsChart: function () {
            var me = this, option, refs = me.getReferences();
            option = {
                color: ['#8EC9EB', "#5FB878", "#009688"],
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['访问量', '下载量', '平均访问量']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                yAxis: {
                    name: '访问量',
                    type: 'value'
                },
                series: [
                    {
                        name: '访问量',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210, 80, 60, 110, 200, 300]
                    },
                    {
                        name: '下载量',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310, 70, 90, 100, 150, 157]
                    },
                    {
                        name: '平均访问量',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410, 60, 140, 140, 130, 185]
                    }
                ]
            };
            refs.visitsChart.setOption(option);
        },

        //初始化上传文件
        initUpload: function () {
            var me = this, window, option;
            window = Ext.create({
                xtype: "window",
                title: "上传文件",
                height: 600,
                width: 900,
                maximizable: true,
                modal: true,
                layout: 'fit',
                items: [
                    { xtype: "fileupload" }
                ]
            });
            window.show();
            window.down("container[xtype='fileupload']").setOption({
                server: "/api/SystemManage/SysUser/Upload",
                formData: { User: "张三" }
            });
        }
    }
})
