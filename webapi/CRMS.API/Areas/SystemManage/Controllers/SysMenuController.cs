using CRMS.Business.SystemManage;
using CRMS.Model.SystemManage;
using CRMS.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CRMS.API.SystemManage.Controllers
{
    public class SysMenuController : BaseApiController
    {

        private readonly SysMenuBusiness sysMenuBusiness = new SysMenuBusiness();

        [HttpGet]
        public HttpResponseMessage GetSysUserMenuByRule()
        {
            var result = GetMessage(sysMenuBusiness.GetSysUserMenuByRule());
            return result;
        }

        [HttpGet]
        public HttpResponseMessage GetSysMenuButtonTreeDetail()
        {
            var result = GetMessage(sysMenuBusiness.GetSysUserMenuDetailByRule());
            return result;
        }

        [HttpPost]
        public HttpResponseMessage AddSysMenu()
        {
            var requestData = new RequestData().Data;
            var sysMenu = requestData.ToDeserialize<SysMenuEntity>();
            var rs = sysMenuBusiness.AddSysMenu(sysMenu);
            return GetMessage(rs);
        }

        [HttpPut]
        public HttpResponseMessage EditSysMenu()
        {
            var requestData = new RequestData().Data;
            var sysMenu = requestData.ToDeserialize<SysMenuEntity>();
            var rs = sysMenuBusiness.EditSysMenu(sysMenu);
            return GetMessage(rs);
        }

        [HttpDelete]
        public HttpResponseMessage DeleteSysMenu()
        {
            var requestData = new RequestData().Data;
            var rs = sysMenuBusiness.DeleteSysMenu(requestData.Data);
            return GetMessage(rs);
        }
    }
}