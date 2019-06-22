using CRMS.Model.Infrastructure;
using System;
namespace CRMS.Utility.Infrastructure
{
    public class SessionContext
    {

        public static UserSessionInfo UserInfo
        {
            get
            {
                return (UserSessionInfo)CacheHelper.GetCache(new RequestData().Data.TokenGuid);
            }
        }
    }
}
