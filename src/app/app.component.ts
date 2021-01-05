import {
  Component,
  VERSION,
  OnInit,
  DoCheck,
  AfterViewInit,
  ViewChild,
  AfterViewChecked,
  ViewEncapsulation,
  ComponentFactoryResolver,
} from "@angular/core";
import { HelloComponent } from "./hello/hello.component";
import { DataService } from "./service/data.service";
import { HostDirective } from "./directives/host/host.directive";
import { byeComponent, hiComponent } from "./hi.component";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  name = "Angular " + VERSION.major;

  tempName: any;
  userName: any;
  fromChild: any;
  show = true;

  @ViewChild(HelloComponent, { static: false }) viewChild: HelloComponent;
  // dynamic component intialize
  @ViewChild(HostDirective, { static: true }) childRef: HostDirective;
  component = [hiComponent, byeComponent];

  display = true;
  data = [{ name: "Ajay",age: 24 },{ name: "Aravindh",age: 27 },{ name: "Bharath",age: 22 }];

  tempContext = { $implicit:"Implicit Name", name:'Custom Name'  }

  constructor(
    public _dataservice: DataService,
    public _compRefChild: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    console.log("app component Init", this.viewChild);
  }
  ngDoCheck() {
    console.log("App component Docheck");
  }
  ngAfterViewInit() {
    console.log("App Component AfterviewInit", this.viewChild);
    console.log("'App Component AfterviewInit Name'", this.viewChild.name);
    // this.viewChild.name = 'AfterViewInit';
  }

  ngAfterViewChecked() {
    console.log("App Component AfterViewChecked", this.viewChild);
    //  console.log("App Component AfterViewChecked", this.viewChild);
  }

  toggle() {
    this.show = !this.show;
  }

  increaseCount() {
    this._dataservice.count++;
  }

  onSubmit(user, userDetails) {
    console.log(user, userDetails);
  }
  onSubmitform(userDetails) {
    console.log("userDoubleDetails : ", userDetails);
  }
  receiveNametype(pass) {
    this.fromChild = "got From Child";
  }

  receiveclearNametype() {
    this.fromChild = " ";
  }

  dynamicLoad(id) {
    console.log(this.childRef);
    this.childRef.viewRef.clear();
    const resolvedFactory = this._compRefChild.resolveComponentFactory(
      this.component[id]
    );
    const compRef = this.childRef.viewRef.createComponent(resolvedFactory);
    compRef.instance.name = id == 0 ? "John" : "Rejina";
  }

  show_hide() {
    this.display = !this.display;
  }
}
