Ext.define("override.ux.SimManager", {
    override: "Ext.ux.ajax.SimManager",
    // register: function () {
    //     function makeSortFn(def, cmp) { alert();
    //         var order = def.direction,
    //             sign = (order && order.toUpperCase() == 'DESC') ? -1 : 1;

    //         return function (leftRec, rightRec) {
    //             var lhs = leftRec[def.property],
    //                 rhs = rightRec[def.property],
    //                 c = (lhs < rhs) ? -1 : ((rhs < lhs) ? 1 : 0);

    //             if (c || !cmp) {
    //                 return c * sign;
    //             }

    //             return cmp(leftRec, rightRec);
    //         }
    //     };

    //     function makeSortFns(defs, cmp) {
    //         alert();
    //         for (var sortFn = cmp, i = defs && defs.length; i;) {
    //             sortFn = makeSortFn(defs[--i], sortFn);
    //         }
    //         return sortFn;
    //     }
    // }

})