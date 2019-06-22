using CRMS.API.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CRMS.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API 配置和服务
            
            //跨域配置
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));
            
            //过滤
            config.Filters.Add(new ActionFilterAttribute());
            config.Filters.Add(new AuthFilterAttribute());
            config.Filters.Add(new ErrorFilterAttribute());

            // Web API 路由
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{area}/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
