import { Component, OnInit, Input } from "@angular/core";
import { Chart } from "chart.js";
import { NewsService } from "src/app/services/news.service";
import { OnlineService } from "src/app/services/online.service";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnInit {
  constructor(public newsService: NewsService, public onser: OnlineService) { }
  allNewsData: any = [];

  data: any;
  auther = [];
  votes = [];
  chart = [];
  key: boolean;
  serviceData: any;
  ngOnInit() {
    this.onser.allData.subscribe((data) => {
      this.allNewsData = data;
      if (this.allNewsData.length > 0) {
        this.getChartData();
      }
    });
  }
  getChartData() {
    this.auther = [];
    this.votes = [];
    this.allNewsData.forEach((y, i) => {
      this.auther.push(y.created_at_i);
      this.votes.push(y.points);
    });

    this.getChart(this.auther, this.votes);
  }

  getChart(auther, votes) {
    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: auther,
        datasets: [
          {
            data: votes,
            borderColor: "#3cba9f",
            fill: false,
            lineTension: 0,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: true,
            },
          ],
          yAxes: [
            {
              display: true,
            },
          ],
        },
      },
    });
  }

  ngAfterViewInit() {
    // this.getChart();
  }
}
