using CRMS.Model.Base;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace CRMS.API.App_Start
{

    public class ActionFilterAttribute : System.Web.Http.Filters.ActionFilterAttribute
    {
        /// <summary>
        /// 请求后过滤
        /// </summary>
        /// <param name="actionExecutedContext"></param>
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            base.OnActionExecuted(actionExecutedContext);
            if (actionExecutedContext.Exception == null)
            {
                ResponseDataEntity responseData = new ResponseDataEntity();
                if (actionExecutedContext.Response.StatusCode.GetHashCode() == 200)
                {
                    //执行成功
                    responseData.Code = "Public.I_0001";
                    responseData.Success = true;
                    responseData.Data = actionExecutedContext.ActionContext.Response.Content.ReadAsStringAsync().Result;
                    actionExecutedContext.ActionContext.Response.Content = new StringContent(JsonConvert.SerializeObject(responseData), Encoding.UTF8, "application/json");
                }
            }
        }

        /// <summary>
        /// 请求前过滤
        /// </summary>
        /// <param name="actionContext"></param>
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
       
        }

    }
}