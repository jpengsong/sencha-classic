using CRMS.Model.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Utility.Application
{
    public interface IBusinessBase
    {
        QueryResult<T> SqlQuery<T>(string sqlId, object parameterObject);

        List<T> ExecuteQuery<T>(string sqlId, object parameterObject);

        T QueryObject<T>(string sqlId, object parameterObject);

        void QueryObject(string sqlId, object parameterObject);

        int Insert(string sqlId, object parameterObject);

        int Update(string sqlId, object parameterObject);

        int Delete(string sqlId, object parameterObject);
    }
}
