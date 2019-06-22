Ext.define("App.view.home.Home.HomeModel", {
    extend: 'Ext.app.ViewModel',
    alias: "viewmodel.home",
    data: {
        weekuserstore: Ext.create('Ext.data.Store', {
            fields: ['name', 'time', 'status', 'zan'],
            data: [
                { name: '胡歌', time: '11:20', status: '在线', zan: '20' },
                { name: '彭于晏', time: '10:40', status: '在线', zan: '21' },
                { name: '靳东', time: '01:30', status: '离线', zan: '45' },
                { name: '吴尊', time: '21:40', status: '离线', zan: '30' },
                { name: '许上进', time: '09:30', status: '在线', zan: '20' },
                { name: '小蚊子', time: '21:18', status: '在线', zan: '78' }
            ]
        }),
        countryspreadstore:Ext.create('Ext.data.Store', {
            storeId: 'simpsonsStore',
            fields: ['sort', 'region', 'number'],
            data: [
                { sort: '1', region: '浙江', number: '62310' },
                { sort: '2', region: '北京', number: '59190' },
                { sort: '3', region: '上海', number: '55891' },
                { sort: '4', region: '广东', number: '51919' },
                { sort: '5', region: '山东', number: '39231' },
                { sort: '6', region: '湖北', number: '37109' }
            ]
        })
    }
})