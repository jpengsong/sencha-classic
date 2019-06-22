using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.Base
{
    public class RequestDataEntity
    {
        public string TokenGuid { get; set; }
        public string Data { get; set; }

        public  T ToDeserialize<T>()
        {
            T t = JsonConvert.DeserializeObject<T>(this.Data);
            return t;
        }

    }
}
