import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe-demo",
  templateUrl: "./pipe-demo.component.html",
  styleUrls: ["./pipe-demo.component.css"],
})
export class PipeDemoComponent implements OnInit {
  Today_data = new Date();
  num = 2547.36122;
  ToPercentage = 0.9257;
  Currency = 23123157.63;
  obj = {
    name: "Ajay",
    age: 25,
  };
  arr = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}
