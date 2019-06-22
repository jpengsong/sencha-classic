using CRMS.Model.Base;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace CRMS.Utility
{
    public class RequestData
    {
        public RequestDataEntity Data { get; set; }

        public RequestData()
        {
            var context = HttpContext.Current; string data = string.Empty;
            var method = context.Request.HttpMethod.ToLower();
            if (method.Equals("post") || method.Equals("put") || method.Equals("delete"))
            {
                data = context.Request.Form["RequestData"];
            }
            else if (method.Equals("get"))
            {
                data = context.Request.QueryString["RequestData"];
            }

            if (!string.IsNullOrWhiteSpace(data))
            {
                Data = JsonConvert.DeserializeObject<RequestDataEntity>(data);
            }
        }

    }
}
