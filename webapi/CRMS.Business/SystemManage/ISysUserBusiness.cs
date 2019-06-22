using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Business.SystemManage
{
    interface ISysUserBusiness
    {
        /// <summary>
        /// 获取分页
        /// </summary>
        /// <param name="condition"></param>
        /// <returns></returns>
        QueryResult<SysUserEntity> GetSysUserPage(QueryCondition condition);

        /// <summary>
        /// 获取登录用户
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="userPassWord"></param>
        /// <returns></returns>
        SysUserEntity LoginSysUser(string userName, string userPassWord);

        /// <summary>
        /// 添加用户
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        int AddSysUser(SysUserEntity entity);

        /// <summary>
        /// 编辑用户
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>

        int EditSysUser(SysUserEntity entity);

        /// <summary>
        /// 删除用户
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        int DeleteSysUser(string ids);
    }
}
