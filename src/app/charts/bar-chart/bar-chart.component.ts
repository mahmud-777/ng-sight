import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

// const SAMPLE_BARCHART_DATA: any[] = [
//   {data: [65, 59, 80, 81, 56, 54, 30], label: 'Q3 Sales'},
//   {data: [25, 39, 60, 91, 36, 54, 50], label: 'Q4 Sales'}

// ];

const SAMPLE_BARCHART_LABELS: string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  LineChart = [];
  BarChart = [];
  PieChart = [];

  constructor() { }

  // public barChartData: any[] = SAMPLE_BARCHART_DATA;
  // public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  // public barChartType: 'bar';
  // public barChartLegend: true;
  // public barChartOptions: any = {

  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  ngOnInit() {
   // LineChart :
   this.LineChart = new Chart('lineChart', {
      type : 'line',
      data : {
        labels : ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label : 'Number of Items Sold in Months',
          data : [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
          fill: false,
          lineTension: 0.2,
          borderColor: 'red',
          borderWidth: 1

        }]
      },
      options: {
        title: {
          text: 'Line Chart',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
   });
   // N

   // Bar Chart :
   this.BarChart = new Chart('BarChart', {
    type : 'bar',
    data : {
      labels : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label : '# of Votes Sold in Months',
        data : [9, 7, 3, 5, 2, 10],
        // fill: false,
        // lineTension: 0.2,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'

        ],
        borderWidth: 1

      }]
    },
    options: {
      title: {
        text: 'Bar Chart',
        display: true
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
 });

 // Pie Chart :
  this.PieChart = new Chart('pieChart', {
    type : 'pie',
    data : {
      labels : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label : '# of Votes Sold in Months',
        data : [9, 7, 3, 5, 2, 10],
      // fill: false,
      // lineTension: 0.2,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'

      ],
      borderWidth: 1

    }]
  },
  options: {
    title: {
      text: 'Pie Chart',
      display: true
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
   
  }

}
