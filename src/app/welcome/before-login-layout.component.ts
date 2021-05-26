import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-before-login-layout",
  templateUrl: "./before-login-layout.component.html",
  styleUrls: ["./before-login-layout.component.css"],
})
export class BeforeLoginLayoutComponent implements OnInit {
  employeeForm: FormGroup;
  public menuTitle: string;
  constructor(
    private formBuilder: FormBuilder,
    private _dataservice: DataService
  ) {
    this.createemployeeForm();
  }
  ngOnInit(): void {}
  createemployeeForm() {
    this.employeeForm = this.formBuilder.group({
      empId: [""],
      firstName: [""],
      lastName: [""],
      emailId: [""],
    });

    this._dataservice.changeMenuTitle("Home Component");
    this._dataservice.currentMenuTitle.subscribe(
      (title) => (this.menuTitle = title)
    );
  }
  onSubmit() {
    console.log("Your form data : ", this.employeeForm.value);
  }
}
