using CRMS.Business.SystemManage;
using CRMS.Model.SystemManage;
using CRMS.Utility;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace CRMS.API.Areas.SystemManage.Controllers
{
    public class SysOrgController : BaseApiController
    {
        private readonly SysOrgBusiness sysOrgBusiness = new SysOrgBusiness();

        [HttpGet]
        public HttpResponseMessage GetSysOrgTreeByRule()
        {
            var list = sysOrgBusiness.GetSysOrgTreeByRule();
            return GetMessage(list);
        }

        [HttpGet]
        public HttpResponseMessage GetSysOrgPage()
        {
            var requestData = new RequestData().Data;
            var list = sysOrgBusiness.GetSysOrgPage(requestData.Data);
            return GetMessage(list);
        }

        [HttpPost]
        public HttpResponseMessage AddSysOrg()
        {
            var requestData = new RequestData().Data;
            var entity = JsonConvert.DeserializeObject<SysOrgEntity>(requestData.Data);
            var rs = sysOrgBusiness.AddSysOrg(entity);
            return GetMessage(rs);
        }

        [HttpPut]
        public HttpResponseMessage EditSysOrg()
        {
            var requestData = new RequestData().Data;
            var entity = JsonConvert.DeserializeObject<SysOrgEntity>(requestData.Data);
            var rs = sysOrgBusiness.EditSysOrg(entity);
            return GetMessage(rs);
        }

        [HttpDelete]
        public HttpResponseMessage DeleteSysOrg()
        {
            var requestData = new RequestData().Data;
            int rs = sysOrgBusiness.DeleteSysOrg(requestData.Data);
            return GetMessage(rs);
        }
    }
}