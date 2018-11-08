Ext.define("override.ux.DataSimlet", {
    override: "Ext.ux.ajax.DataSimlet",
    getPage: function (ctx, data) {
        var ret = data,
            length = data.length,
            start = ctx.params.start || 0,
            end = ctx.params.limit ? Math.min(length, start + ctx.params.limit) : length;

        if (start || end < length) {
            ret = ret.slice(start, end);
        }
        return ret;
    }
})