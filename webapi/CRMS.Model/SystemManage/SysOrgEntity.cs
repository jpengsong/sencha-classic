using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.SystemManage
{
    public class SysOrgEntity
    {
        public Guid SysOrgId { get; set; }
        public Guid ParentOrgId { get; set; }
        public int? Level { get; set; }
        public string OrgName { get; set; }
        public string OrgCode { get; set; }
        public string Description { get; set; }
        public int? Sort { get; set; }
        public Guid? CreateUserId { get; set; }
        public string CreateUserName { get; set; }
        public DateTime? CreateDate { get; set; }
        public Guid? ModifyUserId { get; set; }
        public string ModifyUserName { get; set; }
        public DateTime? ModifyDate { get; set; }
    }
}
