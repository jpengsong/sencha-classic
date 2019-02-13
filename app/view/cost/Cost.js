Ext.define("App.view.cost.Cost", {
    xtype: "cost",
    routeId: "cost",
    extend: "Ext.panel.Panel",
    iconCls: "x-fa fa-laptop",
    title: "版权费用",
    layout: "fit",
    items: [
        {
            xtype: "tabpanel",
            plain: true,
            tabBar: {
                defaults: {
                    width: "25%"
                },
                style: {
                    "text-align": "center"
                }
            },
            items: [
                {
                    title: "<h2>Sencha Ext JS</h2><p class='sncStoreNavP'>HTML5 JavaScript</br> components and framework</p>",
                    layout: "fit",
                    items: [
                        {
                            xtype: "gridpanel",
                            bodyBorder: false,
                            border: false,
                            enableColumnResize: false,
                            viewConfig: {
                                stripeRows: false
                            },
                            columns: {
                                isColumn: false,
                                defaults: {
                                    align: 'center',
                                    height: 50,
                                    border: false,
                                    sortable: false,
                                    hideable: false,
                                },
                                items: [
                                    { text: '', dataIndex: 'text', flex: 2 },
                                    { text: 'PRO', dataIndex: 'pro', flex: 1, renderer: function (value) { return "<i class='" + value + "'></i>"; } },
                                    { text: 'ENTERPRISE', dataIndex: 'enterprise', flex: 1, renderer: function (value) { return "<i class='" + value + "'></i>"; } }
                                ]
                            },
                            store: Ext.create('Ext.data.Store', {
                                fields: ['text', 'pro', 'enterprise'],
                                data: [
                                    { text: 'Ext JS ( HTML5/JavaScript Framework )', pro: 'x-fa fa-check', enterprise: 'x-fa fa-check' },
                                    { text: 'Cmd ( Build Optimization Tool )', pro: 'x-fa fa-check', enterprise: 'x-fa fa-check' },
                                    { text: 'Ext JS Stencils ( Design Kit )', pro: 'x-fa fa-check', enterprise: 'x-fa fa-check' },
                                    { text: 'Visual Studio Code Plugin ( Tool )', pro: 'x-fa fa-check', enterprise: 'x-fa fa-check' },
                                    { text: 'IDE Plugins ( Productivity Tools )', pro: 'x-fa fa-check', enterprise: 'x-fa fa-check' },
                                    { text: 'Architect ( Visual App Builder )', pro: 'x-fa fa-check', enterprise: 'x-fa fa-check' },
                                    { text: 'Sencha Themer ( Styling Tool )', pro: 'x-fa fa-check', enterprise: 'x-fa fa-check' },
                                    { text: 'Inspector ( Debugging Tool )', pro: 'x-fa fa-check', enterprise: 'x-fa fa-check' },
                                    { text: 'D3 Adapter ( Data Visualization )', pro: '', enterprise: 'x-fa fa-check' },
                                    { text: 'Pivot Grid ( Data Analytics )', pro: '', enterprise: 'x-fa fa-check' },
                                    { text: 'Calendar ( Event Management )', pro: '', enterprise: 'x-fa fa-check' },
                                    { text: 'Exporter ( Data Export )', pro: '', enterprise: 'x-fa fa-check' },
                                    { text: 'ExtReact ( Pre-built React components )', pro: '', enterprise: 'x-fa fa-check' },
                                    { text: 'Sencha Test ( Unit and end-to-end testing )', pro: '', enterprise: 'x-fa fa-check' }
                                ]
                            }),
                            bbar: [
                                {
                                    xtype: "container",
                                    width: '100%',
                                    layout: {
                                        type: 'table',
                                        columns: 3,
                                        tableAttrs: {
                                            style: {
                                                width: '100%'
                                            }
                                        },
                                        tdAttrs:{
                                            style: {
                                                "text-align": 'center'
                                            }
                                        }
                                    },
                                    defaults: {
                                        bodyStyle: 'padding:20px'
                                    },
                                    items: [
                                        {
                                            html: "<span style='color:#95C93D;text-align: left; padding: 10px 30px 10px 40px; margin: 0px; font-family:effra; font-weight: 300; font-size:18px;line-height: 18px; border-top: 0px !important;'>Perpetual License Pricing</span></br><span style='color:#999999;'>*5-pack minimum required</span>",
                                        },
                                        {
                                            html: "<span style='color:#00A1DD;font-size:24px'>$1,295*</span></br><a style='display: block; box-sizing: border-box; background-color: #FFFFFF; border: 1px solid #95C93D; color: #95C93D; font-family: effra; font-weight: 500; font-size: 18px; line-height: 18px; padding: 10px 5px 10px 5px; margin: 10px auto 0px auto; text-decoration: none; max-width: 130px; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; transition: all .22s;' href='https://www.sencha.com/store/extjs/'>BUY NOW</a>",
                                        },
                                        {
                                            html: "<span style='color:#00A1DD;font-size:24px'>$1,295*</span></br><a style='display: block; box-sizing: border-box; background-color: #95C93D; border: 1px solid #95C93D; color: #FFFFFF; font-family: effra; font-weight: 500; font-size: 18px; line-height: 18px; padding: 10px 5px 10px 5px; margin: 10px auto 0px auto; text-decoration: none; max-width: 130px; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; transition: all .22s;' href='https://www.sencha.com/store/extjs/'>BUY NOW</a>",
                                        },
                                        {
                                            html: "<span style='color:#95C93D;text-align: left; padding: 10px 30px 10px 40px; margin: 0px; font-family:effra; font-weight: 300; font-size:18px;line-height: 18px; border-top: 0px !important;'>Annual Subscription Pricing</span></br><span style='color:#999999;'>Per Developer</span>",
                                        },
                                        {
                                            html: "<span style='color:#00A1DD;font-size:24px'>$1,200*</span></br><a style='display: block; box-sizing: border-box; background-color: #FFFFFF; border: 1px solid #95C93D; color: #95C93D; font-family: effra; font-weight: 500; font-size: 18px; line-height: 18px; padding: 10px 5px 10px 5px; margin: 10px auto 0px auto; text-decoration: none; max-width: 130px; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; transition: all .22s;' href='https://www.sencha.com/store/extjs/'>BUY NOW</a>",
                                        },
                                        {
                                            html: "<a href='https://www.sencha.com/company/contact/' target='_blank' style='font-size:14px; border-bottom:0px !important; color:#00A1DD; text-decoration:underline !important;'>Contact for Pricing</a>",
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "<h2>Sencha Test</h2><p class='sncStoreNavP'>Unit and end-to-end</br> testing solution</p>",
                    items: [
                        {
                            xtype: "gridpanel",
                            bodyBorder: false,
                            border: false,
                            enableColumnResize: false,
                            viewConfig: {
                                stripeRows: false
                            },
                            columns: {
                                isColumn: false,
                                defaults: {
                                    align: 'center',
                                    height: 50,
                                    border: false,
                                    sortable: false,
                                    hideable: false,
                                },
                                items: [
                                    { text: '', dataIndex: 'text', flex: 2 },
                                    { text: 'PRO', dataIndex: 'pro', flex: 1, renderer: function (value) { return "<i class='" + value + "'></i>"; } },
                                ]
                            },
                            store: Ext.create('Ext.data.Store', {
                                fields: ['text', 'pro'],
                                data: [
                                    { text: 'Sencha Test Studio ( Built-in Jasmine testing )', pro: 'x-fa fa-check' },
                                    { text: 'Test Runner ( Unit and functional tests )', pro: 'x-fa fa-check' },
                                    { text: 'Sencha Test CLI ( Automated testing )', pro: 'x-fa fa-check' },
                                    { text: 'Test Archiver ( Track historical testing trends )', pro: 'x-fa fa-check' }
                                ]
                            }),
                            bbar: [
                                {
                                    xtype: "container",
                                    width: '100%',
                                    layout: {
                                        type: 'table',
                                        columns: 2,
                                        tableAttrs: {
                                            style: {
                                                width: '100%',
                                                "font-size":"18px"
                                            }
                                        },
                                        tdAttrs:{
                                            style: {
                                                "text-align": 'center'
                                            }
                                        }
                                    },
                                    defaults: {
                                        bodyStyle: 'padding:20px'
                                    },
                                    items: [
                                        {
                                            html: "<span style='color:#95C93D; padding: 10px 30px 10px 40px; margin: 0px; font-family:effra; font-weight: 300; font-size:18px;line-height: 18px; border-top: 0px !important;'>Term Based Subscription</span></br><span style='color:#999999;'>*5-pack minimum required; 1 year term, or Contact Sales to purchase 2 or 3 year terms.</span>",
                                        },
                                        {
                                            html: "<span style='color:#00A1DD;font-size:24px'>$495*</span></br><a style='display: block; box-sizing: border-box; background-color: #95C93D; border: 1px solid #95C93D; color: #FFFFFF; font-family: effra; font-weight: 500; font-size: 18px; line-height: 18px; padding: 10px 5px 10px 5px; margin: 10px auto 0px auto; text-decoration: none; max-width: 130px; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; transition: all .22s;' href='https://www.sencha.com/store/extjs/'>BUY NOW</a>",
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "<h2>Sencha ExtReact</h2><p class='sncStoreNavP'>115+ React components</p>",
                    layout: "fit",
                    items: [
                        {
                            xtype: "gridpanel",
                            bodyBorder: false,
                            border: false,
                            enableColumnResize: false,
                            viewConfig: {
                                stripeRows: false
                            },
                            columns: {
                                isColumn: false,
                                defaults: {
                                    align: 'center',
                                    height: 50,
                                    border: false,
                                    sortable: false,
                                    hideable: false,
                                },
                                items: [
                                    { text: '', dataIndex: 'text', flex: 2 },
                                    { text: 'PRO', dataIndex: 'pro', flex: 1, renderer: function (value) { return "<i class='" + value + "'></i>"; } },
                                ]
                            },
                            store: Ext.create('Ext.data.Store', {
                                fields: ['text', 'pro'],
                                data: [
                                    { text: 'Buttons, Panels, Tabs ( Components )', pro: 'x-fa fa-check' },
                                    { text: 'Toolbars, Tooltips, Windows ( Components )', pro: 'x-fa fa-check' },
                                    { text: 'Audio, Video, and More ( Components )', pro: 'x-fa fa-check' },
                                    { text: 'Forms ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Trees ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Calendar ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Grid ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Exporter ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Tree Grid ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Pivot Grid ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Sencha Charts ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'D3 Visualization ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Cmd ( Tool )', pro: 'x-fa fa-check' },
                                    { text: 'Themer ( Tool )', pro: 'x-fa fa-check' },
                                    { text: 'Distribution rights and support ( 1 Year )', pro: 'x-fa fa-check' }
                                ]
                            }),
                            bbar: [
                                {
                                    xtype: "container",
                                    width: '100%',
                                    layout: {
                                        type: 'table',
                                        columns: 2,
                                        tableAttrs: {
                                            style: {
                                                width: '100%'
                                            }
                                        },
                                        tdAttrs:{
                                            style: {
                                                "text-align": 'center'
                                            }
                                        }
                                    },
                                    defaults: {
                                        bodyStyle: 'padding:20px'
                                    },
                                    items: [
                                        {
                                            html: "<span style='color:#95C93D;text-align: left; padding: 10px 30px 10px 40px; margin: 0px; font-family:effra; font-weight: 300; font-size:18px;line-height: 18px; border-top: 0px !important;'>Annual Subscription Pricing</span></br><span style='color:#999999;'>Per Developer</span>",
                                        },
                                        {
                                            html: "<span style='color:#00A1DD;font-size:24px'>$1,295*</span></br><a style='display: block; box-sizing: border-box; background-color: #95C93D; border: 1px solid #95C93D; color: #FFFFFF; font-family: effra; font-weight: 500; font-size: 18px; line-height: 18px; padding: 10px 5px 10px 5px; margin: 10px auto 0px auto; text-decoration: none; max-width: 130px; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; transition: all .22s;' href='https://www.sencha.com/store/extjs/'>BUY NOW</a>",
                                        },
                                        {
                                            html: "<span style='color:#95C93D;text-align: left; padding: 10px 30px 10px 40px; margin: 0px; font-family:effra; font-weight: 300; font-size:18px;line-height: 18px; border-top: 0px !important;'>Perpetual License Pricing</span></br><span style='color:#999999;'>* 5-pack minimum required</span>",
                                        },
                                        {
                                            html: "<a href='https://www.sencha.com/company/contact/' target='_blank' style='font-size:14px; border-bottom:0px !important; color:#00A1DD; text-decoration:underline !important;'>Contact for Pricing</a><p></p><div style='padding:15px; margin-top:15px; background-color:#e1f4fd; display:inline-block; font-size:14px; line-height:16px; color: #2d2d2d; '>NEW: ExtReact Included in <a href='/store/ style='color:#00A1DD; text-decoration: underline !important;'>Ext JS Enterprise Edition</a>. <a href='https://www.sencha.com/company/contact/' style='color:#00A1DD; text-decoration: underline !important;'>Learn More</a>.</div>",
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "<h2>Sencha GXT</h2><p class='sncStoreNavP'>UI framework for HTML5</br>  apps using Java</p>",
                    layout: "fit",
                    items: [
                        {
                            xtype: "gridpanel",
                            bodyBorder: false,
                            border: false,
                            enableColumnResize: false,
                            viewConfig: {
                                stripeRows: false
                            },
                            columns: {
                                isColumn: false,
                                defaults: {
                                    align: 'center',
                                    height: 50,
                                    border: false,
                                    sortable: false,
                                    hideable: false,
                                },
                                items: [
                                    { text: '', dataIndex: 'text', flex: 2 },
                                    { text: 'PRO', dataIndex: 'pro', flex: 1, renderer: function (value) { return "<i class='" + value + "'></i>"; } },
                                ]
                            },
                            store: Ext.create('Ext.data.Store', {
                                fields: ['text', 'pro'],
                                data: [
                                    { text: 'GXT UI ( HTML5 Java components and framework )', pro: 'x-fa fa-check' },
                                    { text: 'Ext JS UI ( HTML5/JavaScript Components )', pro: 'x-fa fa-check' },
                                    { text: 'GXT Charts ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'GXT Theme Builder ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Ext JS Charts ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Ext JS Forms ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Ext JS Grids ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Ext JS Trees ( Component )', pro: 'x-fa fa-check' },
                                    { text: 'Visual Studio Code Plugin ( Tool )', pro: 'x-fa fa-check' },
                                    { text: 'Cmd ( Tool )', pro: 'x-fa fa-check' },
                                    { text: 'Themer ( Styling Tool )', pro: 'x-fa fa-check' },
                                    { text: 'Stencils ( Design Kit )', pro: 'x-fa fa-check' }
                                ]
                            }),
                            bbar: [
                                {
                                    xtype: "container",
                                    width: '100%',
                                    layout: {
                                        type: 'table',
                                        columns: 2,
                                        tableAttrs: {
                                            style: {
                                                width: '100%'
                                            }
                                        },
                                        tdAttrs:{
                                            style: {
                                                "text-align": 'center'
                                            }
                                        }
                                    },
                                    defaults: {
                                        bodyStyle: 'padding:20px'
                                    },
                                    items: [
                                        {
                                            html: "<span style='color:#95C93D;text-align: left; padding: 10px 30px 10px 40px; margin: 0px; font-family:effra; font-weight: 300; font-size:18px;line-height: 18px; border-top: 0px !important;'>Perpetual License Pricing</span></br><span style='color:#999999;'>*5-pack minimum required</span>",
                                        },
                                        {
                                            html: "<span style='color:#00A1DD;font-size:24px'>$1,690*</span></br><a style='display: block; box-sizing: border-box; background-color: #95C93D; border: 1px solid #95C93D; color: #FFFFFF; font-family: effra; font-weight: 500; font-size: 18px; line-height: 18px; padding: 10px 5px 10px 5px; margin: 10px auto 0px auto; text-decoration: none; max-width: 130px; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; transition: all .22s;' href='https://www.sencha.com/store/extjs/'>BUY NOW</a>",
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
})