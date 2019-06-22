using CRMS.Business.SystemManage;
using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using CRMS.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace CRMS.API.Areas.SystemManage.Controllers
{
    public class SysUserController : BaseApiController
    {
        private readonly SysUserBusiness sysUserBusiness = new SysUserBusiness();

        [HttpGet]
        public HttpResponseMessage GetSysUserPage()
        {
            var requestData = new RequestData().Data;
            QueryCondition condition = requestData.ToDeserialize<QueryCondition>();
            var result = GetMessage(sysUserBusiness.GetSysUserPage(condition));
            return result;
        }

        [HttpPost]
        public HttpResponseMessage AddSysUser()
        {
            var requestData = new RequestData().Data;
            var sysUser = requestData.ToDeserialize<SysUserEntity>();
            int rs = sysUserBusiness.AddSysUser(sysUser);
            return GetMessage(rs);
        }

        [HttpPut]
        public HttpResponseMessage EditSysUser()
        {
            var requestData = new RequestData().Data;
            var sysUser = requestData.ToDeserialize<SysUserEntity>();
            int rs = sysUserBusiness.EditSysUser(sysUser);
            return GetMessage(rs);
        }

        [HttpDelete]
        public HttpResponseMessage DeleteSysUser()
        {
            var requestData = new RequestData().Data;
            int rs = sysUserBusiness.DeleteSysUser(requestData.Data);
            return GetMessage(rs);
        }

        [HttpGet]
        public HttpResponseMessage GetSysUserRoleByRule()
        {
            var requestData = new RequestData().Data;
            var sysUser = requestData.ToDeserialize<SysUserEntity>();
            int rs = sysUserBusiness.AddSysUser(sysUser);
            return GetMessage(rs);
        }

        [HttpPost]
        public HttpResponseMessage Upload()
        {
            var requestData = new RequestData().Data;
            HttpFileCollection hfc = System.Web.HttpContext.Current.Request.Files;
            string path = System.AppDomain.CurrentDomain.BaseDirectory + "UploadFiles\\";
            for (int i = 0; i < hfc.AllKeys.Length; i++)
            {
                string fileName = hfc[i].FileName;
                hfc[i].SaveAs(path + fileName);
            }
            return GetMessage("上传成功！");
        }
    }
}
