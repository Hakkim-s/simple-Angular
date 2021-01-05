import {
  Component,
  HostBinding,
  Input,
  OnInit,
  HostListener,
} from "@angular/core";

@Component({
  selector: "hi",
  template: `<h1>Hi {{ name }}!</h1>
    <button (click)="changeColor()">Color Host</button>`,
  styles: [],
})
export class hiComponent implements OnInit {
  @Input() name: string;

  //   hostbinding is used to bind property
  @HostBinding("style.color") color = "green";
  @HostBinding("class") color1 = "green";

  constructor() {}

  ngOnInit(): void {}

  changeColor() {
    this.color1 = "green";
  }

  @HostListener("click") function() {
    this.color = "red";
  }
}

// bye component

@Component({
  selector: "hi",
  template: `<h1>Bye {{ name }}!</h1>`,
  styles: [],
})
export class byeComponent implements OnInit {
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
