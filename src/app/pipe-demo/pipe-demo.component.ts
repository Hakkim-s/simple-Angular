import { Component, OnInit } from "@angular/core";
import { Observable, pipe, Subscriber } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { observable, interval } from "rxjs";
import { map, take } from "rxjs/operators";
@Component({
  selector: "app-pipe-demo",
  templateUrl: "./pipe-demo.component.html",
  styleUrls: ["./pipe-demo.component.css"],
})
export class PipeDemoComponent implements OnInit {
  Today_data = new Date();
  num = 2547.36122;
  ToPercentage = 0.9257;
  Currency = 23123157.63855;
  obj = {
    name: "Ajay",
    age: 25,
  };
  arr = [1, 2, 3, 4, 5, 6];

  users = [
    { name: "Ajay", gender: "m" },
    { name: "krishna", gender: "m" },
    { name: "kathir", gender: "m" },
    { name: "sumi", gender: "f" },
  ];

  name: string;

  jsonData = this.http.get("https://jsonplaceholder.typicode.com/todos/1");

  // promise will return only resolve done
  jsonDataPromise = new Promise((resolve, reject) => {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos/2")
      .subscribe((x) => resolve(x));
  });

  // using observable

  jsonDataobservable = new Observable((Subscriber) => {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos/3")
      .subscribe((x) => Subscriber.next(x));
  });

  data$ = interval(1000).pipe(
    map((x) => new Date()),
    take(10)
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  addName(value) {
    // using impure pipe
    // this.users.push({name:value,gender:'m'})
    // using pure pipe
    this.users = [...this.users, { name: value, gender: "m" }];
    console.log(this.users);
    this.name = "";
  }
}
