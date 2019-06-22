using ConsoleApplication1.Model;
using NPOI.SS.UserModel;
using NPOI.SS.Util;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        private static readonly string path = AppDomain.CurrentDomain.BaseDirectory.Replace("\\bin\\Debug\\", "\\Templete"); //路径

        private static readonly string templetePath = path + "\\5月四轮十维评估结果-0627-总部.xlsx"; //模板存放路径

        private static readonly string newFileName = path + "\\导出文件.xlsx";  //生成新文件

        private static readonly string summarySheetName = "1、四轮驱动汇总表";

        private static readonly string[] provinces = { "安徽", "北京", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川", "天津", "西藏", "新疆", "云南", "浙江", "重庆" };

        private static List<WheelDrive> wheelDriveList = new List<WheelDrive>(); //四轮驱动汇总表

        private static DataTable dataTable = new DataTable();  //数据整理

        public static List<CompeteMap> competeMaps = new List<CompeteMap>(); //竞对应对表

        private static Dictionary<string, string> formulas = new Dictionary<string, string>();//算法公式

        private static Dictionary<string, string> indicatorScorelocation = new Dictionary<string, string>(); //指标得分位置

        static void Main(string[] args)
        {
            XSSFWorkbook workbook = new XSSFWorkbook(new FileStream(templetePath, FileMode.Open, FileAccess.Read));

            //初始化数据
            wheelDriveList = InitData.InitWheelDriveData(workbook, summarySheetName);
            dataTable = InitData.InitDataTable(workbook);
            competeMaps = InitData.InitCompeteMap(workbook);
            formulas = InitData.InitFormula(workbook);

            using (var fs = new FileStream(newFileName, FileMode.Create, FileAccess.ReadWrite))
            {
                CreateSheet0(workbook);
                CreateSheet1(workbook);
                CreateSheet2(workbook);
                CreateSheet3(workbook);
                for (int i = 0; i < workbook.NumberOfSheets; i++)
                {
                    ISheet sheet = workbook.GetSheetAt(i);
                    if (sheet.SheetName == "移动业务" || sheet.SheetName == "家庭业务" || sheet.SheetName == "政企业务" || sheet.SheetName == "新业务")
                    {
                        sheet.SetColumnWidth(0, 30 * 256);
                        Utilty.AddWorkbookSheetICellBorderLine(workbook, sheet);
                    }
                }
                workbook.Write(fs);
            }
        }

        public static void CreateSheet0(XSSFWorkbook workbook)
        {
            var style = Utilty.Style(14, workbook);
            var redStyle = Utilty.RedStyle(14, workbook);
            var bodyStyle = Utilty.CreateNormalStyle(12, workbook);//正常
            ICellStyle numberStyle = Utilty.CreateNormalStyletwo(12, workbook);
            indicatorScorelocation = new Dictionary<string, string>();
            //初始化首列
            FillFirstCol(workbook, "移动业务", style, redStyle, bodyStyle);
            //初始化子维度
            FillSubDimResultSheet(workbook, "移动业务", bodyStyle, numberStyle);
            //初始化四轮十维汇总
            FillBusiResultSheet(workbook, "移动业务", style, redStyle, bodyStyle);
            //初始化维度汇总
            FillDimResultSheet(workbook, "移动业务", bodyStyle);
        }

        public static void CreateSheet1(XSSFWorkbook workbook)
        {
            var style = Utilty.Style(14, workbook);
            var redStyle = Utilty.RedStyle(14, workbook);
            var bodyStyle = Utilty.CreateNormalStyle(12, workbook);//正常
            var numberStyle = Utilty.CreateNormalStyletwo(12, workbook);
            indicatorScorelocation = new Dictionary<string, string>();
            //初始化首列
            FillFirstCol(workbook, "家庭业务", style, redStyle, bodyStyle);
            //初始化子维度
            FillSubDimResultSheet(workbook, "家庭业务", bodyStyle, numberStyle);
            //初始化四轮十维汇总
            FillBusiResultSheet(workbook, "家庭业务", style, redStyle, bodyStyle);
            //初始化维度汇总
            FillDimResultSheet(workbook, "家庭业务", bodyStyle);
        }

        public static void CreateSheet2(XSSFWorkbook workbook)
        {
            var style = Utilty.Style(14, workbook);
            var redStyle = Utilty.RedStyle(14, workbook);
            var bodyStyle = Utilty.CreateNormalStyle(12, workbook);//正常
            var numberStyle = Utilty.CreateNormalStyletwo(12, workbook);
            indicatorScorelocation = new Dictionary<string, string>();
            //初始化首列
            FillFirstCol(workbook, "政企业务", style, redStyle, bodyStyle);
            //初始化子维度
            FillSubDimResultSheet(workbook, "政企业务", bodyStyle, numberStyle);
            //初始化四轮十维汇总
            FillBusiResultSheet(workbook, "政企业务", style, redStyle, bodyStyle);
            //初始化维度汇总
            FillDimResultSheet(workbook, "政企业务", bodyStyle);
        }

        public static void CreateSheet3(XSSFWorkbook workbook)
        {
            var style = Utilty.Style(14, workbook);
            var redStyle = Utilty.RedStyle(14, workbook);
            var bodyStyle = Utilty.CreateNormalStyle(12, workbook);//正常
            var numberStyle = Utilty.CreateNormalStyletwo(12, workbook);
            indicatorScorelocation = new Dictionary<string, string>();
            //初始化首列
            FillFirstCol(workbook, "新业务", style, redStyle, bodyStyle);
            //初始化子维度
            FillSubDimResultSheet(workbook, "新业务", bodyStyle, numberStyle);
            //初始化四轮十维汇总
            FillBusiResultSheet(workbook, "新业务", style, redStyle, bodyStyle);
            //初始化维度汇总
            FillDimResultSheet(workbook, "新业务", bodyStyle);
        }

        //增加首列
        public static void FillFirstCol(XSSFWorkbook workbook, string sheetName, ICellStyle style, ICellStyle redStyle, ICellStyle bodyStyle)
        {
            ISheet sheet = workbook.CreateSheet(sheetName);
            string[] cvalue = { "四轮驱动", "维度", "子维度", "指标", "分值", "反向", "基准值", "挑战值", "全网", "最优", "最差" };

            for (int i = 0; i < cvalue.Length; i++)
            {
                IRow row = sheet.CreateRow(i);
                ICell cell = row.CreateCell(0);
                cell.SetCellValue(cvalue[i]);
                if (cvalue[i] == "基准值" || cvalue[i] == "挑战值")
                {
                    cell.CellStyle = redStyle;
                }
                else
                {
                    cell.CellStyle = style;
                }
            }

            for (int i = 0; i < provinces.Length; i++)
            {
                IRow row = sheet.CreateRow(cvalue.Length + i);
                ICell cell = row.CreateCell(0);
                cell.SetCellValue(provinces[i]);
                cell.CellStyle = bodyStyle;
            }
        }

        //增加轮子或维度汇总
        public static void FillBusiResultSheet(XSSFWorkbook workbook, string sheetName, ICellStyle style, ICellStyle redStyle, ICellStyle bodyStyle)
        {
            ISheet sheet = workbook.GetSheet(sheetName);

            ICell cell_0_1 = sheet.GetRow(0).CreateCell(1);
            cell_0_1.SetCellValue("5月得分及排名");
            cell_0_1.CellStyle = bodyStyle;

            ICell cell_7_1 = sheet.GetRow(7).CreateCell(1);
            cell_7_1.SetCellValue("省份");
            cell_7_1.CellStyle = style;

            ICell cell_7_2 = sheet.GetRow(7).CreateCell(2);
            cell_7_2.SetCellValue("总分");
            cell_7_2.CellStyle = style;

            ICell cell_7_3 = sheet.GetRow(7).CreateCell(3);
            cell_7_3.SetCellValue("排名");
            cell_7_3.CellStyle = style;

            for (int i = 0; i < provinces.Length; i++)
            {
                IRow rowI = sheet.GetRow(11 + i);
                var startRow = 12 + i;

                //省份
                ICell cell_1 = rowI.CreateCell(1);
                cell_1.CellFormula = "A" + startRow;
                cell_1.CellStyle = bodyStyle;

                //总分
                ICell cell_2 = rowI.CreateCell(2);
                string cellFormula = "({0})*100";
                List<string> cellFormulaList = new List<string>();
                foreach (var item in indicatorScorelocation)
                {
                    if (Convert.ToInt32(item.Key.Split('_')[1]) == startRow)
                    {
                        cellFormulaList.Add(item.Key.Replace("_", ""));
                    }
                }
                if (cellFormulaList.Count > 0)
                {
                    cell_2.CellFormula = cellFormula.Replace("{0}", string.Join("+", cellFormulaList));
                }
                cell_2.CellStyle = bodyStyle;

                //排名
                ICell cell_3 = rowI.CreateCell(3);
                cell_3.CellFormula = "RANK(C" + startRow + ",C$12:C$42,0)";
                cell_3.CellStyle = bodyStyle;
            }

            sheet.AddMergedRegion(new CellRangeAddress(0, 6, 1, 3));
            sheet.AddMergedRegion(new CellRangeAddress(7, 10, 1, 1));
            sheet.AddMergedRegion(new CellRangeAddress(7, 10, 2, 2));
            sheet.AddMergedRegion(new CellRangeAddress(7, 10, 3, 3));

            sheet.CreateFreezePane(4, 11, 5, 12);
        }

        //子维度汇总
        public static void FillSubDimResultSheet(XSSFWorkbook workbook, string sheetName, ICellStyle bodyStyle, ICellStyle numberstyle)
        {
            ISheet sheet = workbook.GetSheet(sheetName);

            ISheet sheet1 = workbook.GetSheet("3.1移动业务");
            ICell celll = sheet1.GetRow(12).GetCell(6);

            var list = wheelDriveList.Where(m => m.Column_0.Contains(sheetName)).ToList();

            //四轮驱动
            int driveStart = 4;
            IRow row0 = sheet.GetRow(0);
            ICell row_0_4 = row0.CreateCell(driveStart);
            row_0_4.CellFormula = list[0].Column_0_Number;
            row_0_4.CellStyle = bodyStyle;
            int range0 = Utilty.GetIndicatrLength(list);
            sheet.AddMergedRegion(new CellRangeAddress(0, 0, 4, 4 + range0));

            //维度
            int dimensionStart = 4;
            int subDimensionStart = 4;
            int indicatorStart = 4;
            IRow row1 = sheet.GetRow(1);
            foreach (string dimensionName in list.Select(m => m.Column_1).Distinct().ToList())
            {
                var dimensions = list.Where(m => m.Column_1 == dimensionName).ToList(); //驱动下的维度
                ICell row_1 = row1.CreateCell(dimensionStart);
                int dimensionEnd = dimensionStart + Utilty.GetIndicatrLength(dimensions);
                row_1.CellFormula = dimensions[0].Column_1_Number;
                row_1.CellStyle = bodyStyle;
                sheet.AddMergedRegion(new CellRangeAddress(1, 1, dimensionStart, dimensionEnd));
                dimensionStart = dimensionEnd + 1;

                //子维度
                IRow row2 = sheet.GetRow(2);
                foreach (string subDimensionName in dimensions.Select(m => m.Column_2).Distinct().ToList())
                {
                    var subDimensions = dimensions.Where(m => m.Column_2 == subDimensionName).ToList(); //维度下的子维度
                    ICell row_2 = row2.CreateCell(subDimensionStart);
                    int subDimensionEnd = subDimensionStart + Utilty.GetIndicatrLength(subDimensions);
                    row_2.CellFormula = subDimensions[0].Column_2_Number;
                    row_2.CellStyle = bodyStyle;
                    sheet.AddMergedRegion(new CellRangeAddress(2, 2, subDimensionStart, subDimensionEnd));
                    subDimensionStart = subDimensionEnd + 1;

                    //指标
                    IRow row3 = sheet.GetRow(3);
                    IRow row4 = sheet.GetRow(4);
                    IRow row5 = sheet.GetRow(5);
                    IRow row6 = sheet.GetRow(6);
                    IRow row7 = sheet.GetRow(7);
                    IRow row8 = sheet.GetRow(8);
                    IRow row9 = sheet.GetRow(9);
                    IRow row10 = sheet.GetRow(10);
                    foreach (string indicatorName in subDimensions.Select(m => m.Column_4).Distinct().ToList())
                    {
                        var indicators = subDimensions.Where(m => m.Column_4 == indicatorName).ToList(); //子维度下的指标
                        int indicatorEnd = indicatorStart + Utilty.GetIndicatrLength(indicators);

                        //指标名称
                        ICell row_3 = row3.CreateCell(indicatorStart);
                        row_3.CellFormula = indicators[0].Column_4_Number;
                        row_3.CellStyle = bodyStyle;

                        //分值
                        ICell row_4 = row4.CreateCell(indicatorStart);
                        row_4.CellFormula = "VLOOKUP(" + Utilty.excelNum2Name(row_4.ColumnIndex) + "4," + InitData.formulaSummarySheetName + "$E:$K,3,0)";
                        row_4.CellStyle = bodyStyle;

                        //反向
                        ICell row_5 = row5.CreateCell(indicatorStart);
                        row_5.CellFormula = "VLOOKUP(" + Utilty.excelNum2Name(row_5.ColumnIndex) + "4," + InitData.formulaSummarySheetName + "$E:$K,2,0)";
                        row_5.CellStyle = bodyStyle;


                        if (indicators[0].Column_3 != "")
                        {

                            var competeMap = competeMaps.FirstOrDefault(m => m.indicatorCode_2 == indicators[0].Column_3);
                            //指标
                            if (competeMap == null)
                            {
                                //基准值
                                ICell row_6_0 = row6.CreateCell(indicatorStart);
                                row_6_0.CellFormula = "VLOOKUP(" + Utilty.excelNum2Name(row_6_0.ColumnIndex) + "4," + InitData.formulaSummarySheetName + "$E:$K,4,0)";
                                row_6_0.CellStyle = numberstyle;

                                //挑战值
                                ICell row_7 = row7.CreateCell(indicatorStart);
                                row_7.CellFormula = "VLOOKUP(" + Utilty.excelNum2Name(row_7.ColumnIndex) + "4," + InitData.formulaSummarySheetName + "$E:$K,5,0)";
                                row_7.CellStyle = bodyStyle;

                                //得分
                                ICell row6_1 = row6.CreateCell(indicatorStart + 1);
                                row6_1.CellStyle = bodyStyle;
                                row6_1.SetCellValue("得分");

                                //有效总分
                                ICell row6_2 = row6.CreateCell(indicatorStart + 2);
                                row6_2.CellStyle = bodyStyle;
                                row6_2.SetCellValue("有效总分");

                                //排名
                                ICell row6_3 = row6.CreateCell(indicatorStart + 3);
                                row6_3.CellStyle = bodyStyle;
                                row6_3.SetCellValue("排名");

                                sheet.AddMergedRegion(new CellRangeAddress(6, 7, (indicatorStart + 1), (indicatorStart + 1)));
                                sheet.AddMergedRegion(new CellRangeAddress(6, 7, (indicatorStart + 2), (indicatorStart + 2)));
                                sheet.AddMergedRegion(new CellRangeAddress(6, 7, indicatorStart + 3, (indicatorStart + 3)));

                                //全网
                                ICell row8_indicatorStart = row8.CreateCell(indicatorStart);

                                foreach (DataRow dr in dataTable.Rows)
                                {
                                    if (Convert.ToString(dr["指标编码"]) == indicators[0].Column_3)
                                    {
                                        if (!string.IsNullOrEmpty(Convert.ToString(dr["全网"])))
                                        {
                                            row8_indicatorStart.SetCellValue(Convert.ToDouble(dr["全网"]));
                                            row8_indicatorStart.CellStyle = numberstyle;
                                            break;
                                        }
                                    }
                                }

                                //最优-得分
                                ICell row9_indicatorStart_0 = row9.CreateCell(indicatorStart);
                                row9_indicatorStart_0.CellFormula = "IF(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$6=0,MAX(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$42),MIN(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$42))";
                                row9_indicatorStart_0.CellStyle = bodyStyle;

                                //最差-得分
                                ICell row10_indicatorStart_0 = row10.CreateCell(indicatorStart);
                                row10_indicatorStart_0.CellFormula = "IF(" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$6=0,MIN(" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$42),MAX(" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$42))";
                                row10_indicatorStart_0.CellStyle = bodyStyle;


                                //最优-省份
                                ICell row9_indicatorStart_1 = row9.CreateCell(indicatorStart + 1);
                                row9_indicatorStart_1.CellFormula = "INDEX($A$12:$A$42,MATCH(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "10," + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$42,0))";
                                row9_indicatorStart_1.CellStyle = bodyStyle;

                                //最差-省份
                                ICell row10_indicatorStart_1 = row10.CreateCell(indicatorStart + 1);
                                row10_indicatorStart_1.CellFormula = "INDEX($A$12:$A$42,MATCH(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "11," + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$42,0))";
                                row10_indicatorStart_1.CellStyle = bodyStyle;

                                //地方省份算法
                                for (int i = 0; i < provinces.Length; i++)
                                {
                                    IRow rowI = sheet.GetRow(i + 11);
                                    ICell rowI_0 = rowI.CreateCell(indicatorStart);
                                    foreach (DataRow dr in dataTable.Rows)
                                    {
                                        if (Convert.ToString(dr["指标编码"]) == indicators[0].Column_3)
                                        {
                                            if (!string.IsNullOrEmpty(Convert.ToString(dr[provinces[i]])))
                                            {
                                                rowI_0.SetCellValue(Convert.ToDouble(dr[provinces[i]]));
                                                rowI_0.CellStyle = numberstyle;
                                                break;
                                            }
                                        }
                                    }
                                    string ruleValue = string.Empty;
                                    if (!string.IsNullOrWhiteSpace(indicators[0].Column_12))
                                    {
                                        ruleValue = formulas[indicators[0].Column_12];
                                    }
                                    string letter = Utilty.excelNum2Name(rowI.GetCell(indicatorStart).ColumnIndex);
                                    int startRow = (12 + i);

                                    //得分算法
                                    ICell rowI_1 = rowI.CreateCell(indicatorStart + 1);
                                    indicatorScorelocation.Add(Utilty.excelNum2Name(rowI_1.ColumnIndex) + "_" + startRow, indicators[0].Column_1);
                                    if (!string.IsNullOrEmpty(ruleValue))
                                    {
                                        if (indicators[0].Column_12 == "门限法")
                                        {
                                            rowI_1.CellFormula = ruleValue.Replace("{0}", letter).Replace("{1}", startRow.ToString());
                                        }
                                        else if (indicators[0].Column_12 == "区间法")
                                        {
                                            rowI_1.CellFormula = ruleValue.Replace("{0}", letter).Replace("{1}", startRow.ToString());
                                        }
                                        rowI_1.CellStyle = numberstyle;
                                    }

                                    //有效总分
                                    ICell rowI_2 = rowI.CreateCell(indicatorStart + 2);
                                    rowI_2.CellFormula = "IF(" + letter + startRow + "<>\"\"," + letter + "$5,0)";
                                    rowI_2.CellStyle = numberstyle;

                                    //排名
                                    ICell rowI_3 = rowI.CreateCell(indicatorStart + 3);
                                    rowI_3.CellFormula = "IF(" + letter + "$6=0,RANK(" + letter + startRow + "," + letter + "$12:" + letter + "$42,0),RANK(" + letter + startRow + "," + letter + "$12:" + letter + "$42,1))";
                                    rowI_3.CellStyle = bodyStyle;
                                }
                            }

                           //竞对指标
                            else
                            {
                                ICell row_6_0 = row6.CreateCell(indicatorStart);
                                row_6_0.SetCellValue(Utilty.competeMaps(competeMaps, indicators[0].Column_3, true));
                                row_6_0.CellStyle = bodyStyle;

                                ICell row_6_1 = row6.CreateCell(indicatorStart + 1);
                                row_6_1.SetCellValue(Utilty.competeMaps(competeMaps, indicators[0].Column_3, false));
                                row_6_1.CellStyle = bodyStyle;

                                //得分
                                ICell row6_2 = row6.CreateCell(indicatorStart + 2);
                                row6_2.CellStyle = bodyStyle;
                                row6_2.SetCellValue("得分");

                                //有效总分
                                ICell row6_3 = row6.CreateCell(indicatorStart + 3);
                                row6_3.CellStyle = bodyStyle;
                                row6_3.SetCellValue("有效总分");

                                //排名
                                ICell row6_4 = row6.CreateCell(indicatorStart + 4);
                                row6_4.CellStyle = bodyStyle;
                                row6_4.SetCellValue("排名");

                                //挑战值
                                ICell row_7 = row7.CreateCell(indicatorStart);
                                row_7.CellFormula = "VLOOKUP(" + Utilty.excelNum2Name(row_7.ColumnIndex) + "4," + InitData.formulaSummarySheetName + "$E:$K,5,0)";
                                row_7.CellStyle = bodyStyle;

                                sheet.AddMergedRegion(new CellRangeAddress(6, 7, (indicatorStart + 2), (indicatorStart + 2)));
                                sheet.AddMergedRegion(new CellRangeAddress(6, 7, indicatorStart + 3, (indicatorStart + 3)));
                                sheet.AddMergedRegion(new CellRangeAddress(6, 7, indicatorStart + 4, (indicatorStart + 4)));


                                ///////全网
                                //全网-本网
                                ICell row8_indicatorStart_0 = row8.CreateCell(indicatorStart);
                                foreach (DataRow dr in dataTable.Rows)
                                {
                                    if (Convert.ToString(dr["指标编码"]) == competeMap.indicatorCode_1)
                                    {
                                        if (!string.IsNullOrEmpty(Convert.ToString(dr["全网"])))
                                        {
                                            row8_indicatorStart_0.SetCellValue(Convert.ToDouble(dr["全网"]));
                                            row8_indicatorStart_0.CellStyle = numberstyle;
                                            break;
                                        }
                                    }
                                }

                                //全网-竞对
                                ICell row8_indicatorStart_1 = row8.CreateCell(indicatorStart + 1);
                                row8_indicatorStart_1.CellStyle = numberstyle;
                                foreach (DataRow dr in dataTable.Rows)
                                {
                                    if (Convert.ToString(dr["指标编码"]) == competeMap.indicatorCode_3)
                                    {
                                        if (!string.IsNullOrEmpty(Convert.ToString(dr["全网"])))
                                        {
                                            row8_indicatorStart_1.SetCellValue(Convert.ToDouble(dr["全网"]));
                                            break;
                                        }
                                    }
                                }

                                //最优-得分
                                ICell row9_indicatorStart_0 = row9.CreateCell(indicatorStart);
                                row9_indicatorStart_0.CellFormula = "IF(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$6=0,MAX(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$42),MIN(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$42))";
                                row9_indicatorStart_0.CellStyle = bodyStyle;

                                //最差-得分
                                ICell row10_indicatorStart_0 = row10.CreateCell(indicatorStart);
                                row10_indicatorStart_0.CellFormula = "IF(" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$6=0,MIN(" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$42),MAX(" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row10_indicatorStart_0.ColumnIndex) + "$42))";
                                row10_indicatorStart_0.CellStyle = bodyStyle;

                                //最优-省份
                                ICell row9_indicatorStart_2 = row9.CreateCell(indicatorStart + 1);
                                row9_indicatorStart_2.CellFormula = "INDEX($A$12:$A$42,MATCH(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "10," + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$42,0))";
                                row9_indicatorStart_2.CellStyle = bodyStyle;

                                //最差-省份
                                ICell row10_indicatorStart_2 = row10.CreateCell(indicatorStart + 1);
                                row10_indicatorStart_2.CellFormula = "INDEX($A$12:$A$42,MATCH(" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "11," + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$12:" + Utilty.excelNum2Name(row9_indicatorStart_0.ColumnIndex) + "$42,0))";
                                row10_indicatorStart_2.CellStyle = bodyStyle;

                                //地方省份算法
                                for (int i = 0; i < provinces.Length; i++)
                                {
                                    IRow rowI = sheet.GetRow(i + 11);
                                    ICell rowI_0 = rowI.CreateCell(indicatorStart);
                                    ICell rowI_1 = rowI.CreateCell(indicatorStart + 1);

                                    foreach (DataRow dr in dataTable.Rows)
                                    {
                                        if (Convert.ToString(dr["指标编码"]) == competeMap.indicatorCode_1)
                                        {
                                            if (!string.IsNullOrEmpty(Convert.ToString(dr[provinces[i]])))
                                            {
                                                rowI_0.SetCellValue(Convert.ToDouble(dr[provinces[i]]));
                                                rowI_0.CellStyle = numberstyle;
                                                break;
                                            }
                                        }
                                    }

                                    foreach (DataRow dr in dataTable.Rows)
                                    {
                                        if (Convert.ToString(dr["指标编码"]) == competeMap.indicatorCode_3)
                                        {
                                            if (!string.IsNullOrEmpty(Convert.ToString(dr[provinces[i]])))
                                            {
                                                rowI_1.SetCellValue(Convert.ToDouble(dr[provinces[i]]));
                                                rowI_1.CellStyle = numberstyle;
                                                break;
                                            }
                                        }
                                    }

                                    string ruleValue = string.Empty;
                                    if (!string.IsNullOrWhiteSpace(indicators[0].Column_12))
                                    {
                                        ruleValue = formulas[indicators[0].Column_12];
                                    }
                                    string letter_0 = Utilty.excelNum2Name(rowI.GetCell(indicatorStart).ColumnIndex);
                                    string letter_1 = Utilty.excelNum2Name(rowI.GetCell(indicatorStart).ColumnIndex + 1);
                                    string letter_2 = Utilty.excelNum2Name(rowI.GetCell(indicatorStart).ColumnIndex + 2);
                                    int startRow = (12 + i);

                                    //得分
                                    ICell rowI_2 = rowI.CreateCell(indicatorStart + 2);
                                    indicatorScorelocation.Add(Utilty.excelNum2Name(rowI_2.ColumnIndex) + "_" + (i + 12), indicators[0].Column_1);
                                    if (indicators[0].Column_12 == "竞对法")
                                    {
                                        rowI_2.CellFormula = ruleValue.Replace("{0}", letter_0).Replace("{1}", letter_1).Replace("{2}", startRow.ToString());
                                        rowI_2.CellStyle = numberstyle;
                                    }

                                    //有效总分
                                    ICell rowI_3 = rowI.CreateCell(indicatorStart + 3);
                                    rowI_3.CellFormula = "IF(OR(" + letter_0 + "" + startRow + "=\"\"," + letter_1 + "" + startRow + "=\"\"),0," + letter_0 + "$5)";
                                    rowI_3.CellStyle = numberstyle;

                                    //排名
                                    ICell rowI_4 = rowI.CreateCell(indicatorStart + 4);
                                    rowI_4.CellFormula = "IF(" + letter_0 + "$6=0,RANK(" + letter_2 + startRow + "," + letter_2 + "$12:" + letter_2 + "$42,0),RANK(" + letter_2 + startRow + "," + letter_2 + "$12:" + letter_2 + "$42,1))";
                                    rowI_4.CellStyle = bodyStyle;
                                }
                            }
                        }
                        sheet.AddMergedRegion(new CellRangeAddress(3, 3, indicatorStart, indicatorEnd));
                        sheet.AddMergedRegion(new CellRangeAddress(4, 4, indicatorStart, indicatorEnd));
                        sheet.AddMergedRegion(new CellRangeAddress(5, 5, indicatorStart, indicatorEnd));
                        indicatorStart = indicatorEnd + 1;

                    }
                }

            }
        }

        //维度汇总
        public static void FillDimResultSheet(XSSFWorkbook workbook, string sheetName, ICellStyle bodyStyle)
        {
            ISheet sheet = workbook.GetSheet(sheetName);
            var list = wheelDriveList.Where(m => m.Column_0.Contains(sheetName)).ToList();

            //维度
            IRow row0 = sheet.GetRow(0);
            int dimensionStart = 5 + Utilty.GetIndicatrLength(list);
            foreach (string dimensionName in list.Select(m => m.Column_1).Distinct().ToList())
            {
                var dimensions = list.Where(m => m.Column_1 == dimensionName).ToList(); //驱动下的维度

                ICell row_0 = row0.CreateCell(dimensionStart);
                int dimensionEnd = dimensionStart + 2;
                row_0.SetCellValue(dimensionName);
                row_0.CellStyle = bodyStyle;

                IRow row7 = sheet.GetRow(7);

                ICell cell_7_0 = row7.CreateCell(dimensionStart);
                cell_7_0.CellStyle = bodyStyle;
                cell_7_0.SetCellValue("省份");

                ICell cell_7_1 = row7.CreateCell(dimensionStart + 1);
                cell_7_1.CellStyle = bodyStyle;
                cell_7_1.SetCellValue("总分");

                ICell cell_7_2 = row7.CreateCell(dimensionStart + 2);
                cell_7_2.CellStyle = bodyStyle;
                cell_7_2.SetCellValue("排名");

                sheet.AddMergedRegion(new CellRangeAddress(0, 6, dimensionStart, dimensionEnd));
                sheet.AddMergedRegion(new CellRangeAddress(7, 10, dimensionStart, dimensionStart));
                sheet.AddMergedRegion(new CellRangeAddress(7, 10, dimensionStart + 1, dimensionStart + 1));
                sheet.AddMergedRegion(new CellRangeAddress(7, 10, dimensionStart + 2, dimensionStart + 2));

                //维度汇总省份
                for (int i = 0; i < provinces.Length; i++)
                {
                    ICell rowI_dimensionStart0 = sheet.GetRow(11 + i).CreateCell(dimensionStart);
                    ICell rowI_dimensionStart1 = sheet.GetRow(11 + i).CreateCell(dimensionStart + 1);
                    ICell rowI_dimensionStart2 = sheet.GetRow(11 + i).CreateCell(dimensionStart + 2);

                    //省份
                    rowI_dimensionStart0.SetCellValue(provinces[i]);
                    rowI_dimensionStart0.CellStyle = bodyStyle;

                    //总分
                    string cellFormula = "({0})*100";
                    List<string> cellFormulaList = new List<string>();
                    int startRow = 12 + i;

                    foreach (var item in indicatorScorelocation)
                    {
                        if (item.Value == dimensionName && Convert.ToInt32(item.Key.Split('_')[1]) == startRow)
                        {
                            cellFormulaList.Add(item.Key.Replace("_", ""));
                        }
                    }
                    if (cellFormulaList.Count > 0)
                    {
                        rowI_dimensionStart1.CellFormula = cellFormula.Replace("{0}", string.Join("+", cellFormulaList));
                    }
                    rowI_dimensionStart1.CellStyle = bodyStyle;

                    //排名
                    string colName = Utilty.excelNum2Name(rowI_dimensionStart1.ColumnIndex);
                    rowI_dimensionStart2.CellFormula = "RANK(" + colName + startRow + "," + colName + "$12:" + colName + "$42,0)";
                    rowI_dimensionStart2.CellStyle = bodyStyle;

                }
                dimensionStart = dimensionEnd + 1;
            }
        }
    }
}

