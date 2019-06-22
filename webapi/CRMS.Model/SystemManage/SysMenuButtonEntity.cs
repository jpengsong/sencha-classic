using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.SystemManage
{
    public class SysMenuButtonEntity
    {
        public Guid SysMenuButtonId { get; set; }
        public Guid MenuId { get; set; }
        public string BtnCode { get; set; }
        public string BtnName { get; set; }
        public string Description { get; set; }
        public int Order { get; set; }
        public int IsEnable { get; set; }
        public int IsDel { get; set; }
    }
}
