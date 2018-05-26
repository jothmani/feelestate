import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-storagespace',
  templateUrl: './chart-storagespace.component.html',
  styleUrls: ['./chart-storagespace.component.css']
})
export class ChartStoragespaceComponent {
  storageChart = [];
  constructor() { }

  ngAfterViewInit() {
    this.storageChart =  new Chart(document.getElementById("storespace_chart"), {
      type: 'pie',
      data: {
        labels: ["Used space", "Available space"],
        datasets: [{
          label: "Feelestate server space usage (MB)",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [2500,3500]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Server storage space usage (MB)'
        }
      }
    });
  }

}
