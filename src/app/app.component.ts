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
export class AppComponent implements OnInit {
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
  data = [
    { name: "Ajay", age: 24 },
    { name: "Aravindh", age: 27 },
    { name: "Bharath", age: 22 },
  ];

  tempContext = { $implicit: "Implicit Name", name: "Custom Name" };
  public menuTitle: string;
  constructor(
    public _dataservice: DataService,
    public _compRefChild: ComponentFactoryResolver
  ) {
    this._dataservice.currentMenuTitle.subscribe(
      (title) => (this.menuTitle = title)
    );
  }

  ngOnInit() {}
}
