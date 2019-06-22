using ConsoleApplication1.Model;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    public class InitData
    {
        public static readonly string formulaSummarySheetName = "'1、四轮驱动汇总表'!";

        public static List<WheelDrive> InitWheelDriveData(XSSFWorkbook workbook, string summarySheetName)
        {
            List<WheelDrive> wheelDriveList = new List<WheelDrive>();
            ISheet summarySheet = workbook.GetSheet(summarySheetName);

            string column_0_Name = string.Empty;
            string column_1_Name = string.Empty;
            string column_2_Name = string.Empty;

            string column_0_Name_Number = string.Empty;
            string column_1_Name_Number = string.Empty;
            string column_2_Name_Number = string.Empty;

            for (int i = 1; i < summarySheet.LastRowNum; i++)
            {
                IRow row = summarySheet.GetRow(i);
                ICell cell_0 = row.GetCell(0);
                if (cell_0.StringCellValue != "")
                {
                    column_0_Name = cell_0.StringCellValue;
                    column_0_Name_Number = formulaSummarySheetName + Utilty.excelNum2Name(cell_0.ColumnIndex) + (i + 1);

                }

                ICell cell_1 = row.GetCell(1);
                if (cell_1.StringCellValue != "")
                {
                    column_1_Name = cell_1.StringCellValue;
                    column_1_Name_Number = formulaSummarySheetName + Utilty.excelNum2Name(cell_1.ColumnIndex) + (i + 1);
                }

                ICell cell_2 = row.GetCell(2);
                if (cell_2.StringCellValue != "")
                {
                    column_2_Name = cell_2.StringCellValue;
                    column_2_Name_Number = formulaSummarySheetName + Utilty.excelNum2Name(cell_2.ColumnIndex) + (i + 1);
                };

                WheelDrive wheelDrive = new WheelDrive();
                wheelDrive.Column_0 = column_0_Name;
                wheelDrive.Column_0_Number = column_0_Name_Number;

                wheelDrive.Column_1 = column_1_Name;
                wheelDrive.Column_1_Number = column_1_Name_Number;

                wheelDrive.Column_2 = column_2_Name;
                wheelDrive.Column_2_Number = column_2_Name_Number;

                wheelDrive.Column_3 = row.GetCell(3).StringCellValue;
                wheelDrive.Column_4 = row.GetCell(4).StringCellValue;
                wheelDrive.Column_4_Number = formulaSummarySheetName + Utilty.excelNum2Name(row.GetCell(4).ColumnIndex) + (i + 1);

                wheelDrive.Column_12 = row.GetCell(12).StringCellValue;
                wheelDriveList.Add(wheelDrive);
            }
            return wheelDriveList;
        }

        public static DataTable InitDataTable(XSSFWorkbook workbook)
        {
            DataTable dt = new DataTable();
            ISheet sheet = workbook.GetSheet("数据整理");
            for (int i = 0; i < sheet.PhysicalNumberOfRows; i++)
            {
                ICell cell = sheet.GetRow(i).GetCell(0);
                DataColumn dc = new DataColumn();
                dc.ColumnName = cell.StringCellValue;
                dt.Columns.Add(dc);
            }
            int cellNum = sheet.GetRow(0).LastCellNum;

            for (int i = 1; i < cellNum; i++)
            {
                DataRow dr = dt.NewRow();
                for (int j = 0; j < sheet.PhysicalNumberOfRows; j++)
                {
                    ICell cell = sheet.GetRow(j).GetCell(i);
                    dr[sheet.GetRow(j).GetCell(0).ToString()] = Utilty.GetCellValue(cell);
                }
                dt.Rows.Add(dr);
            }
            return dt;
        }

        public static List<CompeteMap> InitCompeteMap(XSSFWorkbook workbook)
        {
            ISheet sheet = workbook.GetSheet("竞对指标对应表");
            List<CompeteMap> list = new List<CompeteMap>();
            for (int i = 2; i < sheet.PhysicalNumberOfRows; i++)
            {
                CompeteMap competeMap = new CompeteMap();
                IRow row = sheet.GetRow(i);

                competeMap.indicatorName_1 = Convert.ToString(row.GetCell(0));
                competeMap.indicatorCode_1 = Convert.ToString(row.GetCell(1));

                competeMap.indicatorName_2 = Convert.ToString(row.GetCell(2));
                competeMap.indicatorCode_2 = Convert.ToString(row.GetCell(3));

                competeMap.indicatorName_3 = Convert.ToString(row.GetCell(4));
                competeMap.indicatorCode_3 = Convert.ToString(row.GetCell(5));
                list.Add(competeMap);
            }
            return list;
        }

        public static Dictionary<string, string> InitFormula(XSSFWorkbook workbook)
        {
            ISheet sheet = workbook.GetSheet("算法公式");
            Dictionary<string, string> dictionary = new Dictionary<string, string>();
            for (int i = 0; i < 3; i++)
            {
                string key = sheet.GetRow(i).GetCell(0).StringCellValue;
                string value = sheet.GetRow(i).GetCell(1).StringCellValue;
                dictionary.Add(key, value);
            }
            return dictionary;
        }
    }
}
