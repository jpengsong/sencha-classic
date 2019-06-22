using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using CRMS.Utility.Application;
using CRMS.Utility.Infrastructure;
using IBatisNet.DataMapper;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Business.SystemManage
{
    public class SysRoleBusiness : BusinessBase, ISysRoleBusiness
    {
        public QueryResult<SysRoleEntity> GetSysRolePage(QueryCondition queryCondition)
        {
            return SqlQuery<SysRoleEntity>("getSysRolePage", queryCondition.GetHashTable());
        }

        public IList<SysRoleEntity> GetAllSysRole() 
        {
            return ExecuteQuery<SysRoleEntity>("getAllSysRole",null);
        }

        public int AddSysRole(SysRoleEntity entity)
        {
            Hashtable hashTable = new Hashtable();
            hashTable.Add("RoleName", entity.RoleName);
            var list = ExecuteQuery<SysRoleEntity>("getSysRoleByRule", hashTable);
            if (list.Count > 0)
            {
                throw new ArgumentException("角色名称不允许重复");
            }
            entity.ModifyUserId = entity.CreateUserId = SessionContext.UserInfo.UserID;
            entity.CreateUserName = entity.ModifyUserName = SessionContext.UserInfo.UserName;
            return Insert("insertSysRole", entity);
        }

        public int EditSysRole(SysRoleEntity entity)
        {
            Hashtable hashTable = new Hashtable();
            hashTable.Add("RoleName", entity.RoleName);
            var list = ExecuteQuery<SysRoleEntity>("getSysRoleByRule", hashTable);
            if (list.Count > 1)
            {
                throw new ArgumentException("角色名称不允许重复");
            }
            entity.ModifyUserId = SessionContext.UserInfo.UserID;
            entity.CreateUserName = SessionContext.UserInfo.UserName;
            return Update("updateSysRole", entity);
        }

        public int DeleteSysRole(string ids)
        {
            return Delete("deleteSysRole", string.Join("','", ids.Split(',')));
        }

        public IList<SysMenuButtonDetailEntity> GetSysMenuRoleByRule(Hashtable hashtable)
        {
            return ExecuteQuery<SysMenuButtonDetailEntity>("getSysMenuRoleByRule", hashtable);
        }

        public int AddSysMenuRole(Hashtable hashtable)
        {
            ISqlMapper sqlMap = Mapper.Instance();
            int rs = 0;
            try
            {
                sqlMap.BeginTransaction();
                Delete("deleteMenuRole", hashtable["RoleId"]);
                List<SysMenuRoleEntity> list = JsonConvert.DeserializeObject<List<SysMenuRoleEntity>>(JsonConvert.SerializeObject(hashtable["List"]));
                foreach (var item in list)
                {
                    item.CreateUserId = SessionContext.UserInfo.UserID;
                    item.CreateUserName = SessionContext.UserInfo.UserName;
                }
                rs = Insert("insertMenuRole", list);
                sqlMap.CommitTransaction();
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
