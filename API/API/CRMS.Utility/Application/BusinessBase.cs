using CRMS.Model.Base;
using IBatisNet.DataMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Utility.Application
{
    public  abstract class BusinessBase : IBusinessBase
    {
        public QueryResult<T> SqlQuery<T>(string sqlId, object parameterObject)
        {
            ISqlMapper sqlMap = Mapper.Instance();
            var entity = new QueryResult<T>() { List = sqlMap.QueryForList<T>(sqlId, parameterObject), RecordCount = sqlMap.QueryForObject<int>(sqlId + "Count", parameterObject) };
            return entity;
        }

        public List<T> ExecuteQuery<T>(string sqlId, object parameterObject)
        {
            ISqlMapper sqlMap = Mapper.Instance();
            return sqlMap.QueryForList<T>(sqlId, parameterObject).ToList();
        }

        public T QueryObject<T>(string sqlId, object parameterObject)
        {
            ISqlMapper sqlMap = Mapper.Instance();
            return sqlMap.QueryForObject<T>(sqlId, parameterObject);
        }

        public void QueryObject(string sqlId, object parameterObject)
        {
            ISqlMapper sqlMap = Mapper.Instance();
            sqlMap.QueryForObject(sqlId, parameterObject);
        }

        public int Insert(string sqlId, object parameterObject)
        {
            ISqlMapper sqlMap = Mapper.Instance();
            sqlMap.Insert(sqlId, parameterObject);
            return 1;
        }

        public int Update(string sqlId, object parameterObject)
        {
            ISqlMapper sqlMap = Mapper.Instance();
            return sqlMap.Update(sqlId, parameterObject);
        }
        public int Delete(string sqlId, object parameterObject) 
        {
            ISqlMapper sqlMap = Mapper.Instance();
            return sqlMap.Delete(sqlId, parameterObject);
        }
    }
}
