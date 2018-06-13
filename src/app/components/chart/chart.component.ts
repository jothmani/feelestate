import { Component, OnInit ,Input} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'feelestate-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  storageChart = [];
  @Input() title: string;
  @Input() used_sp: number;
  @Input() remaining_sp: number;
  constructor() { }

  ngAfterViewInit() {
    this.storageChart =  new Chart(document.getElementById("fst_chart"), {
      type: 'pie',
      data: {
        labels: ["Used space", "Available space"],
        datasets: [{
          label: "Feelestate server space usage (MB)",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [this.used_sp,this.remaining_sp]
        }]
      },
      options: {
        title: {
          display: true,
          text: this.title
        }
      }
    });
  }

}
