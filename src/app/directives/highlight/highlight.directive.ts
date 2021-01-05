import { Directive, ElementRef, HostListener , Input} from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {

@Input('appHighlight') Hightlight;

  constructor(public eleRef: ElementRef) {}

  @HostListener("mouseenter") mouseenter() {
    this.eleRef.nativeElement.style.color = "red";
    this.eleRef.nativeElement.style.fontSize = "25px";
    this.eleRef.nativeElement.style.fontWeight = "bold";
    // this.eleRef.nativeElement.style.color = this.Hightlight;  
  }

  @HostListener("mouseleave") mouseleave() {
    this.eleRef.nativeElement.style.color = "orange";
    this.eleRef.nativeElement.style.fontSize = "15px";
    this.eleRef.nativeElement.style.fontWeight = "normal";
  }
}
