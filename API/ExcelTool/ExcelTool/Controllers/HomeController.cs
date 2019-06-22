using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExcelTool.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {

            var path = AppDomain.CurrentDomain.BaseDirectory + "\\Templete\\5月四轮十维评估结果-0627-总部.xlsx";
            FileInfo info = new FileInfo(path);
            string fileName = AppDomain.CurrentDomain.BaseDirectory + "\\Templete\\" + DateTime.Now.ToString("yyyyMMddHHmmss") + ".xlsx";
            info.CopyTo(fileName);
            Stream stream = (Stream)System.IO.File.OpenRead(fileName);

            XSSFWorkbook workbook = new XSSFWorkbook(stream);
            ISheet sheet = workbook.CreateSheet("Sheet3");
            IRow row0 = sheet.CreateRow(0);
            ICell cell1 = row0.CreateCell(1);
            cell1.SetCellValue("123");
            //cell0.SetCellType(CellType.Formula);
            //cell0.CellFormula = "A1";
            //cell0.SetCellFormula("A1");
            //cell0.SetCellValue("ddd");
            workbook.Write(stream);
            stream.Close();

            return View();
        }
    }
}