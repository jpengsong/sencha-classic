using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using CRMS.Utility.Application;
using CRMS.Utility.Infrastructure;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Business.SystemManage
{
    public class SysOrgBusiness : BusinessBase, ISysOrgBusiness
    {
        public IList<SysOrgEntity> GetSysOrgTreeByRule()
        {
            return ExecuteQuery<SysOrgEntity>("getSysOrgAll", null);
        }

        public QueryResult<SysOrgEntity> GetSysOrgPage(string data)
        {
            QueryCondition condition = JsonConvert.DeserializeObject<QueryCondition>(data);
            return SqlQuery<SysOrgEntity>("getSysOrgPage", condition.GetHashTable());
        }

        public SysOrgEntity AddSysOrg(SysOrgEntity entity)
        {
            Hashtable hashTable = new Hashtable();
            hashTable.Add("OrgName", entity.OrgName);
            var list = ExecuteQuery<SysOrgEntity>("getSysOrgByRule", hashTable);
            if (list.Count > 0)
            {
                throw new ArgumentException("组织机构不允许重复");
            }
            entity.ModifyUserId = entity.CreateUserId = SessionContext.UserInfo.UserID;
            entity.ModifyUserName = entity.CreateUserName = SessionContext.UserInfo.UserName;
            Insert("insertSysOrg", entity);
            return entity;
        }

        public SysOrgEntity EditSysOrg(SysOrgEntity entity)
        {
            Hashtable hashTable = new Hashtable();
            hashTable.Add("OrgName", entity.OrgName);
            var list = ExecuteQuery<SysOrgEntity>("getSysOrgByRule", hashTable);
            if (list.Count > 1)
            {
                throw new ArgumentException("组织机构不允许重复");
            }
            entity.ModifyUserId = SessionContext.UserInfo.UserID;
            entity.CreateUserName = SessionContext.UserInfo.UserName;
            int rs = Update("updateSysOrg", entity);
            if (rs > 0)
            {
                return entity;
            }
            else
            {
                throw new ArgumentException("更新失败");
            }
        }

        public int DeleteSysOrg(string ids)
        {
            return Delete("deleteSysOrg", string.Join("','", ids.Split(',')));
        }

    }
}
