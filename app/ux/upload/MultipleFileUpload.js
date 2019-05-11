Ext.define("App.ux.upload.FileUpload", {
    xtype: "widget.multiplefileupload",
    extend: "Ext.container.Container",
    layout: "fit",
    items: [
        {
            xtype: "gridpanel",
            flex: 1,
            margin: "5 5",
            style: {
                "border": "1px solid #ddd"
            },
            tbar: {
                xtype: "toolbar",
                layout: "hbox",
                items: [
                    {
                        xtype: "component",
                        hidden: true,
                        name: "upload",
                        reference: "upload",
                        html: "<div>选择文件</div>"
                    },
                    {
                        xtype: "button",
                        text: '选择文件',
                        iconCls: "x-fa fa-plus",
                        handler: "onOpenFile"
                    },
                    {
                        text: '全部上传',
                        iconCls: "x-fa fa-upload",
                        handler: "onDelete"
                    },
                    {
                        text: '全部移除',
                        iconCls: "x-fa fa-trash-o",
                        handler: "onAdd"
                    }
                ]
            },
            store: Ext.create('Ext.data.Store', {
                fields: ['id', 'filename', 'size', 'progress']
            }),
            columns: [
                { text: 'id', dataIndex: 'id', align: "center", hidden:true },
                { text: '文件名称', dataIndex: 'filename', align: "center", flex: 1 },
                { text: '文件大小(KB)', dataIndex: 'size', align: "center", width: 120 },
                {
                    text: '上传进度', xtype: 'widgetcolumn', width: 150,align: "center", dataIndex: 'progress',
                    widget: {
                        xtype: 'progress',
                        textTpl: [
                            '{percent:number("0")}%'
                        ]
                    }
                },
                {
                    text: '操作', dataIndex: 'operation', xtype: 'actioncolumn', align: "center", width: 100,
                    items: [
                        {
                            iconCls: 'x-fa fa-trash-o',
                            handler: 'onRemove'
                        },
                        {
                            margin: "50 0 0 25",
                            iconCls: 'x-fa fa-upload',
                            handler: 'onUpload'
                        }
                    ]
                }
            ]
        }
    ],

    controller: {
        onOpenFile: function () {
            var me = this; view = me.getView(), refs = me.getReferences();
            Ext.dom.Query.select('input', refs.upload.el.dom)[0].click();
        },

        onRemove: function (grid, rowIndex, colIndex) {
            var me = this, rec = grid.getStore().getAt(rowIndex);
            me.getView().uploader.removeFile(rec.id,true);
            grid.getStore().remove(rec);
        },

        onUpload: function (grid, rowIndex, colIndex) {
            var me = this;
            alert(me.getView().uploader.getFiles().length);
        }
    },

    //写入 配置
    setOption: function (option) {
        var me = this, uploader, config;

        me.grid = Ext.ComponentQuery.query("component[xtype='gridpanel']", me)[0];

        //配置
        config = {
            swf: "resources/webuploader/Uploader.swf",
            server: null,
            scope: me,
            pick: "#" + me.getFileId(),
            listeners: {
                beforeFileQueued: me.beforeFileQueued,
                fileQueued: me.fileQueued,
                filesQueued: me.filesQueued,
                fileDequeued: me.fileDequeued,
                reset: me.reset,
                startUpload: me.startUpload,
                stopUpload: me.stopUpload,
                uploadFinished: me.uploadFinished,
                uploadStart: me.uploadStart,
                uploadBeforeSend: me.uploadBeforeSend,
                uploadAccept: me.uploadAccept,
                uploadProgress: me.uploadProgress,
                uploadError: me.uploadError,
                uploadSuccess: me.uploadSuccess,
                uploadComplete: me.uploadComplete
            }
        };

        //初始化
        config = Ext.apply(config, option);
        uploader = me.uploader = WebUploader.create(config);

        //监听事件
        uploader.on("beforeFileQueued", config.listeners.beforeFileQueued);
        uploader.on("fileQueued", config.listeners.fileQueued);
        uploader.on("filesQueued", config.listeners.filesQueued);
        uploader.on("fileDequeued", config.listeners.fileDequeued);
        uploader.on("reset", config.listeners.reset);
        uploader.on("startUpload", config.listeners.startUpload);
        uploader.on("stopUpload", config.listeners.stopUpload);
        uploader.on("uploadFinished", config.listeners.uploadFinished);
        uploader.on("uploadStart", config.listeners.uploadStart);
        uploader.on("uploadBeforeSend", config.listeners.uploadBeforeSend);
        uploader.on("uploadAccept", config.listeners.uploadAccept);
        uploader.on("uploadProgress", config.listeners.uploadProgress);
        uploader.on("uploadError", config.listeners.uploadError);
        uploader.on("uploadSuccess", config.listeners.uploadSuccess);
        uploader.on("uploadComplete", config.listeners.uploadComplete);
    },

    getFileId: function () {
        var me = this, upload = Ext.ComponentQuery.query("component[name='upload']", me)[0];
        id = upload.getId() + "-picker";
        upload.el.dom.children[0].setAttribute("id", id);
        return id;
    },

    //当文件被加入队列之前触发，此事件的handler返回值为false，则此文件不会被添加进入队列。
    beforeFileQueued: function () {

    },

    //当文件被加入队列以后触发。
    fileQueued: function () {

    },

    //当文件被加入队列以后触发。
    filesQueued: function (file) {
        var me = this; grid = me.options.scope.grid, store = grid.getStore();
        for (var i = 0; i < file.length; i++) {
            store.add({ id: file[i].id, filename: file[i].name, size: (file[i].size / 1024).toFixed(2), progress: .0 });
        }
    },

    //文件被移除时触发
    fileDequeued: function () {

    },

    //当 uploader 被重置的时候触发。
    reset: function () {

    },

    //当开始上传流程时触发。
    startUpload: function () {

    },

    //当开始上传流程暂停时触发。
    stopUpload: function () {

    },

    //当所有文件上传结束时触发。
    uploadFinished: function () {

    },

    //某个文件开始上传前触发，一个文件只会触发一次。
    uploadStart: function () {

    },

    //当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次
    uploadBeforeSend: function () {

    },

    //当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为false, 则此文件将派送server类型的uploadError事件。
    uploadAccept: function () {

    },

    //上传过程中触发，携带上传进度。
    uploadProgress: function () {

    },

    //当文件上传出错时触发。
    uploadError: function () {

    },

    //当文件上传成功时触发。
    uploadSuccess: function () {

    },

    //不管成功或者失败，文件上传完成时触发。
    uploadComplete: function () {

    }
})