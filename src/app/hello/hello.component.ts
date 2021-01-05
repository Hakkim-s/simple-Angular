import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
} from "@angular/core";

import { DataService } from "../service/data.service";
@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
  providers: [DataService],

})
export class HelloComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit,AfterViewChecked {
  @Input("aliasName") name: string;
  @Input("toChild") toChild: string;

  @Output() shownametype: EventEmitter<any> = new EventEmitter<any>();
  @Output() clearnametype: EventEmitter<any> = new EventEmitter<any>();


  timeOutInstance = null;
  data: any;
  show = false;
  constructor(public _dataservice: DataService) {}

  ngOnChanges(change) {
    console.log("Hello component Onchanges", change);
  }

  ngOnInit() {
    console.log("Hello component Init");
    // this.timeOutInstance = setInterval(() => {
    //   console.log(new Date());
    // }, 2000);
  }

  ngOnDestroy() {
    console.log("Hello component destroyed");
    // if (this.timeOutInstance) {
    //   clearInterval(this.timeOutInstance);
    // }
  }

  ngDoCheck() {
    console.log("Hello Component DoCheck");
  }

  ngAfterViewInit() {
    // console.log("Hello Component AfterviewInit");
  }

  ngAfterViewChecked(){
    console.log("Hello Component AfterViewChecked");
  //  console.log("App Component AfterViewChecked");
  }

  showNametype() {
    this.shownametype.emit("pass");
  }

  clearNametype() {
    this.clearnametype.emit();
  }
  showClass(){
    this.show = !this.show;
  }

}
