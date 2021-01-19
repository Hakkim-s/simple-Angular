import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  count = 2;
  name: any;
  constructor(private http: HttpClient) {
    this.getData();
    this.getUserData();
  }

  getData() {
    return this.http.get<any>("http://jsonplaceholder.typicode.com/users");

    // return  this.http.get<any>("http://jsonplaceholder.typicode.com/users").subscribe(res  =>{
    //   return this.name = res;
    //   });
  }

  // http://dummy.restapiexample.com/api/v1/employees

  getUserData() {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }
}
