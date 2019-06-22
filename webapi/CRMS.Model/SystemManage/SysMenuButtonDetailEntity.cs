using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.SystemManage
{

    public class SysMenuButtonDetailEntity
    {
        public Guid  SysMenuId { get; set; }
        public Guid  ParentId { get; set; }
        public string MenuCode { get; set; }
        public string MenuName { get; set; }
        public string ViewType { get; set; }
        public string PageType { get; set; }
        public string Description { get; set; }
        public int Order { get; set; }
        public int IsEnable { get; set; }
        public string IconCls { get; set; }
        public int Type { get; set; }
    }
}
