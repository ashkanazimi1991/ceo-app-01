import React, { Component } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default class LineCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "دما",
          data: [34, 33, 32,31,31,32, 31.5,33,31],
        },
      
        {
          name: "رطوبت ",
          data: [80,75, 70, 74, 73,73,70,71,72],
        },
       
       
      ],
      options: {
        chart: {
          type: "line",
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },

        grid: {
          row: {
            colors: ["#000", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.9,
          },
        },
        xaxis: {
          categories: [
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
          ],
        },
      },
    };
  }

  render() {
    return (
      <div
        id="chart"
        style={{ margin: "auto", padding: "0", width: "100%", height: "100%" }}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
        />
      </div>
    );
  }
}
