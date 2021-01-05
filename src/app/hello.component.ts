// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   OnInit,
//   OnDestroy,
//   OnChanges,
//   DoCheck
// } from "@angular/core";
// import { DataService } from "./service/data.service";

// @Component({
//   selector: "hello",
//   template: `<h1>Hello {{ name }}!</h1>
//     <h1>{{ toChild }}!</h1>
//     <h2 style="color:red">{{ _dataservice.count }}</h2>
//     <button (click)="showNametype()">Output example</button>
//     <br />
//     <button (click)="clearNametype()">clear Output example</button>
//     <br/>
//     <input [(ngModel)]="data" />
//     {{data}}
//     `,
//   styles: [
//     `
//       h1 {
//         font-family: Lato;
//       }
//     `,
//   ],
//   providers: [DataService],
// })
  
//   export class HelloComponent implements OnInit, OnDestroy,OnChanges, DoCheck {
//   @Input("aliasName") name: string;
//   @Input("toChild") toChild: string;

//   @Output() shownametype: EventEmitter<any> = new EventEmitter<any>();
//   @Output() clearnametype: EventEmitter<any> = new EventEmitter<any>();

//   timeOutInstance = null;
//   data : any;
//   constructor(public _dataservice: DataService) {}

//   ngOnChanges(change){
//     console.log("hello component On changes",change);

//   }


//   ngOnInit() {
//     console.log("hello component Created");
//     // this.timeOutInstance = setInterval(() => {
//     //   console.log(new Date());
//     // }, 2000);
//   }

//   showNametype() {
//     this.shownametype.emit("pass");
//   }

//   clearNametype() {
//     this.clearnametype.emit();
//   }

//   ngOnDestroy() {
//     console.log("hello component destroyed");
//     // if (this.timeOutInstance) {
//     //   clearInterval(this.timeOutInstance);
//     // }
//   }

//   ngDoCheck(){
//     console.log("Hello Component DoCheck")
//   }

// }
