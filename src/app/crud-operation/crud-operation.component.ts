import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-crud-operation",
  templateUrl: "./crud-operation.component.html",
  styleUrls: ["./crud-operation.component.css"],
})
export class CrudOperationComponent implements OnInit {
  data: any;

  constructor(private _dataService: DataService) {
    this._dataService.getData().subscribe((res) => (this.data = res));
  }

  ngOnInit(): void {
    // this.data = this._dataService.name;
  }

  getJsonData() {}
}
