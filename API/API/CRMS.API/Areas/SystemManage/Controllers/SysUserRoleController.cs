using CRMS.Business.SystemManage;
using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using CRMS.Utility;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CRMS.API.Areas.SystemManage.Controllers
{
    public class SysUserRoleController : BaseApiController
    {
        private readonly SysUserRoleBusiness sysUserRoleBusiness = new SysUserRoleBusiness();

        [HttpGet]
        public HttpResponseMessage GetSysUserRoleByRule()
        {
            var requestData = new RequestData().Data;
            Hashtable hashtable=JsonConvert.DeserializeObject<Hashtable>(requestData.Data);
            var list = sysUserRoleBusiness.GetSysUserRoleByRule(hashtable);
            return GetMessage(list);
        }

        [HttpPost]
        public HttpResponseMessage AddSysUserRole()
        {
            var requestData = new RequestData().Data;
            var hashtable = JsonConvert.DeserializeObject<Hashtable>(requestData.Data);
            var rs = sysUserRoleBusiness.AddSysUserRole(hashtable);
            return GetMessage(rs);
        }
    }
}
