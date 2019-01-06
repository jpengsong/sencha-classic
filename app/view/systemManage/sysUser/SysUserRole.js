Ext.define("App.view.systemmanage.sysuser.SysUserRole", {
    alias: "widget.sysuserrole",
    extend: "Ext.window.Window",
    maximizable: true,
    modal: true,
    width: 450,
    height: 550,
    layout: "fit",
    items: [
        {
            anchor: '100%',
            xtype: 'multiselect',
            msgTarget: 'side',
            fieldLabel: 'Multiselect',
            name: 'multiselect',
            allowBlank: false,
            bind:{
                store:"{userrole}",
                value:"{value}"
            },
            valueField: 'number',
            displayField: 'numberName',
            ddReorder: true
        }
    ]
})