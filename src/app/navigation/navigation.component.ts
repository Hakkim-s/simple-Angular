import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  @Input() test: string;
  studentData = [
    { name: "David", marks: 85 },
    { name: "Arun", marks: 95 },
  ];

  obj = {
    "1": 9,
    two: 8,
    three: 7,
    four: 6,
    "5": 5,
    "6": 4,
    "7": 3,
    "8": 2,
    "9": 1,
    "10": 0,
    "12": 5,
  };
  convertedObjToArr: any;
  constructor() {}

  ngOnInit(): void {
    this.variable_declarations();
    this.studentsdatas();
    this.objTOArr();
  }

  variable_declarations() {
    // Function Scope
    var x = 1;
    let y = 2;
    const z = 3;
    if (true) {
      //Block Scope
      var xx = 10;
      let yy = 20;
      const zz = 30;
      console.log("Block xx" + " Block yy " + "Block zz " + xx, yy, zz);
      console.log(
        "function x inside block" + " function y inside block" + x,
        y,
        z
      );
    }
    console.log("function x" + " function y " + x, y);
    // console.log('Block x' + ' Block y ' + xx,yy,zz); // error due to yy,zz can't find
    var a = [1, 2, 3, 4];
    for (let i = 0; i < a.length; i++) {
      setTimeout(function () {
        console.log("----", a[i]);
      }, 1000);
    }
  }

  studentsdatas() {
    for (let i = 0; i < 100; i++) {
      this.studentData.push({
        name: "Student " + i,
        marks: Number((Math.random() * 100).toFixed(2)),
      });
    }
  }
  objTOArr() {
    this.convertedObjToArr = Object.entries(this.obj);
    // this.convertedObjToArr =  Object.entries(this.obj).map(([k,v])=>[+k,v]);
    // var obj = { "10":5, "2":7, "3":0, "4":0, "5":0, "6":0, "7":0,
    // "8":0, "9":0, "10":0, "11":0, "12":0 };

    var objectToArray = function (obj) {
      var _arr = [];

      for (var key in obj) {
        _arr.push([key, obj[key]]);
      }
      return _arr;
    };

    this.convertedObjToArr = objectToArray(this.obj);
  }
}
