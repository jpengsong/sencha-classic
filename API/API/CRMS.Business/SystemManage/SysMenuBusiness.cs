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
    public class SysMenuBusiness : BusinessBase, ISysMenuBusiness
    {
        public IList<SysMenuEntity> GetSysUserMenuByRule()
        {
            Hashtable hsahtable = new Hashtable();
            hsahtable.Add("SysUserId", SessionContext.UserInfo.UserID);
            var result = ExecuteQuery<SysMenuEntity>("getSysUserMenuByRule", hsahtable);
            return result;
        }

        public IList<SysMenuButtonDetailEntity> GetSysUserMenuDetailByRule()
        {
            var result = ExecuteQuery<SysMenuButtonDetailEntity>("getSysUserMenuDetailByRule", null);
            return result;
        }

        public SysMenuButtonDetailEntity AddSysMenu(SysMenuEntity entity)
        {
            Insert("insertSysMenu", entity);
            var detailEntity = new SysMenuButtonDetailEntity();
            detailEntity.SysMenuId = entity.SysMenuId;
            detailEntity.MenuName = entity.MenuName;
            detailEntity.ViewType = entity.ViewType;
            detailEntity.PageType = entity.PageType;
            detailEntity.Description = entity.Description;
            detailEntity.Order = entity.Order;
            detailEntity.Type = 0;
            return detailEntity;
        }

        public SysMenuButtonDetailEntity EditSysMenu(SysMenuEntity entity)
        {
            Update("updateSysMenu", entity);
            var detailEntity = new SysMenuButtonDetailEntity();
            detailEntity.SysMenuId = entity.SysMenuId;
            detailEntity.MenuName = entity.MenuName;
            detailEntity.ViewType = entity.ViewType;
            detailEntity.PageType = entity.PageType;
            detailEntity.Description = entity.Description;
            detailEntity.Order = entity.Order;
            detailEntity.Type = 0;
            return detailEntity;
        }

        public int DeleteSysMenu(string ids)
        {
            return Delete("deleteSysMenu", string.Join("','", ids.Split(',')));
        }
    }
}
