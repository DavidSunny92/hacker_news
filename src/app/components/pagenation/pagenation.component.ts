import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pagenation",
  templateUrl: "./pagenation.component.html",
  styleUrls: ["./pagenation.component.css"],
})
export class PagenationComponent implements OnInit {
  constructor() { }
  @Output() pagenationEndVal = new EventEmitter();
  @Output() pagenationStartVal = new EventEmitter();
  startVal: number = 0;
  endVal: number = 5;
  ngOnInit() {
    // this.pagenationEndVal.emit(5);
  }
  endValFun(val) {
    this.startVal = val;
    this.endVal = this.endVal + 5;
    this.pagenationEndVal.emit(this.endVal);
    this.pagenationStartVal.emit(this.startVal);
  }
  startValFun(val) {
    this.endVal = val;
    this.startVal = this.startVal - 5;
    this.pagenationStartVal.emit(this.startVal);
    this.pagenationEndVal.emit(this.endVal);
  }
}
