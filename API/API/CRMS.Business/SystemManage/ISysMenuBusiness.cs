using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Business.SystemManage
{
    interface ISysMenuBusiness
    {
        /// <summary>
        /// 获取用户下所有菜单列表
        /// </summary>
        /// <returns></returns>
        IList<SysMenuEntity> GetSysUserMenuByRule();

        /// <summary>
        /// 获取所有菜单详情
        /// </summary>
        /// <returns></returns>
        IList<SysMenuButtonDetailEntity> GetSysUserMenuDetailByRule();

        /// <summary>
        /// 添加菜单
        /// </summary>
        /// <param name="?"></param>
        /// <returns></returns>
        SysMenuButtonDetailEntity AddSysMenu(SysMenuEntity entity);

        /// <summary>
        /// 编辑菜单
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        SysMenuButtonDetailEntity EditSysMenu(SysMenuEntity entity);

        /// <summary>
        /// 删除菜单
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int DeleteSysMenu(string ids);
    }
}
