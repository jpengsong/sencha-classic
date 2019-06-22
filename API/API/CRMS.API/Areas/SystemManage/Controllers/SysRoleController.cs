using CRMS.Business.SystemManage;
using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using CRMS.Utility;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CRMS.API.Areas.SystemManage.Controllers
{
    public class SysRoleController : BaseApiController
    {
        private readonly SysRoleBusiness sysRoleBusiness = new SysRoleBusiness();

        [HttpGet]
        public HttpResponseMessage GetSysRolePage()
        {
            var requestData = new RequestData().Data;
            QueryCondition condition = requestData.ToDeserialize<QueryCondition>();
            var result = GetMessage(sysRoleBusiness.GetSysRolePage(condition));
            return result;
        }

        [HttpPost]
        public HttpResponseMessage AddSysRole()
        {
            var requestData = new RequestData().Data;
            var sysRole = requestData.ToDeserialize<SysRoleEntity>();
            int rs = sysRoleBusiness.AddSysRole(sysRole);
            return GetMessage(rs);
        }

        [HttpPut]
        public HttpResponseMessage EditSysRole()
        {
            var requestData = new RequestData().Data;
            var sysRole = requestData.ToDeserialize<SysRoleEntity>();
            int rs = sysRoleBusiness.EditSysRole(sysRole);
            return GetMessage(rs);
        }

        [HttpDelete]
        public HttpResponseMessage DeleteSysRole()
        {
            var requestData = new RequestData().Data;
            int rs = sysRoleBusiness.DeleteSysRole(requestData.Data);
            return GetMessage(rs);
        }
        
        [HttpGet]
        public HttpResponseMessage GetSysRoleAll() 
        {
            var requestData = new RequestData().Data;
            var result = GetMessage(sysRoleBusiness.GetAllSysRole());
            return result;
        }

        [HttpGet]
        public HttpResponseMessage GetSysMenuRoleByRule()
        {
            var requestData = new RequestData().Data;
            Hashtable hashtable = JsonConvert.DeserializeObject<Hashtable>(requestData.Data);
            var list = sysRoleBusiness.GetSysMenuRoleByRule(hashtable);
            return GetMessage(list);
        }

        [HttpPost]
        public HttpResponseMessage AddSysMenuRole() 
        {
            var requestData = new RequestData().Data;
            Hashtable hashtable = JsonConvert.DeserializeObject<Hashtable>(requestData.Data);
             int rs = sysRoleBusiness.AddSysMenuRole(hashtable);
            return GetMessage(rs);
        }
    }
}
