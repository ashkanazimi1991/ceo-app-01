import chartSectionStyle from "./ChartSection.module.css";
import React from "react";
import ColumnCharts from "./ColumnCharts";


export default function ChartSection() {
  return (
    <div className={chartSectionStyle["sectionMain"]}>
      {/* <div className={chartSectionStyle["lineChart"]}>
           </div> */}
      <div className={chartSectionStyle["pieChart"]}>
        <h2> رتبه بندی فریم ورک های جهان بر حسب کارایی و محبوبیت </h2>
            <ColumnCharts/>
       </div>
    </div>
  );
}
