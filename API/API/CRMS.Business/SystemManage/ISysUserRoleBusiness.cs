using CRMS.Model.SystemManage;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Business.SystemManage
{
    interface ISysUserRoleBusiness
    {

        /// <summary>
        /// 获取用户的角色ID
        /// </summary>
        /// <param name="hashtable"></param>
        /// <returns></returns>
        List<SysUserRoleEntity> GetSysUserRoleByRule(Hashtable hashtable);

        /// <summary>
        /// 保存用户的角色
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        int AddSysUserRole(Hashtable hashtable);
    }
}
