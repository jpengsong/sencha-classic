using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.Base
{
    public class QueryResult<T>
    {
        public IList<T> List { get; set; }

        public int RecordCount { get; set; }

    }
}
