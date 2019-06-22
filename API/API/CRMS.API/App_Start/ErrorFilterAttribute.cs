using CRMS.Model.Base;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http.Filters;

namespace CRMS.API.App_Start
{
    public class ErrorFilterAttribute : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            base.OnException(actionExecutedContext);
            
            //执行公共错误
            ResponseDataEntity responseData = new ResponseDataEntity();
            responseData.Code = "Public.E_0001";
            responseData.Success = false;
            responseData.Message = actionExecutedContext.Exception.Message;
            actionExecutedContext.ActionContext.Response = new HttpResponseMessage(); ;
            actionExecutedContext.ActionContext.Response.Content = new StringContent(JsonConvert.SerializeObject(responseData), Encoding.UTF8, "application/json");
        }
    }
}