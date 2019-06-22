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
    interface ISysOrgBusiness
    {
        /// <summary>
        /// 获取组织机构树数据
        /// </summary>
        /// <returns></returns>
        IList<SysOrgEntity> GetSysOrgTreeByRule();

        /// <summary>
        /// 获取组织机构分页
        /// </summary>
        /// <param name="string"></param>
        /// <returns></returns>
        QueryResult<SysOrgEntity> GetSysOrgPage(string data);
    }
}
