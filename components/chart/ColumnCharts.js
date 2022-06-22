import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});


export default class ColumnCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "React",
          data: [12, 15, 19, 18, 19, 20, 19.9, 21, 22],
        },
        {
          name: "Vue",
          data: [10, 14, 14.2, 13, 14, 15, 18, 17, 16],
        },
        {
          name: "Angular",
          data: [7, 8, 10, 11, 12, 13, 13, 11, 12],
        },
        {
          name: "Django",
          data: [5.5, 4.1, 6, 6, 6.5, 6.8, 6.2, 7.3, 8],
        },
        {
          name: "jQuery",
          data: [2, 2.1, 3.6, 4.6, 5.5, 6.8, 5.2, 5.3, 5],
        },
        // {
        //   name: "Express",
        //   data: [3.5, 4.1, 6, 6, 5, 4.8, 4.2, 4.3, 4.8],
        // },
        {
          name: "Ruby",
          data: [3.5, 4.1, 3.6, 2.6, 4.5, 4.8, 5.2, 5.3, 4.4],
        },
        {
          name: "Flask",
          data: [3.5, 4.1, 3.6, 2.6, 4.5, 4.8, 5.2, 5.3, 4.3],
        },
        // {
        //   name: "Spring",
        //   data: [3.5, 4.1, 3.6, 2.6, 4.5, 4.8, 5.2, 5.3, 4],
        // },
        {
          name: "ASP.NET",
          data: [4, 5, 6, 5.3, 5, 4.5, 4, 3.8, 3.7],
        },
        {
          name: "Laravel",
          data: [3, 2, 5.5, 5, 3.5, 3, 4.3, 4, 3.1],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        theme:{
          mode:'light'
        },
        xaxis: {
          categories: [
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
          ],
        },
        yaxis: {
          title: {
            text: "% (درصد)",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "% " + val + " ";
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <div style={{width:'100%'}} id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
