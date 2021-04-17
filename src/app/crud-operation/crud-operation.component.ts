import { Component, OnInit } from "@angular/core";
import { RouterLinkActive } from "@angular/router";
import { DataService } from "../service/data.service";
import {Router} from '@angular/router';
@Component({
  selector: "app-crud-operation",
  templateUrl: "./crud-operation.component.html",
  styleUrls: ["./crud-operation.component.css"],
})
export class CrudOperationComponent implements OnInit {
  arr1 = [25, 31, 4, 87, 96, 55, 14];
  arr2 = [15, 58, 41, 2, 31, 14, 89];

  data1: any;
  data2: any;
  data3: any;

  data: any;
  empId: any;
  firstName: any;
  lastName: any;
  emailId: any;
  isDesc = false;
  columnToSort: string = "id";
  currentPageNo = 1;
  addNewflag = false;
  searchText: any;
  date = new Date();
  constructor(private _dataService: DataService,
    private router: Router
    ) {
    this.getJsonData();
    this.getarrayData();
  }

  ngOnInit(): void {
    this.getJsonData();
    this.getarrayData();
    this.arr1.sort((a, b) => a - b);
    this.arr2.sort((a, b) => a - b);
    this.demo();
  }
  demo() {
    var a = [1, 2, 3, 4];
    for (let i = 0; i < a.length; i++) {
      setTimeout(function () {
        console.log("----", a[i]);
      }, 1000);
    }
  }
  getJsonData() {
    this._dataService.getEmployeData().subscribe((res) => (this.data = res));
  }

  addToList() {
    if (
      (this.empId == "" || this.empId == undefined) &&
      (this.firstName == "" || this.firstName == undefined) &&
      (this.lastName == "" || this.lastName == undefined) &&
      (this.emailId == "" || this.emailId == undefined)
    ) {
      return (this.addNewflag = true);
    } else {
      this.addNewflag = false;
      this.data.push({
        id: this.empId,
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.emailId,
      });
      this.empId = "";
      this.firstName = "";
      this.lastName = "";
      this.emailId = "";
      alert("Employee Succefully Added");
    }
  }
  deletedata(index) {
    console.log(index);
    this.data.splice(index, 1);
  }

  deleteAll() {
    this.data = [];
    this.addNewflag = false;
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

  clearaddNewflag() {
    if (
      this.empId == "" ||
      this.firstName == "" ||
      this.lastName == "" ||
      this.emailId == ""
    ) {
      this.addNewflag = true;
    } else {
      this.addNewflag = false;
    }
  }

  clearsearchText() {
    this.searchText = "";
  }

  getarrayData() {
    const duplicateElement = [];
    this.arr1.forEach((res) => {
      let arrdata = this.arr2.find((ele) => ele == res);
      if (arrdata) {
        // this.data1 = arrdata;
        duplicateElement.push(arrdata);
        this.data1 = duplicateElement;
      }
    });
    this.data2 = this.arr2.find((ele) => ele == 41);
    this.data3 = this.arr1.filter((ele) => ele != 87);
    this.data3.sort((a, b) => a - b);
  }

  navigateTo(data){
    if(data = '1'){
      this.router.navigate(['./navigation-test'], { 
        state: { example: data } 
      }); 
    }
    else{
      this.router.navigate(['./navigation']);      
    }
  }
}
