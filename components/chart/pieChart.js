import React, { Component } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [65, 80, 13, 43, 10],
      options: {
        colors: ['#14C38E', '#47B5FF', '#064663', '#06283D', '#000'],
        // stroke: {
        //   curve: "straight",
        // },
        chart: {
          
          type: "pie",
        },
        labels: ["اکسیژن", "رطوبت", "آمونیک", "کربن دی اکسید", "کربن مونو اکسید"],
        responsive: [
          {
            
          },
        ],
      },
    };
  }

  render() {
    return (
      <>
        <div id="chart" style={{margin:"auto",padding:"0",width:'100%',height:"100%"}}>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="pie"
          />
        </div>
        
      </>
    );
  }
}
