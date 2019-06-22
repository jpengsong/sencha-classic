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
using CRMS.Model.SystemManage;
using CRMS.Business.SystemManage;
using CRMS.Model.Base;
using CRMS.Model.Infrastructure;
namespace CRMS.API.Authorization.Controllers
{

    [RoutePrefix("api")]
    public class AuthorizationController : BaseApiController
    {
        private readonly SysUserBusiness sysUserBusiness = new SysUserBusiness();
        private readonly AuthorizationBusiness authorizationBusiness = new AuthorizationBusiness();

        [HttpPost]
        [Route("Token")]
        public HttpResponseMessage Token()
        {
            var requestData = new RequestData().Data;
            var sysUser = requestData.ToDeserialize<SysUserEntity>();
            sysUser = sysUserBusiness.LoginSysUser(sysUser.LoginName, sysUser.LoginPassWord);
            UserSessionInfo sessionInfo = null;
            if (sysUser != null)
            {
                if (sysUser.SysUserId != Guid.Empty)
                {
                    var tokenGuid = Guid.NewGuid();
                    sessionInfo = new UserSessionInfo(tokenGuid, sysUser.LoginName, sysUser.LoginPassWord, sysUser.SysUserId, sysUser.UserName);
                    authorizationBusiness.SetUserSessionInfo(sessionInfo);
                }
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
