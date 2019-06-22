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
    public class SysMenuButtonController : BaseApiController
    {
        private readonly SysMenuButtonBusiness SysMenuButtonBusiness = new SysMenuButtonBusiness();

        [HttpPost]
        public HttpResponseMessage AddSysMenuButton()
        {
            var requestData = new RequestData().Data;
            var SysMenuButton = requestData.ToDeserialize<SysMenuButtonEntity>();
            var rs = SysMenuButtonBusiness.AddSysMenuButton(SysMenuButton);
            return GetMessage(rs);
        }

        [HttpPut]
        public HttpResponseMessage EditSysMenuButton()
        {
            var requestData = new RequestData().Data;
            var SysMenuButton = requestData.ToDeserialize<SysMenuButtonEntity>();
            var rs = SysMenuButtonBusiness.EditSysMenuButton(SysMenuButton);
            return GetMessage(rs);
        }

        [HttpDelete]
        public HttpResponseMessage DeleteSysMenuButton()
        {
            var requestData = new RequestData().Data;
            var rs = SysMenuButtonBusiness.DeleteSysMenuButton(requestData.Data);
            return GetMessage(rs);
        }
    }
}