using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Business.SystemManage
{
    interface ISysRoleBusiness
    {
        /// <summary>
        /// 获取角色分页列表
        /// </summary>
        /// <param name="queryCondition"></param>
        /// <returns></returns>
        QueryResult<SysRoleEntity> GetSysRolePage(QueryCondition queryCondition);

        /// <summary>
        /// 获取所有角色
        /// </summary>
        /// <returns></returns>
        IList<SysRoleEntity> GetAllSysRole();

        /// <summary>
        /// 新增角色
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int AddSysRole(SysRoleEntity entity);

        /// <summary>
        /// 编辑角色
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int EditSysRole(SysRoleEntity entity);

        /// <summary>
        /// 删除角色
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        int DeleteSysRole(string ids);
        
        /// <summary>
        /// 获取某一角色下的菜单
        /// </summary>
        /// <returns></returns>
        IList<SysMenuButtonDetailEntity> GetSysMenuRoleByRule(Hashtable hashtable);

        /// <summary>
        /// 添加角色菜单
        /// </summary>
        /// <returns></returns>
        int AddSysMenuRole(Hashtable hashtable);
        
    }
}
