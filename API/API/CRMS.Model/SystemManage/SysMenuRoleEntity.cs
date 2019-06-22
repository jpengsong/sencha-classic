using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.SystemManage
{
    public class SysMenuRoleEntity
    {
        public Guid SysMenuRoleId { get; set; }
        public Guid MenuId { get; set; }
        public Guid RoleId { get; set; }
        public int Type { get; set; }
        public Guid CreateUserId { get; set; }
        public string CreateUserName { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
