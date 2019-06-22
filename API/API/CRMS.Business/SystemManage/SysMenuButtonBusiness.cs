using CRMS.Model.Base;
using CRMS.Model.SystemManage;
using IBatisNet.DataMapper;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CRMS.Business;
using CRMS.Utility;
using CRMS.Utility.Application;
using System.Collections;
using CRMS.Utility.Infrastructure;
namespace CRMS.Business.SystemManage
{
    public class SysMenuButtonBusiness : BusinessBase, ISysMenuButtonBusiness
    {

        public SysMenuButtonDetailEntity AddSysMenuButton(SysMenuButtonEntity entity)
        {
            Insert("insertSysMenuButton", entity);
            var detailEntity = new SysMenuButtonDetailEntity();
            detailEntity.SysMenuId = entity.SysMenuButtonId;
            detailEntity.ParentId = entity.MenuId;
            detailEntity.MenuName = entity.BtnName;
            detailEntity.MenuCode = entity.BtnCode;
            detailEntity.Description = entity.Description;
            detailEntity.Order = entity.Order;
            detailEntity.IsEnable = entity.IsEnable;
            detailEntity.Type = 1;
            return detailEntity;
        }

        public SysMenuButtonDetailEntity EditSysMenuButton(SysMenuButtonEntity entity)
        {
            Update("updateSysMenuButton", entity);
            var detailEntity = new SysMenuButtonDetailEntity();
            detailEntity.SysMenuId = entity.SysMenuButtonId;
            detailEntity.ParentId = entity.MenuId;
            detailEntity.MenuName = entity.BtnName;
            detailEntity.MenuCode = entity.BtnCode;
            detailEntity.Description = entity.Description;
            detailEntity.Order = entity.Order;
            detailEntity.IsEnable = entity.IsEnable;
            detailEntity.Type = 1;
            return detailEntity;
        }

        public int DeleteSysMenuButton(string ids)
        {
            return Delete("deleteSysMenuButton", string.Join("','", ids.Split(',')));
        }
    }
}
