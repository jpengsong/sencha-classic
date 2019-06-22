using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;
using CRMS.Utility;
using CRMS.Model.SystemManager;
using CRMS.Business.SystemManager;
using CRMS.Model.Authorization;
using CRMS.Model.Base;
namespace CRMS.API.Authorization.Controllers
{

    [RoutePrefix("api")]
    public class AuthorizationController : BaseApiController
    {
        private readonly SysUserBusiness sysUserBusiness = new SysUserBusiness();

        [HttpPost]
        [Route("Token")]
        public HttpResponseMessage Token()
        {
            var requestData = new RequestData().Data;
            var sysUser = requestData.ToDeserialize<SysUserEntity>();
            sysUser = sysUserBusiness.LoginSysUser(sysUser.LoginName, sysUser.LoginPassWord);
            UserSessionInfo sessionInfo = null;
            if (sysUser.SysUserId != Guid.Empty)
            {
                sessionInfo = new UserSessionInfo();
                sessionInfo.UserID = sysUser.SysUserId;
                sessionInfo.UserName = sysUser.UserName;
                sessionInfo.LogonName = sysUser.LoginName;
                if (sysUser.LoginName == "Admin")
                {
                    sessionInfo.IsSuperUser = true;
                }
                sessionInfo.Token = Guid.NewGuid();
                CacheHelper.SetCache(sessionInfo.Token.ToString(), sessionInfo, new TimeSpan(0, 20, 0));
            }
            return GetMessage(sessionInfo);
        }

        [HttpPost]
        [Route("ValidaToken")]
        public HttpResponseMessage ValidaToken()
        {
            var requestData = new RequestData().Data;
            var sessionInfo = CacheHelper.GetCache(requestData.TokenGuid);
            return GetMessage(sessionInfo);
        }

    }
}
