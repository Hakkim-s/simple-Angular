import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-table-view",
  templateUrl: "./table-view.component.html",
  styleUrls: ["./table-view.component.css"],
})
export class TableViewComponent implements OnInit {
  currentPageNo = 1;

  data: any;
  userData: any;
  columnToSort: string = "id";
  isDesc = false;
  searchText: string = "";
  userDataList = [];

  constructor(
    private _dataService: DataService,
    private toaster: ToastrService
  ) {
    this._dataService.getData().subscribe((res) => (this.data = res));
  }
  ngOnInit(): void {
    // this.data = this._dataService.name; 
  }

  getJsonData() {
    this._dataService.getUserData().subscribe((res) => (this.userData = res));
    if (this.userData != "" && this.userData != undefined) {
      this.userDataList = this.userData.data;
      this.toaster.success(this.userData.message)
    }

    // {
    // try {
    //   this.userData = res;
    //   this.userData = this.userData.data;
    // } catch (error) {
    //   this.toaster.error(error.error.message);
    // }
    // }
    // );
  }

  eventSortData(property) {
    this.isDesc = !this.isDesc; //change the direction
    this.columnToSort = property;
    let direction = this.isDesc ? 1 : -1;

    this.data.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      } else if (a[property] > b[property]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

  filterdataList(event) {
    this.currentPageNo = event;
  }
  clearsearchText() {
    this.searchText = "";
  }
}
