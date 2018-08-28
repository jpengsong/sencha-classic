Ext.define("ux.framework.Convert", {
    alternateClassName: ['Convert'],
    statics: {
        YesNo: function (val) {
            var value = "是";
            if (Ext.isEmpty(val) || val != 1) {
                value = "否";
            }
            return value;
        }
    }
})