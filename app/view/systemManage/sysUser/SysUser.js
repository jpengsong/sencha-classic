Ext.define("app.view.systemManage.sysUser.SysUser",{
    requires: [
        'Ext.layout.container.Border'
    ],
    xtype:"sysuser",
    extend:"Ext.panel.Panel",
    layout:{
        type:"vbox"
    },
    items:[
        {
                xtype:"panel",
                layout: 'border',
                width:'100%',
                height: 300,
                layout: 'border',
                items: [
                    {
                        region: 'north',
                        height: 14,
                        bodyPadding: 0,
                        bodyStyle: { cursor: 'pointer' },
                        defaults: {
                            padding: '0 0 0 7',
                            'z-Index': 80000
                        },
                        listeners: {
                            el: { click: 'expansionClick' }
                        },
                        items: [
                            {
                                xtype: 'component',
                                autoEl: {
                                    tag: 'i',
                                    cls: 'x-fa fa-caret-right'
                                }
                            }
                        ]
                    },
                    {
                        region: 'center',
                        xtype: 'panel',
                        layout:'column',
                        defaults:{
                            margin:"5 5",
                            labelWidth:70,
                            columnWidth: 0.2,
                            style:{
                                "text-align":"center"
                            }
                        },
                        items:[
                            {
                                xtype: 'textfield',
                                name: 'name',
                                fieldLabel: '用户名'
                            }, 
                            {
                                xtype: 'textfield',
                                name: 'email',
                                fieldLabel: '所在部门'
                            }
                        ]
                    },
                    {
                        region:'east',
                        xtype: 'panel',
                        layout: 'fit',
                        items:[
                            {
                                xtype:"panel",
                                layout: 'hbox',
                                defaults:{
                                    margin: '0 5 5 5'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        text: '查询',
                                        iconCls: "fa fa-search fa-1-3x",
                                        listeners: {
                                            click: "search"
                                        }
                                    },
                                    {
                                        xtype: 'button',
                                        text: '重置',
                                        iconCls: "fa fa-undo fa-1-3x",
                                        listeners: {
                                            click: "reset"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
        }
    ]
})