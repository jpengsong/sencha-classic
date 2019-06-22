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
namespace CRMS.Business.SystemManage
{
    public class SysUserBusiness : BusinessBase, ISysUserBusiness
    {
        public QueryResult<SysUserEntity> GetSysUserPage(QueryCondition condition)
        {
            QueryResult<SysUserEntity> queryResult = SqlQuery<SysUserEntity>("getSysUserForPage", condition.GetHashTable());
            return queryResult;
        }

        public SysUserEntity LoginSysUser(string userName, string userPassWord)
        {
            Hashtable hashTable = new Hashtable();
            hashTable.Add("LoginName", userName);
            hashTable.Add("LoginPassWord", userPassWord);
            return QueryObject<SysUserEntity>("loginSysUser", hashTable);
        }

        public int AddSysUser(SysUserEntity entity)
        {

            Hashtable hashTable = new Hashtable();
            hashTable.Add("LoginName", entity.LoginName);
            var list = ExecuteQuery<SysUserEntity>("getSysUserByRule", hashTable);
            if (list.Count > 0)
            {
                throw new ArgumentException("账户不允许重复");
            }
            entity.ModifyUserId = entity.CreateUserId = SessionContext.UserInfo.UserID;
            entity.ModifyUserName = entity.CreateUserName = SessionContext.UserInfo.UserName;
            return Insert("insertSysUser", entity);
        }

        public int EditSysUser(SysUserEntity entity)
        {
            Hashtable hashTable = new Hashtable();
            hashTable.Add("LoginName", entity.LoginName);
            var list = ExecuteQuery<SysUserEntity>("getSysUserByRule", hashTable);
            if (list.Count > 1)
            {
                throw new ArgumentException("账户不允许重复");
            }
            entity.ModifyUserId = SessionContext.UserInfo.UserID;
            entity.CreateUserName = SessionContext.UserInfo.UserName;
            return Update("updateSysUser", entity);
        }

        public int DeleteSysUser(string ids)
        {
            return Delete("deleteSysUser", string.Join("','", ids.Split(',')));
        }

    }
}
