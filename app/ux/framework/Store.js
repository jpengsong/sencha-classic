/*
*
*       
*       App.Store.create({
*            url:"",
*            autoLoad:true,
*            params:null,
*            type:StoreType.TreeStore,
*            rootField:null,        
*            isExpend:true,
*            isAllExpend:true,
*            idField:"",
*            root:{},
*            parentField:"",
*            model:"",
*            sortField:""
*        })
*
*       App.Store.create({
*            url:"",
*            params:null,
*            model:"",
*            pageSize:"",
*            sortField:null,
*            orderBy:"",
*            autoLoad:true,
*            type:StoreType.GridStore
*        })
*
*       App.Store.create({
*            url:"",
*            autoLoad:true,
*            params:null,
*            type:StoreType.ComboBoxStore,     
*            textField:"", 
*            valueField:"",
*            model:"",
*            sortField:""
*        })
*
*
*
*
*
*
*
*
*/


Ext.define("ux.framework.Store", {
    alternateClassName: ['ux.Store'],
    statics: {
        create: function (config) {
            var me, store;
            me = this;
            switch (config.type) {
                case Config.StoreType.TreeStore:
                    store = me.createTreeStore(config);
                    break;
                case Config.StoreType.GridStore:
                    store = me.createGridStore(config);
                    break;
                case config.ComboStore:
                    store = me.createComboBoxStore(config);
                    break;
                default:
                    store = null;
                    break;
            }
            return store;
        },

        createGridStore: function (config) {
            var me, readerConfig; me = this;
            readerConfig = { type: Config.StoreType.GridStore };
            var store = Ext.create('Ext.data.Store', {
                autoLoad: config.autoLoad,
                model: config.model,
                remoteSort: config.remoteSort,
                proxy: {
                    type: 'ajax',
                    actionMethods: { read: 'get' },
                    timeout: 60000,
                    url: config.url,
                    extraParams: ux.Ajax.getRequestData(config),
                    reader: Ext.create('ux.framework.Reader', readerConfig),
                    simpleSortMode: true
                },
                sorters: config.sorters
            });
            return store;
        },

        createTreeStore: function (config) {
            var me, readerConfig; me = this;
            readerConfig = { type: Config.StoreType.TreeStore };

            if (!Ext.isEmpty(config.isExpend)) {
                readerConfig.isExpend = config.isExpend;
            }
            if (!Ext.isEmpty(config.isAllExpend)) {
                readerConfig.isAllExpend = config.isAllExpend;
            }
            if (!Ext.isEmpty(config.idField)) {
                readerConfig.idField = config.idField;
            }
            if (!Ext.isEmpty(config.parentField)) {
                readerConfig.parentField = config.parentField;
            }
            if (!Ext.isEmpty(config.sortField)) {
                readerConfig.sortField = config.sortField;
            }
            if (!Ext.isEmpty(config.nodeLevel)) {
                readerConfig.nodeLevel = config.nodeLevel;
            }
            if (!Ext.isEmpty(config.iconCls)) {
                readerConfig.iconCls = config.iconCls;
            }
            var configStore = {
                autoLoad: config.autoLoad,
                autoSync: true,
                model: config.model,
                proxy: {
                    type: 'ajax',
                    url: config.url,
                    actionMethods: { read: 'get' },
                    extraParams: ux.Ajax.getRequestData(config),
                    reader: Ext.create('ux.framework.Reader', readerConfig),
                    writer: Ext.create('ux.framework.Writer', { encode: true, type: 'json' })
                }
            };
            var store = Ext.create('Ext.data.TreeStore', Ext.apply(configStore, config.defaultConfig));
            return store;
        },

        createComboBoxStore: function (config) {
            var me, readerConfig; me = this;
            readerConfig = { type: Config.StoreType.ComboStore };
            var store = Ext.create('Ext.data.Store', {
                autoLoad: config.autoLoad,
                model: config.model,
                proxy: {
                    type: 'ajax',
                    actionMethods: { read: 'get' },
                    url: config.url,
                    extraParams: { queryParam: Ext.encode(config) },
                    reader: Ext.create('ux.framework.Reader', readerConfig)
                }
            });
            return store;
        },
    }
})