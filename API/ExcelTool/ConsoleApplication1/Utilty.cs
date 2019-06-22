using ConsoleApplication1.Model;
using NPOI.HSSF.UserModel;
using NPOI.HSSF.Util;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    public class Utilty
    {
        public static string excelNum2Name(int index)
        {
            List<string> chars = new List<string>();
            do
            {
                if (chars.Count > 0) index--;
                chars.Insert(0, ((char)(index % 26 + (int)'A')).ToString());
                index = (int)((index - index % 26) / 26);
            } while (index > 0);

            return String.Join(string.Empty, chars.ToArray());
        }

        public static object GetCellValue(ICell icell)
        {
            object obj = string.Empty;
            if (icell != null)
            {
                if (icell.CellType == CellType.String)
                {
                    obj = icell.StringCellValue;
                }
                else if (icell.CellType == CellType.Numeric)
                {
                    //日期类型
                    if (HSSFDateUtil.IsCellDateFormatted(icell))
                    {
                        obj = icell.DateCellValue;
                    }
                    //其他数字类型
                    else
                    {
                        obj = icell.NumericCellValue;
                    }
                }
                else if (icell.CellType == CellType.Boolean)
                {
                    obj = icell.BooleanCellValue;
                }
                else if (icell.CellType == CellType.Blank)
                {
                    obj = string.Empty;
                }
                else if (icell.CellType == CellType.Error)
                {
                    obj = icell.ErrorCellValue;
                }
                else if (icell.CellType == CellType.Formula)
                {
                    obj = icell.CellFormula;
                }
            }
            return obj;
        }

        public static int GetIndicatrLength(List<WheelDrive> list)
        {
            var startIndex = 0;
            for (int i = 0; i < list.Count; i++)
            {
                int index = 4;
                if (list[i].Column_3 != "")
                {
                    if (Program.competeMaps.FirstOrDefault(m => m.indicatorCode_2 == list[i].Column_3) != null) 
                    {
                        index = 5;
                    }
                }
                startIndex += index;
            }
            return startIndex - 1;
        }

        /// <summary>
        /// 字体加粗
        /// </summary>
        /// <param name="workbook"></param>
        /// <returns></returns>
        public static ICellStyle Style(short fontSize, IWorkbook workbook)
        {
            ICellStyle style = workbook.CreateCellStyle();
            IFont font1 = workbook.CreateFont();
            font1.FontHeightInPoints = fontSize;
            font1.FontName = "微软雅黑";
            font1.Boldweight = (short)FontBoldWeight.Bold;
            style.SetFont(font1);
            style.WrapText = true;
            return style;
        }

        /// <summary>
        /// 字体红色
        /// </summary>
        /// <param name="workbook"></param>
        /// <returns></returns>
        public static ICellStyle RedStyle(short fontSize, IWorkbook workbook)
        {
            ICellStyle style = workbook.CreateCellStyle();
            IFont font1 = workbook.CreateFont();
            font1.FontHeightInPoints = fontSize;
            font1.FontName = "微软雅黑";
            font1.Boldweight = (short)FontBoldWeight.Bold;
            font1.Color = (short)FontColor.Red;
            style.SetFont(font1);
            style.WrapText = true;
            return style;
        }

        /// <summary>
        /// 正常字体
        /// </summary>
        /// <param name="workbook"></param>
        /// <returns></returns>
        public static ICellStyle CreateNormalStyle(short fontSize, IWorkbook workbook)
        {
            ICellStyle style = workbook.CreateCellStyle();
            IFont font = workbook.CreateFont();
            font.FontName = "微软雅黑";
            font.FontHeightInPoints = fontSize;
            //设置字体加粗样式
            font.Boldweight = (short)FontBoldWeight.Normal;
            //使用SetFont方法将字体样式添加到单元格样式中 
            style.SetFont(font);
            style.WrapText = true;
            return style;
        }

        /// <summary>
        /// 字体格式化
        /// </summary>
        /// <param name="style"></param>
        /// <param name="fontSize"></param>
        /// <param name="wb"></param>
        /// <returns></returns>
        public static ICellStyle CreateNormalStyletwo(short fontSize, IWorkbook workbook)
        {
            ICellStyle style = workbook.CreateCellStyle();
            IDataFormat dataformat = workbook.CreateDataFormat();
            //新建一个字体样式对象
            IFont font = workbook.CreateFont();
            font.FontName = "微软雅黑";
            font.FontHeightInPoints = fontSize;
            //设置字体加粗样式
            font.Boldweight = (short)FontBoldWeight.Normal;
            //使用SetFont方法将字体样式添加到单元格样式中 
            style.SetFont(font);
            style.DataFormat = dataformat.GetFormat("0.00");
            style.WrapText = true;
            return style;
        }

        public static void AddWorkbookSheetICellBorderLine(IWorkbook workbook, ISheet sheet)
        {
            for (int i = 0; i < sheet.PhysicalNumberOfRows; i++)
            {
                IRow row = sheet.GetRow(i);
                if (row != null)
                {
                    for (int j = 0; j < row.LastCellNum; j++)
                    {
                        ICell cell = HSSFCellUtil.GetCell(row, (short)j);
                        ICellStyle style = cell.CellStyle;
                        style.BorderBottom = BorderStyle.Thin;
                        style.BorderLeft = BorderStyle.Thin;
                        style.BorderRight = BorderStyle.Thin;
                        style.BorderTop = BorderStyle.Thin;
                        style.Alignment = NPOI.SS.UserModel.HorizontalAlignment.Center;
                        style.VerticalAlignment = VerticalAlignment.Center;
                        style.WrapText = true;
                        cell.CellStyle = style;
                    }
                }
            }
        }

        public static string competeMaps(List<CompeteMap> list, string indicatorCode, bool rs)
        {
            var entity = list.FirstOrDefault(m => m.indicatorCode_2 == indicatorCode);
            string indicatorName = string.Empty;
            if (entity != null)
            {
                //本网
                if (rs)
                {
                    indicatorName = entity.indicatorName_1;
                }
                //不是本网
                else
                {
                    indicatorName = entity.indicatorName_3;
                }

                if (indicatorName.Contains("移动"))
                {
                    indicatorName = "移动";
                }
                else if (indicatorName.Contains("电信"))
                {
                    indicatorName = "电信";
                }
                else if (indicatorName.Contains("联通"))
                {
                    indicatorName = "联通";
                }
                else if (indicatorName.Contains("咪咕"))
                {
                    indicatorName = "咪咕";
                }
                else if (indicatorName.Contains("爱奇艺"))
                {
                    indicatorName = "爱奇艺";
                }
                else if (indicatorName.Contains("酷狗"))
                {
                    indicatorName = "酷狗";
                }
                else if (indicatorName.Contains("网易云"))
                {
                    indicatorName = "网易云";
                }
                else if (indicatorName.Contains("QQ"))
                {
                    indicatorName = "QQ";
                }
                else if (indicatorName.Contains("和飞信"))
                {
                    indicatorName = "和飞信";
                }
                else if (indicatorName.Contains("微信"))
                {
                    indicatorName = "微信";
                }
                else if (indicatorName.Contains("MM商城"))
                {
                    indicatorName = "MM商城";
                }
                else if (indicatorName.Contains("360手机助手"))
                {
                    indicatorName = "360手机助手";
                }
                else if (indicatorName.Contains("小米应用商店"))
                {
                    indicatorName = "小米应用商店";
                }
                else if (indicatorName.Contains("Appstore"))
                {
                    indicatorName = "Appstore";
                }
                else if (indicatorName.Contains("应用宝"))
                {
                    indicatorName = "应用宝";
                }
            }
            return indicatorName;
        }
    }
}
