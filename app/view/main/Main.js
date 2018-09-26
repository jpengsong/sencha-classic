Ext.define("App.view.main.Main", {
    mixin: [
        'Ext.mixin.Responsive'
    ],
    id: "main",
    extend: "Ext.container.Viewport",
    controller: "main",
    viewModel: "main",
    layout: 'card',
    activeItem: 0,
    items: [
        { xtype: "login" },
        {
            xtype: "container",
            routeId: "welcome",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [
                {
                    xtype: "panel",
                    ui: "welcome-head",
                    height: 50,
                    layout: {
                        type: "hbox",
                        align: "stretch"
                    },
                    items: [
                        {
                            xtype: "container",
                            reference: "logo",
                            width: 220,
                            cls: "logo ext",
                            border: 10,
                            html: "sencha"
                        },
                        {
                            xtype: "toolbar",
                            padding: "0 0",
                            flex: 1,
                            style: {
                                "box-shadow": "0px 0px 0px 0.1px black"
                            },
                            ui: "welcome-head-toolbar",
                            reference: "headerToolbar",
                            defaults: {
                                margin: '0 15'
                            },
                            items: [
                                {

                                    ui: "planbutton",
                                    iconCls: "x-fa fa-bars",
                                    listeners: {
                                        click: "onMicro"
                                    }
                                },
                                {
                                    iconCls: "x-fa  fa-cog",
                                    ui: "planbutton"
                                },
                                {
                                    iconCls: "x-fa  fa-refresh",
                                    ui: "planbutton"
                                },
                                {
                                    xtype: "textfield", emptyText: "搜索..."
                                },
                                '->',
                                {
                                    iconCls: "x-fa  fa-bell-o",
                                    ui: "planbutton"
                                },
                                {
                                    iconCls: "x-fa  fa-tags",
                                    ui: "planbutton"
                                },
                                {
                                    iconCls: "x-fa  fa-arrows-alt",
                                    ui: "planbutton"
                                },
                                {
                                    text: "大学霸",
                                    ui: "planbutton",
                                    menu: [
                                        { text: '基本资料' },
                                        { text: '修改密码' },
                                        { text: '退出' }
                                    ]
                                },
                                {
                                    iconCls: "x-fa  fa-ellipsis-v",
                                    ui: "planbutton"
                                }
                            ]
                        }]
                },
                {
                    xtype: "container",
                    flex: 1,
                    layout: {
                        type: "hbox",
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: "container",
                            width: 220,
                            reference: "navcontainer",
                            style: {
                                "background-color": "#28333E"
                            },
                            scrollable: Ext.scroll.Scroller({ y: true, x: false, scrollbars: false }),
                            items: [
                                {
                                    xtype: 'treelist',
                                    reference: "navigationTreeList",
                                    ui: "navigation",
                                    scrollable: true,
                                    singleExpand: true,
                                    expanderOnly: false,
                                    listeners: {
                                        selectionchange: "onNavigationTreeListChange"
                                    }
                                }
                            ]
                        },
                        {
                            xtype: "tabpanel",
                            id: "welcomecontainer",
                            flex: 1,
                            ui: "welcome-tab-panel",
                            tabBar: {
                                height: 40
                            },
                            autoDestroy: false,
                            items: [
                                {
                                    iconCls: "x-fa fa-laptop",
                                    title: "首页",
                                    xtype: "container",
                                    scrollable: Ext.scroll.Scroller({ y: true, x: false }),
                                    layout: {
                                        type: "vbox",
                                        align: "stretch"
                                    },
                                    items: [
                                        {
                                            xtype: "container",
                                            layout: 'column',
                                            defaults: {
                                                margin: "15 0 15 15",
                                                height: 350
                                            },
                                            items: [
                                                {
                                                    xtype: "panel",
                                                    title: "NetWork",
                                                    columnWidth: 0.5,
                                                    html: "<div id='aaa' style='width:100%;height:100%'></div>",
                                                    listeners: {
                                                        afterrender: function (me, eOpts) {
                                                            var myChart = echarts.init(document.getElementById('aaa'));
                                                            option = {
                                                                tooltip: {
                                                                    trigger: 'axis',
                                                                    axisPointer: {
                                                                        type: 'cross',
                                                                        label: {
                                                                            backgroundColor: '#6a7985'
                                                                        }
                                                                    }
                                                                },
                                                                legend: {
                                                                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
                                                                xAxis: [
                                                                    {
                                                                        type: 'category',
                                                                        boundaryGap: false,
                                                                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                                                                    }
                                                                ],
                                                                yAxis: [
                                                                    {
                                                                        type: 'value'
                                                                    }
                                                                ],
                                                                series: [
                                                                    {
                                                                        name: '邮件营销',
                                                                        type: 'line',
                                                                        stack: '总量',
                                                                        areaStyle: {},
                                                                        data: [120, 132, 101, 134, 90, 230, 210]
                                                                    },
                                                                    {
                                                                        name: '联盟广告',
                                                                        type: 'line',
                                                                        stack: '总量',
                                                                        areaStyle: {},
                                                                        data: [220, 182, 191, 234, 290, 330, 310]
                                                                    },
                                                                    {
                                                                        name: '视频广告',
                                                                        type: 'line',
                                                                        stack: '总量',
                                                                        areaStyle: {},
                                                                        data: [150, 232, 201, 154, 190, 330, 410]
                                                                    },
                                                                    {
                                                                        name: '直接访问',
                                                                        type: 'line',
                                                                        stack: '总量',
                                                                        areaStyle: { normal: {} },
                                                                        data: [320, 332, 301, 334, 390, 330, 320]
                                                                    },
                                                                    {
                                                                        name: '搜索引擎',
                                                                        type: 'line',
                                                                        stack: '总量',
                                                                        label: {
                                                                            normal: {
                                                                                show: true,
                                                                                position: 'top'
                                                                            }
                                                                        },
                                                                        areaStyle: { normal: {} },
                                                                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                                                                    }
                                                                ]
                                                            };

                                                            myChart.setOption(option);
                                                            setTimeout(() => {
                                                                myChart.resize();
                                                            }, 200);

                                                            window.onresize = function () { myChart.resize() };
                                                        }
                                                    }
                                                },
                                                {
                                                    xtype: "panel",
                                                    title: "column1",
                                                    columnWidth: 0.5,
                                                    html: "<div id='eee' style='width:100%;height:100%'></div>",
                                                    listeners: {
                                                        afterrender: function (me, eOpts) {
                                                            var myChart = echarts.init(document.getElementById('eee'));
                                                            option = {
                                                                tooltip: {
                                                                    trigger: 'axis',
                                                                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                                                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                                                    }
                                                                },
                                                                legend: {
                                                                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                                                                },
                                                                grid: {
                                                                    left: '3%',
                                                                    right: '4%',
                                                                    bottom: '3%',
                                                                    containLabel: true
                                                                },
                                                                xAxis: {
                                                                    type: 'value'
                                                                },
                                                                yAxis: {
                                                                    type: 'category',
                                                                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                                                                },
                                                                series: [
                                                                    {
                                                                        name: '直接访问',
                                                                        type: 'bar',
                                                                        stack: '总量',
                                                                        label: {
                                                                            normal: {
                                                                                show: true,
                                                                                position: 'insideRight'
                                                                            }
                                                                        },
                                                                        data: [320, 302, 301, 334, 390, 330, 320]
                                                                    },
                                                                    {
                                                                        name: '邮件营销',
                                                                        type: 'bar',
                                                                        stack: '总量',
                                                                        label: {
                                                                            normal: {
                                                                                show: true,
                                                                                position: 'insideRight'
                                                                            }
                                                                        },
                                                                        data: [120, 132, 101, 134, 90, 230, 210]
                                                                    },
                                                                    {
                                                                        name: '联盟广告',
                                                                        type: 'bar',
                                                                        stack: '总量',
                                                                        label: {
                                                                            normal: {
                                                                                show: true,
                                                                                position: 'insideRight'
                                                                            }
                                                                        },
                                                                        data: [220, 182, 191, 234, 290, 330, 310]
                                                                    },
                                                                    {
                                                                        name: '视频广告',
                                                                        type: 'bar',
                                                                        stack: '总量',
                                                                        label: {
                                                                            normal: {
                                                                                show: true,
                                                                                position: 'insideRight'
                                                                            }
                                                                        },
                                                                        data: [150, 212, 201, 154, 190, 330, 410]
                                                                    },
                                                                    {
                                                                        name: '搜索引擎',
                                                                        type: 'bar',
                                                                        stack: '总量',
                                                                        label: {
                                                                            normal: {
                                                                                show: true,
                                                                                position: 'insideRight'
                                                                            }
                                                                        },
                                                                        data: [820, 832, 901, 934, 1290, 1330, 1320]
                                                                    }
                                                                ]
                                                            };
                                                            myChart.setOption(option);
                                                            setTimeout(() => {
                                                                myChart.resize();
                                                            }, 200);
                                                        },
                                                        resize:function(){
                                                          
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            iconCls: "x-fa fa-laptop",
                                            xtype: "container",
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch'
                                            },
                                            
                                            items: [
                                                {
                                                    xtype: 'slider',
                                                    width: 400,
                                                    fieldLabel: 'Single Slider',
                                                    value: 40
                                                },
                                                {
                                                    xtype: 'tbspacer',
                                                    flex: 0.3
                                                },
                                                {
                                                    xtype: 'multislider',
                                                    width: 400,
                                                    fieldLabel: 'Range Slider',
                                                    values: [
                                                        10,
                                                        40
                                                    ]
                                                },
                                                {
                                                    xtype: 'tbspacer',
                                                    flex: 0.3
                                                },
                                                {
                                                    xtype: 'pagingtoolbar',
                                                    width: 360,
                                                    displayInfo: false
                                                },
                                                {
                                                    xtype: 'tbspacer',
                                                    flex: 0.3
                                                },
                                                {
                                                    xtype: 'progressbar',
                                                    cls: 'widget-progressbar',
                                                    value: 0.4
                                                },
                                                {
                                                    xtype: 'tbspacer'
                                                }
                                            ]
                                            
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        render: 'onMainViewRender'
    }
})  