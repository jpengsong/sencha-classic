using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Business.SystemManage
{
    interface ISysMenuButtonBusiness
    {
        /// <summary>
        /// 添加菜单按钮
        /// </summary>
        /// <param name="?"></param>
        /// <returns></returns>
        SysMenuButtonDetailEntity AddSysMenuButton(SysMenuButtonEntity entity);

        /// <summary>
        /// 编辑菜单按钮
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        SysMenuButtonDetailEntity EditSysMenuButton(SysMenuButtonEntity entity);

        /// <summary>
        /// 删除菜单按钮
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int DeleteSysMenuButton(string ids);
    }
}
