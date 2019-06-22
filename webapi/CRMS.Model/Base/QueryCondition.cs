using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRMS.Model.Base
{
    public class QueryCondition
    {
        public Hashtable QueryItems { get; set; }

        public PagingSetting PagingSetting { get; set; }

        public Hashtable GetHashTable()
        {
            Hashtable hashTable = new Hashtable();
            if (QueryItems != null)
            {
                foreach (var key in QueryItems.Keys)
                {
                    hashTable.Add(key, QueryItems[key]);
                }
            }

            if (PagingSetting != null)
            {
                if (!hashTable.ContainsKey("PageCount"))
                {
                    hashTable.Add("PageCount", PagingSetting.PageCount);
                }
                if (!hashTable.ContainsKey("PageIndex"))
                {
                    hashTable.Add("PageIndex", PagingSetting.PageIndex);
                }
                if (!hashTable.ContainsKey("SortBy"))
                {
                    hashTable.Add("SortBy", PagingSetting.SortBy);
                }
                if (!hashTable.ContainsKey("SortOrder"))
                {
                    hashTable.Add("SortOrder", PagingSetting.SortOrder);
                }
            }
            return hashTable;
        }
    }
}
