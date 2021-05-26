import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  count = 2;
  name: any;

  private menuTitle = new BehaviorSubject("");

  public currentMenuTitle = this.menuTitle.asObservable();

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

  getEmployeData() {
    return this.http.get<any>("http://localhost:3000/employees/");
  }

  changeMenuTitle(message: string) {
    this.menuTitle.next(message);
  }
}
