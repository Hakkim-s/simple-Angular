import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-crud-operation",
  templateUrl: "./crud-operation.component.html",
  styleUrls: ["./crud-operation.component.css"],
})
export class CrudOperationComponent implements OnInit {
  arr = [15, 58, 41, 2, 14, 89];
  arr1 = [25, 4, 87, 87, 14, 96];

  data: any;
  data1: any;

  constructor(private _dataService: DataService) {
    this.getJsonData();
  }

  ngOnInit(): void {}

  getJsonData() {
    this.arr1.forEach((res) => {
      let arrdata = this.arr.find((ele) => ele == res);
      if (arrdata) {
        this.data = arrdata;
      }
    });

    // this.data = this.arr.filter((ele) => ele != 41);
    this.data1 = this.arr.find((ele) => ele == 41);
  }
}
