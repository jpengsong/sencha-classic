Ext.define('App.data.systemManage.SysUser', {
    extend: "App.data.Simulated",
    init: function () {
        var me = this;
        list = [
            { "sysUserId": 1, "orgId": "2", "userName": "张三1", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 2, "orgId": "2", "userName": "张三3", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 3, "orgId": "2", "userName": "张三4", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 4, "orgId": "2", "userName": "张三5", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 5, "orgId": "2", "userName": "张三6", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 6, "orgId": "2", "userName": "张三7", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 7, "orgId": "2", "userName": "张三8", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 9, "orgId": "2", "userName": "张三9", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 10, "orgId": "2", "userName": "张三10", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 11, "orgId": "2", "userName": "张三11", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 12, "orgId": "2", "userName": "张三12", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 13, "orgId": "2", "userName": "张三13", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 14, "orgId": "2", "userName": "张三14", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 15, "orgId": "2", "userName": "张三15", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 16, "orgId": "2", "userName": "张三16", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 17, "orgId": "2", "userName": "张三17", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 18, "orgId": "2", "userName": "张三18", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 19, "orgId": "2", "userName": "张三19", "loginName": "zhangsan", "mobile": "13500000000" },
            { "sysUserId": 20, "orgId": "2", "userName": "张三20", "loginName": "zhangsan", "mobile": "13500000000" }
        ],

        response = {
            Data: {
                List: [],
                RecordCount: 0,
                Success: true,
                Code: ""
            }
        },

        Ext.ux.ajax.SimManager.register({
            type: 'json',
            delay: 0,
            url: "/api/SystemManage/GetSysUserPage",
            getData: function (ctx) {
                var content = response.Data,
                    condition = Ext.decode(ctx.params.Data),
                    pagingSetting,
                    queryItem,
                    fields,
                    props,
                    dirs,
                    sortFn;
                content.List = [];
                if (!Ext.isEmpty(condition)) {
                    //查询条件
                    if (!Ext.isEmpty(condition.QueryItem)) {
                        queryItem = condition.QueryItem;
                        list.filter(function (row, index, array) {
                            var isbool = true;
                            for (var queryIndex in queryItem) {
                                var queryitem = queryItem[queryIndex];
                                if (queryitem.Method == config.Method.Like) {
                                    if (row[queryitem.key].indexOf(queryitem.Value) === -1) {
                                        isbool = false;
                                        break;
                                    }
                                } else if (queryitem.Method == config.Method.Equals) {
                                    if (row[queryitem.key] == queryitem.Value) {
                                        isbool = false;
                                        break;
                                    }
                                }
                            }
                            if (isbool) {
                                content.List.push(row);
                            }
                        })
                    }
                    //排序
                    if (!Ext.isEmpty(condition.PagingSetting)) {
                        pagingSetting = condition.PagingSetting;
                        if (!Ext.isEmpty(pagingSetting.SortOrder) && !Ext.isEmpty(pagingSetting.SortBy)) {
                            props = pagingSetting.SortOrder.split(',');
                            dirs = pagingSetting.SortBy.split(',');
                            if (props.length == dirs.length) {
                                fields = [];
                                for (var index in props) {
                                    fields.push({ direction: dirs[index], property: props[index] });
                                    console.info(fields);
                                    sortFn = me.makeSortFns((ctx.sortSpec = fields));
                                    if (sortFn) {
                                        Ext.Array.sort(content.List, sortFn);
                                    }
                                }
                            }
                        }
                    }
                    content.RecordCount = content.List.length;
                }
                return response;
            },

            getPage: function (ctx, response) {
                var me = this,
                    content = response.Data,
                    list = content.List,
                    condition = Ext.decode(ctx.params.Data),
                    pagingSetting,
                    pageCount,
                    pageIndex;
                if (!Ext.isEmpty(condition)) {
                    if (!Ext.isEmpty(condition.PagingSetting)) {
                        pagingSetting = condition.PagingSetting;
                        pageIndex = pagingSetting.PageIndex;
                        pageCount = pagingSetting.PageCount;
                        if (!Ext.isEmpty(pageCount) && !Ext.isEmpty(pageIndex)) {
                            content.List = Ext.Array.slice(list, pageIndex, pageCount);
                        }
                    }
                }
                return response;
            }
        });
    }}
);
