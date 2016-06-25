import {Component} from 'angular2/core';
import {HttpTestService} from './http-test.service';

@Component({
  selector: 'http-test',
  template: `
    <h1>HTTP Requests</h1>
    <p>{{date | date:'fullDate'}}</p>
    <button (click)="onTestGet()">Test GET Request</button><br>
    <p>Output: {{ getData }}</p>
    <button (click)="onTestPost()">Test POST Request</button><br>
    <p>Output: {{ postData }}</p>
  `,
  providers: [HttpTestService],

})

export class HttpTestComponent {
  getData: string;
  postData: string;
  date = new Date();

  constructor(private _httpTestService: HttpTestService) {}

  onTestGet() {
    this._httpTestService.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert('This application is temporarily over its serving quota. Please try again later.'),
        () => console.log("Finished")
      );
  }

  onTestPost() {
    this._httpTestService.postJSON()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert('This application is temporarily over its serving quota. Please try again later.'),
        () => console.log("Finished")
      );
  }
}
