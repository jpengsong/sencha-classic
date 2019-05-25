Ext.define("App.view.main.Home", {
    xtype: "home",
    routeId: "home",
    extend: "Ext.panel.Panel",
    iconCls: "x-fa fa-laptop",
    title: "首页",
    scrollable: Ext.scroll.Scroller({ y: true, x: false }),
    bodyStyle: {
        background: '#f2f2f2'
    },
    layout:{
        type: 'responsivecolumn', states: { small: 800, medium: 1200, large: 0 } 
    },
    items: [
        {
            xtype: "panel",
            height:147,
            responsiveCls: 'large-25 medium-50 small-100',
            reference: "card1"
        },
        {
            xtype: "panel",
            height:147,
            responsiveCls: 'large-25 medium-50 small-100',
            reference: "card2"
        },
        {
            xtype: "panel",
            height:147,
            responsiveCls: 'large-25 medium-50 small-100',
            reference: "card3"
        },
        {
            xtype: "panel",
            height:147,
            responsiveCls: 'large-25 medium-50 small-100',
            reference: "card4"
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
            store: Ext.create('Ext.data.Store', {
                fields: ['name', 'time', 'status', 'zan'],
                data: [
                    { name: '胡歌', time: '11:20', status: '在线', zan: '20' },
                    { name: '彭于晏', time: '10:40', status: '在线', zan: '21' },
                    { name: '靳东', time: '01:30', status: '离线', zan: '45' },
                    { name: '吴尊', time: '21:40', status: '离线', zan: '30' },
                    { name: '许上进', time: '09:30', status: '在线', zan: '20' },
                    { name: '小蚊子', time: '21:18', status: '在线', zan: '78' }
                ]
            }),
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
            store: Ext.create('Ext.data.Store', {
                storeId: 'simpsonsStore',
                fields: ['sort', 'region', 'number'],
                data: [
                    { sort: '1', region: '浙江', number: '62310' },
                    { sort: '2', region: '北京', number: '59190' },
                    { sort: '3', region: '上海', number: '55891' },
                    { sort: '4', region: '广东', number: '51919' },
                    { sort: '5', region: '山东', number: '39231' },
                    { sort: '6', region: '湖北', number: '37109' }
                ]
            }),
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
            me.initCardView();
            me.initVisitsChart();
        },

        //初始化卡图访问量
        initCardView: function () {
            var me = this, tpl, refs = me.getReferences();
            tpl = '<div class="home-card"><div class="home-card-header">{0}<span class="home-badge home-bg-{1} homeadmin-badge">{2}</span></div><div class="home-card-body homeadmin-card-list"><p class="homeadmin-big-font">{3}</p><p>{4}<span class="homeadmin-span-color">{5} </span></p></div></div>';
            refs.card1.setHtml(tpl.replace("{0}","访问量").replace("{1}","blue").replace("{2}","周").replace("{3}","9,999,666").replace("{4}","总计访问量").replace("{5}","88万"));
            refs.card2.setHtml(tpl.replace("{0}","下载").replace("{1}","cyan").replace("{2}","月").replace("{3}","33,555").replace("{4}","新下载").replace("{5}","10%"));
            refs.card3.setHtml(tpl.replace("{0}","收入").replace("{1}","green").replace("{2}","年").replace("{3}","999,666").replace("{4}","总收入").replace("{5}","***"));
            refs.card4.setHtml(tpl.replace("{0}","活跃用户").replace("{1}","orange").replace("{2}","月").replace("{3}","66,666").replace("{4}","最近一个月").replace("{5}","15%"));
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
                    { xtype: "multiplefileupload" }
                ]
            });
            fileupload = window.down("container");
            window.show();
            fileupload.setOption({});
        }
    }
})
