using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace CRMS.API
{
    public class BaseApiController : ApiController
    {

        public HttpResponseMessage GetMessage(object data)
        {
            var content = string.Empty;
            if (data != null)
            {
                content = JsonConvert.SerializeObject(data);
            }
            return new HttpResponseMessage() { Content = new StringContent(content, Encoding.UTF8, "application/json") };
        }

        public HttpResponseMessage GetMessage(string data)
        {
            if (string.IsNullOrWhiteSpace(data))
            {
                data = string.Empty;
            }
            return new HttpResponseMessage() { Content = new StringContent(data, Encoding.UTF8, "application/json") };
        }

        public HttpResponseMessage GetMessage(int data)
        {
            return new HttpResponseMessage() { Content = new StringContent(data.ToString(), Encoding.UTF8, "application/json") };
        }
    }
}
