using CRMS.Business.SystemManager;
using CRMS.Model.Base;
using CRMS.Model.SystemManager;
using CRMS.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CRMS.API.Areas.SystemManage.Controllers
{
    public class SysUserControlle : BaseApiController
    {

        private readonly SysUserBusiness sysUserBusiness = new SysUserBusiness();

        [HttpGet]
        public HttpResponseMessage GetSysUserPage()
        {
            var requestData = new RequestData().Data;
            QueryCondition condition = requestData.ToDeserialize<QueryCondition>();
            var result = GetMessage(sysUserBusiness.GetSysUserPage(condition));
            return result;
        }

        [HttpPost]
        public HttpResponseMessage AddSysUser()
        {
            var requestData = new RequestData().Data;
            var sysUser = requestData.ToDeserialize<SysUserEntity>();
            int message = sysUserBusiness.AddSysUser(sysUser);
            return GetMessage(message);
        }
    }
}
