import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "days",
})
export class TimePipe implements PipeTransform {
  transform(date: any): any {
    // var diff = Date.now() - Date.parse(date);
    // 1588843067435
    // 1520999430000
    // return diff / 1000 / 60 / 60;
    let dateSent = new Date(date).getTime();
    let currentDate = new Date().getTime();
    const diffInMs = currentDate - dateSent;
    return Math.round((currentDate - dateSent) / (1000 * 60 * 60) / 24);
  }
}
