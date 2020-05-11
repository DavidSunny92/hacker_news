import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OnlineService {
  public endVal = new BehaviorSubject<number>(5);
  public startVal = new BehaviorSubject<number>(0);
  public allData = new BehaviorSubject<[]>([]);
  constructor() { }
}
