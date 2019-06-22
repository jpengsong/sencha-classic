using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.SystemManage
{
    public class SysUserRoleEntity
    {
        public Guid SysUserRoleId { get; set; }
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
    }
}
