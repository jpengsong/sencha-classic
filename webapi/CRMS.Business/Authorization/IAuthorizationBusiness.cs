using CRMS.Model.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Business.Authorization
{
    interface IAuthorizationBusiness
    {
        /// <summary>
        /// 添加登录用户
        /// </summary>
        /// <param name="userInfo"></param>
        void SetUserSessionInfo(UserSessionInfo userInfo);

        /// <summary>
        /// 获取登录用户
        /// </summary>
        /// <param name="tokenGuid"></param>
        UserSessionInfo GetUserSessionInfo(string tokenGuid);

        /// <summary>
        /// 获取登录用户集合
        /// </summary>
        /// <returns></returns>
        List<UserSessionInfo> GetUserSessionInfoList();
    }
}
