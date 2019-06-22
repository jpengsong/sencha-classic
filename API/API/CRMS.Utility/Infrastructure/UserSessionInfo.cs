using CRMS.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.Infrastructure
{
    public class UserSessionInfo
    {

        public UserSessionInfo(Guid token, string logonName, string logonPassWord, Guid userId, string userName)
        {
            Token = token;
            LogonName = logonName;
            LogonPassWord = logonPassWord;
            UserName = userName;
            UserID = userId;
            if (logonName.ToLower() == "admin")
            {
                IsSuperUser = true;
            }
        }

        public Guid Token { get; set; }

        public string LogonName { get; set; }

        public string LogonPassWord { get; set; }

        public Guid UserID { get; set; }

        public string UserName { get; set; }

        public bool IsSuperUser { get; set; }

    }
}
