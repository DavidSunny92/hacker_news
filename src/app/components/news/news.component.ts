import { Component, OnInit } from "@angular/core";

import { NewsService } from "src/app/services/news.service";
import { OnlineService } from "src/app/services/online.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  Headers = ["Comments", "VoteCount", "UpVote", "New Details"];
  allNews: any = [];
  chartAllNews: any = [];
  originalAllNews: any = [];
  start: number;
  end: number;
  oldVal: number;
  constructor(
    public newsService: NewsService,
    public onservice: OnlineService
  ) { }
  ngOnInit() {
    this.getLiveData();
    this.start = 0;
    this.end = 5;
  }

  public async getLiveData() {
    this.newsService.getData().subscribe((res) => {
      this.allNews = res;
      this.allNews = this.allNews.hits;
      this.onservice.allData.next(this.allNews.slice(this.start, this.end));
    });
  }

  upvotes(val, index) {
    this.allNews[this.start + index].points = Number(val) + 500;
    this.onservice.allData.next(this.allNews.slice(this.start, this.end));
  }
  hideNews(index) {
    this.allNews.splice(this.start + index, 1);
    this.onservice.allData.next(this.allNews.slice(this.start, this.end));
  }
  navigate(url) {
    window.location.href = url;
  }
  getPagenationStartVal(event) {
    this.start = event;

    if (this.start + 5 != this.end) {
      this.onservice.allData.next(this.allNews.slice(this.start, this.end - 5));
    }
  }
  getPagenationEndVal(event) {
    this.end = event;

    if (this.start + 5 != this.end) {
      this.onservice.allData.next(this.allNews.slice(this.start + 5, this.end));
    }
  }
}



// https://appdividend.com/2018/09/12/angular-charts-example-tutorial/
// https://canvasjs.com/docs/charts/basics-of-creating-html5-chart/updating-chart-options/
// https://hacker-news.azurewebsites.net/
