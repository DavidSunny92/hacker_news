import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  constructor(private router: HttpClient) { }

  public getData() {
    return this.router.get("https://hn.algolia.com/api/v1/search");
  }
}
