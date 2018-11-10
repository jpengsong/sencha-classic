Ext.define('App.data.Simulated', {
    requires: [
        'Ext.ux.ajax.JsonSimlet',
        'Ext.ux.ajax.SimManager'
    ],
    onClassExtended: function (cls, data) {
        data.makeSortFn = function(def, cmp) {
            var order = def.direction,
                sign = (order && order.toUpperCase() == 'DESC') ? -1 : 1;
    
            return function (leftRec, rightRec) {
                var lhs = leftRec[def.property],
                    rhs = rightRec[def.property],
                    c = (lhs < rhs) ? -1 : ((rhs < lhs) ? 1 : 0);
    
                if (c || !cmp) {
                    return c * sign;
                }
    
                return cmp(leftRec, rightRec);
            }
        };
        data.makeSortFns = function (defs, cmp) {
            for (var sortFn = cmp, i = defs && defs.length; i; ) {
                sortFn =this.makeSortFn(defs[--i], sortFn);
            }
            return sortFn;
        };
        data.init();
    }
});