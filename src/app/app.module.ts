import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewsComponent } from "./components/news/news.component";
import { FormsModule } from "@angular/forms";
import { NewsService } from "./services/news.service";
import { HttpClientModule } from "@angular/common/http";
import { ChartComponent } from "./components/chart/chart.component";
import { OnlineService } from "./services/online.service";
import { TimePipe } from "./components/pagenation/time.pipe";
import { PagenationComponent } from "./components/pagenation/pagenation.component";

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ChartComponent,
    TimePipe,
    PagenationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [NewsService, OnlineService],
  bootstrap: [AppComponent],
})
export class AppModule {}
