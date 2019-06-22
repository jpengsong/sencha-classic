using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.SystemManage
{
    public class SysUserEntity
    {

        public Guid SysUserId { get; set; }
        public Guid OrgId { get; set; }
        public string UserName { get; set; }
        public string LoginName { get; set; }
        public string LoginPassWord { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public int IsEnable { get; set; }
        public Guid? CreateUserId { get; set; }
        public string CreateUserName { get; set; }
        public DateTime? CreateDate { get; set; }
        public Guid? ModifyUserId { get; set; }
        public string ModifyUserName { get; set; }
        public DateTime? ModifyDate { get; set; }
    }
}
