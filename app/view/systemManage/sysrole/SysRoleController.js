Ext.define("App.view.systemmanage.sysrole.SysRoleController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sysrole',

    //新增
    onAdd: function () {
        var window, me = this, view = me.getView(); window = Ext.create({
            xtype: "window",
            title: '新增',
            height: 500,
            width: 700,
            layout: 'form',
            items: [{
                fieldLabel: 'First Name',
                name: 'first',
                allowBlank: false
            }, {
                fieldLabel: 'Last Name',
                name: 'last'
            }, {
                fieldLabel: 'Company',
                name: 'company'
            }, {
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email'
            }, {
                fieldLabel: 'DOB',
                name: 'dob',
                xtype: 'datefield'
            }, {
                fieldLabel: 'Age',
                name: 'age',
                xtype: 'numberfield',
                minValue: 0,
                maxValue: 100
            }, {
                xtype: 'timefield',
                fieldLabel: 'Time',
                name: 'time',
                minValue: '8:00am',
                maxValue: '6:00pm'
            }]
        })
        window.showBy(me);
    }
})