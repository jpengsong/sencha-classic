using CRMS.Model.SystemManage;
using CRMS.Utility.Application;
using IBatisNet.DataMapper;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Business.SystemManage
{
    public class SysUserRoleBusiness : BusinessBase, ISysUserRoleBusiness
    {
        public List<SysUserRoleEntity> GetSysUserRoleByRule(Hashtable hashtable)
        {
            return ExecuteQuery<SysUserRoleEntity>("getSysUserRoleByRule", hashtable);
        }

        public int AddSysUserRole(Hashtable hashtable)
        {
            ISqlMapper sqlMap = Mapper.Instance();
            int rs = 0;
            try
            {
                sqlMap.BeginTransaction();
                List<SysUserRoleEntity> list = new List<SysUserRoleEntity>();
                Delete("deleteSysUserRole", hashtable["UserId"]);
                if (hashtable["RoleId"].ToString() != "")
                {
                    string[] roles = hashtable["RoleId"].ToString().Split(',');
                    foreach (string role in roles)
                    {
                        list.Add(new SysUserRoleEntity() { UserId = Guid.Parse(hashtable["UserId"].ToString()), RoleId = Guid.Parse(role.ToString()) });
                    }
                    Insert("insertSysUserRole", list);
                }

                sqlMap.CommitTransaction();
                rs = 1;
            }
            catch (Exception e)
            {
                sqlMap.RollBackTransaction();
                throw;
            }
            return rs;
        }
    }
}
