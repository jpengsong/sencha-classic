
Ext.define("override.proxy.Server", {
    override: "Ext.data.proxy.Server",
    buildRequest: function(operation) {
        var me = this,
            initialParams = Ext.apply({}, operation.getParams()),
            // Clone params right now so that they can be mutated at any point further down the call stack
            params = Ext.applyIf(initialParams, me.getExtraParams() || {}),
            request, operationId, idParam;
        //copy any sorters, filters etc into the params so they can be sent over the wire
        Ext.applyIf(params, me.getParams(operation));
        // Set up the entity id parameter according to the configured name.
        // This defaults to "id". But TreeStore has a "nodeParam" configuration which
        // specifies the id parameter name of the node being loaded.
        operationId = operation.getId();
        idParam = me.getIdParam();
        if (operationId !== undefined && params[idParam] === undefined) {
            params[idParam] = operationId;
        }
        console.info(operation);
        request = new Ext.data.Request({
            params: params,
            action: operation.getAction(),
            records: operation.getRecords(),
            url: operation.getUrl(),
            operation: operation,
            // this is needed by JsonSimlet in order to properly construct responses for
            // requests from this proxy
            proxy: me
        });
        request.setUrl(me.buildUrl(request));
        /*
         * Save the request on the Operation. Operations don't usually care about Request and Response data, but in the
         * ServerProxy and any of its subclasses we add both request and response as they may be useful for further processing
         */
        operation.setRequest(request);
        return request;
    }
        
    // buildRequest: function (operation) {
    //     var me = this, request, sorters, operationId, idParam;
    //     params = me.getExtraParams();
    //     var condition = {};
    //     condition.QueryItems = {};
    //     condition.PagingSetting = {};
    //     if (Ext.isFunction(scope.getParam)) {
    //         condition.QueryItems = scope.getParam();
    //     }
    //     if (scope.pagination) {
    //         pageSize = (pageIndex == undefined || pageIndex == null) ? scope.pageSize : pageIndex * scope.pageSize
    //         condition.PagingSetting['PageSize'] = pageSize;
    //         condition.PagingSetting["RowNum"] = pageSize - scope.pageSize;
    //     }
    //     sorters = operation.getSorters();
    //     if (!Ext.isEmpty(sorters)) {
    //         condition.PagingSetting['SortField'] = "";
    //         for (var i = 0; i < sorters.length; i++) {
    //             condition.PagingSetting['SortField'] += sorters[i]._property + " " + sorters[i]._direction;
    //             if ((i + 1) < sorters.length) {
    //                 condition.PagingSetting['SortField'] += ", ";
    //             }
    //         }
    //     }
    //     if (Ext.isEmpty(params["Data"])) {
    //         params["Data"] = Ext.encode(condition);
    //     } else {
    //         var paramData = Ext.decode(params["Data"]);
    //         paramData = Ext.apply(paramData, condition);
    //         params["Data"] = Ext.encode(paramData);
    //     }
    //     operationId = operation.getId();
    //     idParam = me.getIdParam();
    //     if (operationId !== undefined && params[idParam] === undefined) {
    //         params[idParam] = operationId;
    //     }

    //     request = new Ext.data.Request({
    //         params: params,
    //         action: operation.getAction(),
    //         records: operation.getRecords(),
    //         url: operation.getUrl(),
    //         operation: operation,
    //         proxy: me
    //     });
    //     request.setUrl(me.buildUrl(request));
    //     operation.setRequest(request);
    //     return request;
    // }
})