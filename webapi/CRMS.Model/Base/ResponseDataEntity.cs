using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.Base
{
    public class ResponseDataEntity
    {
        public string Code { get; set; }

        public bool Success { get; set; }

        public dynamic Data { get; set; }

        public string Message { get; set; }
    }
}
