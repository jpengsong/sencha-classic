using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using CRMS.Utility;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace CRMS.API.App_Start
{
    public class AuthFilterAttribute : AuthorizationFilterAttribute
    {
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            var requestData = new RequestData().Data;
            string tokenGuid = requestData.TokenGuid;
            string path = actionContext.Request.RequestUri.AbsolutePath;

            if (string.IsNullOrWhiteSpace(tokenGuid))
            {
                if (path != "/api/Token")
                {
                    GenerateError(actionContext);
                }
            }
            else if (CacheHelper.GetCache(tokenGuid) == null)
            {
                GenerateError(actionContext);
            }
        }

        /// <summary>
        /// 未授权请求
        /// </summary>
        /// <param name="actionContext"></param>
        private void GenerateError(HttpActionContext actionContext)
        {
            ResponseDataEntity responseData = new ResponseDataEntity();
            responseData.Success = false;
            responseData.Code = "Public.E_0003";
            actionContext.Response =  new HttpResponseMessage();
            actionContext.Response.Content = new StringContent(JsonConvert.SerializeObject(responseData), Encoding.UTF8, "application/json");
        }
    }
}