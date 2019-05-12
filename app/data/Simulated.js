Ext.define('App.data.Simulated', {
    requires: [
        'Ext.ux.ajax.JsonSimlet',
        'Ext.ux.ajax.SimManager'
    ],
    dataSource: [],
    onClassExtended: function (cls, data) {
        data.makeSortFn = function (def, cmp) {
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
            for (var sortFn = cmp, i = defs && defs.length; i;) {
                sortFn = this.makeSortFn(defs[--i], sortFn);
            }
            return sortFn;
        };

        data.requestData = function (ctx) {
            return Ext.decode(ctx.xhr.options.params.RequestData);
        };

        data.getCondition = function (requestData) {
            return Ext.decode(requestData.Data);
        };

        data.SqlQuery = function (condition) {
            var me = this, responseData = data.ResponseData(); responseData.Data = {};
            responseData.Data.List = Ext.clone(me.dataSource);
            responseData.Data.RecordCount = Ext.clone(me.dataSource).length;
            if (!Ext.isEmpty(condition)) {
                //查询条件
                if (!Ext.isEmpty(condition.QueryItems)) {
                    try {
                        for (var i = 0; i < responseData.Data.List.length; i++) {
                            var isExists = true;
                            for (var queryIndex in condition.QueryItems) {
                                var queryitem = condition.QueryItems[queryIndex];
                                switch (queryitem.Method) {
                                    case config.QueryMethod.Like:
                                        if (responseData.Data.List[i][queryitem.key].indexOf(queryitem.Value) === -1) {
                                            isExists = false;
                                        }
                                        break;
                                    case config.QueryMethod.Equal:
                                        if (responseData.Data.List[i][queryitem.key] != queryitem.Value) {
                                            isExists = false;
                                        }
                                        break;
                                    default:
                                        isExists = false;
                                        break;
                                }

                                if (!isExists) {
                                    break;
                                }
                            }

                            if (!isExists) {
                                responseData.Data.List.splice(i, 1);
                                i -= 1;
                            }
                        }
                    } catch (err) {
                        responseData.Data.List = [];
                        responseData.Data.Message = err.message;
                    } finally {
                        responseData.Data.RecordCount = responseData.Data.List.length;
                    }
                }

                 //分页
                 if (!Ext.isEmpty(condition.PagingSetting)) {
                    var pagingSetting = condition.PagingSetting;
                    if (!Ext.isEmpty(pagingSetting.SortOrder) && !Ext.isEmpty(pagingSetting.SortBy)) {
                        var props = pagingSetting.SortOrder.split(','),
                            dirs = pagingSetting.SortBy.split(','),
                            fields = [],
                            sortFn;
                        if (props.length == dirs.length) {
                            for (var index in props) {
                                fields.push({ direction: dirs[index], property: props[index] });
                            }
                        }
                    }

                    if (!Ext.isEmpty(pagingSetting.PageIndex) && !Ext.isEmpty(pagingSetting.PageCount)) {
                        responseData.Data.List = Ext.Array.slice(responseData.Data.List, pagingSetting.PageIndex, pagingSetting.PageCount);
                    } else if (!Ext.isEmpty(pagingSetting.PageCount)) {
                        responseData.Data.List = Ext.Array.slice(responseData.Data.List, 0, pagingSetting.PageCount);
                    }
                }
            }
            
            responseData.Data = Ext.encode(responseData.Data);
            return responseData;
        };

        data.ResponseData = function () {
            var responseData = {
                Data: {},
                Success: true,
                Message: "",
                Code: "Public.I_0001"
            }
            return responseData;
        };

        data.TreeNode = function (list, array, idField, pidField, parentId) {
            for (var i = 0; i < list.length; i++) {
                if (list[i][pidField] == parentId) {
                    array.push(list[i]);
                    data.TreeNode(list, array, idField, pidField, list[i][idField]);
                }
            }
        };

        data.getTreeData = function (list, idField, pidField, parentId) {
            var array = [], responseData = data.ResponseData(); responseData.Data = {};
            for (var i = 0; i < list.length; i++) {
                if (list[i][pidField] == parentId) {
                    array.push(list[i]);
                    data.TreeNode(list, array, idField, pidField, list[i][idField]);
                }
            }
            responseData.Data.List = array;
            responseData.Data.RecordCount = array.length;
            return responseData;
        };

        data.init();
       
        //存储到模拟数据集合中
        Ext.defer(function () {
            App.SimulateDB.Add(data.$className.substring(data.$className.lastIndexOf(".") + 1, data.$className.length),data.dataSource);
        },1);
    }
});