Ext.define("App.echart.EChart", {
    alias: "widget.echart",
    extend: "Ext.panel.Panel",
    echart: null,
    setOption: function (option) {
        var me = this,
        innerctId = document.getElementById(me.getId() + "-innerCt"),
        myChart = me.echart = echarts.init(innerctId);
        innerctId.style.width = "100%";
        innerctId.style.height = "100%";
        myChart.setOption(option);
    },
    listeners: {
        resize: function () {
            var me = this;
            if (me.echart != null) {
                me.echart.resize();
            }
        }
    }
})