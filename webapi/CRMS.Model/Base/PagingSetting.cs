using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.Base
{
    public class PagingSetting
    {
        public int PageCount { get; set; }
        public int PageIndex { get; set; }
        public string SortBy { get; set; }
        public string SortOrder { get; set; }
    }
}
