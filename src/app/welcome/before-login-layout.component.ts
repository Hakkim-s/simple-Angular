import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-before-login-layout",
  templateUrl: "./before-login-layout.component.html",
  styleUrls: ["./before-login-layout.component.css"],
})
export class BeforeLoginLayoutComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
  }
  onSubmit() {
    console.log("Your form data : ", this.employeeForm.value);
  }
}
