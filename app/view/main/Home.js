Ext.define("App.view.main.Home", {
    xtype: "home",
    routeId: "home",
    extend: "Ext.panel.Panel",
    iconCls: "x-fa fa-laptop",
    title: "首页",
    scrollable: Ext.scroll.Scroller({ y: true, x: false }),
    layout: {
        type: "vbox",
        align: "stretch"
    },
    items: [
        {
            xtype: "container",
            flex: 1,
            layout: {
                type: "hbox",
                align: "stretch"
            },
            items: [
                {
                    xtype: "econtainer",
                    flex: 1,
                    uuid: Ext.data.identifier.Uuid.create().generate(),
                    listeners: {
                        afterrender: function (me, eOpts) {
                            me.setHtml("<div id='"+me.uuid+"' style='width:100%;height:100%'></div>")
                            me.ec = echarts.init(document.getElementById(me.uuid));
                            option = {
                                title: {
                                    text: '堆叠区域图'
                                },
                                tooltip : {
                                    trigger: 'axis',
                                    axisPointer: {
                                        type: 'cross',
                                        label: {
                                            backgroundColor: '#6a7985'
                                        }
                                    }
                                },
                                legend: {
                                    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                                },
                                toolbox: {
                                    feature: {
                                        saveAsImage: {}
                                    }
                                },
                                grid: {
                                    left: '3%',
                                    right: '4%',
                                    bottom: '3%',
                                    containLabel: true
                                },
                                xAxis : [
                                    {
                                        type : 'category',
                                        boundaryGap : false,
                                        data : ['周一','周二','周三','周四','周五','周六','周日']
                                    }
                                ],
                                yAxis : [
                                    {
                                        type : 'value'
                                    }
                                ],
                                series : [
                                    {
                                        name:'邮件营销',
                                        type:'line',
                                        stack: '总量',
                                        areaStyle: {},
                                        data:[120, 132, 101, 134, 90, 230, 210]
                                    },
                                    {
                                        name:'联盟广告',
                                        type:'line',
                                        stack: '总量',
                                        areaStyle: {},
                                        data:[220, 182, 191, 234, 290, 330, 310]
                                    },
                                    {
                                        name:'视频广告',
                                        type:'line',
                                        stack: '总量',
                                        areaStyle: {},
                                        data:[150, 232, 201, 154, 190, 330, 410]
                                    },
                                    {
                                        name:'直接访问',
                                        type:'line',
                                        stack: '总量',
                                        areaStyle: {normal: {}},
                                        data:[320, 332, 301, 334, 390, 330, 320]
                                    },
                                    {
                                        name:'搜索引擎',
                                        type:'line',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'top'
                                            }
                                        },
                                        areaStyle: {normal: {}},
                                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                                    }
                                ]
                            };
                            me.ec.setOption(option);
                        }
                    }
                }
            ]
        },
        {
            xtype: "container",
            flex: 1,
            layout: {
                type: "hbox",
                align: "stretch"
            },
            items: [
                {
                    xtype: "econtainer",
                    flex: 1,
                    uuid: Ext.data.identifier.Uuid.create().generate(),
                    listeners: {
                        afterrender: function (me, eOpts) {
                            me.setHtml("<div id='"+me.uuid+"' style='width:100%;height:100%'></div>")
                            me.ec = echarts.init(document.getElementById(me.uuid));
                            option = {
                                legend: {},
                                tooltip: {},
                                dataset: {
                                    dimensions: ['product', '2015', '2016', '2017'],
                                    source: [
                                        {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
                                        {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
                                        {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
                                        {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
                                    ]
                                },
                                xAxis: {type: 'category'},
                                yAxis: {},
                                // Declare several bar series, each will be mapped
                                // to a column of dataset.source by default.
                                series: [
                                    {type: 'bar'},
                                    {type: 'bar'},
                                    {type: 'bar'}
                                ]
                            };
                            
                            me.ec.setOption(option);
                        }
                    }
                },
                {
                    xtype: "econtainer",
                    flex: 1,
                    uuid: Ext.data.identifier.Uuid.create().generate(),
                    listeners: {
                        afterrender: function (me, eOpts) {
                            me.setHtml("<div id='"+me.uuid+"' style='width:100%;height:100%'></div>")
                            me.ec = echarts.init(document.getElementById(me.uuid));
                            option = {
                                legend: {},
                                tooltip: {},
                                dataset: {
                                    source: [
                                        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                                        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                                        ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                                        ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                                        ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                                    ]
                                },
                                series: [{
                                    type: 'pie',
                                    radius: 60,
                                    center: ['25%', '30%']
                                    // No encode specified, by default, it is '2012'.
                                }, {
                                    type: 'pie',
                                    radius: 60,
                                    center: ['75%', '30%'],
                                    encode: {
                                        itemName: 'product',
                                        value: '2013'
                                    }
                                }, {
                                    type: 'pie',
                                    radius: 60,
                                    center: ['25%', '75%'],
                                    encode: {
                                        itemName: 'product',
                                        value: '2014'
                                    }
                                }, {
                                    type: 'pie',
                                    radius: 60,
                                    center: ['75%', '75%'],
                                    encode: {
                                        itemName: 'product',
                                        value: '2015'
                                    }
                                }]
                            };
                            me.ec.setOption(option);
                        }
                    }
                }
            ]
        }
    ]
})
