import chartSectionStyle from "./ChartSection.module.css";
import React, { useState } from "react";
import LineCharts from "./lineCharts";
import PieChart from "./pieChart";



export default function ChartSection() {
//   const checkList = ["Apple", "Banana", "Tea", "Coffee"];
//   const [checked, setChecked] = useState([]);
//   const handleCheck = (event) => {
//     var updatedList = [...checked];
//     if (event.target.checked) {
//       updatedList = [...checked, event.target.value];
//     } else {
//       updatedList.splice(checked.indexOf(event.target.value), 1);
//     }
//     setChecked(updatedList);
//   };
//   // Return classes based on whether item is checked
// const isChecked = (item) =>
// checked.includes(item) ? "checked-item" : "not-checked-item";

  
  return (
    <div className={chartSectionStyle["sectionMain"]}>
      <div className={chartSectionStyle["lineChart"]}>
        <h2> نمودار مانیتورینگ دما و رطوبت </h2>
        <LineCharts />
      </div>
      <div className={chartSectionStyle["pieChart"]}>
        <h2> نمودار مانیتورینگ گازهای محیط</h2>
        <PieChart />
    
      </div>
    
      {/* <div className="checkList">
        <div className="title">کنترل دستگاه ها</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
        </div>
       </div>  */}
    </div>
  );
}
