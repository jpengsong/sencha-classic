using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CRMS.Utility;
using CRMS.Utility.Application;
using CRMS.Utility.Infrastructure;
using CRMS.Model.Infrastructure;
using CRMS.Business.Authorization;
namespace CRMS.Business.SystemManage
{
    public class AuthorizationBusiness : BusinessBase, IAuthorizationBusiness
    {
        public void SetUserSessionInfo(UserSessionInfo userInfo)
        {
            CacheHelper.SetCache(userInfo.Token.ToString(), userInfo, new TimeSpan(0, 20, 0));
            List<UserSessionInfo> userSessionInfolist = GetUserSessionInfoList();

            //上次登录未退出 再次登录
            var oldUserInfo = userSessionInfolist.FirstOrDefault(m => m.LogonName == userInfo.LogonName);
            if (oldUserInfo != null)
            {
                userSessionInfolist.Remove(oldUserInfo);
                CacheHelper.RemoveAllCache(oldUserInfo.Token.ToString());
            }

            //添加新登录用户
            userSessionInfolist.Add(userInfo);
            CacheHelper.SetCache("userSessionInfolist", userSessionInfolist);
        }

        public UserSessionInfo GetUserSessionInfo(string tokenGuid)
        {
            return (UserSessionInfo)CacheHelper.GetCache(tokenGuid);
        }

        public List<UserSessionInfo> GetUserSessionInfoList()
        {
            List<UserSessionInfo> userSessionInfolist = (List<UserSessionInfo>)CacheHelper.GetCache("userSessionInfolist");
            List<UserSessionInfo> newUserSessionInfolist = new List<UserSessionInfo>();
            if (userSessionInfolist != null)
            {
                foreach (var userInfo in userSessionInfolist)
                {
                    var sessionInfo = (UserSessionInfo)CacheHelper.GetCache(userInfo.Token.ToString());
                    if (sessionInfo != null)
                    {
                        newUserSessionInfolist.Add(sessionInfo);
                    }
                }
            }
            CacheHelper.SetCache("userSessionInfolist", newUserSessionInfolist);
            return newUserSessionInfolist;
        }
    }
}
