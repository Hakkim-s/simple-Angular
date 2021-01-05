import { Directive, TemplateRef, Input, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appShow]",
})
export class ShowDirective {
  render = false;
  @Input() set appShow(value) {
    if (value && !this.render) {
      this.containerRef.createEmbeddedView(this.tempref);
      this.render = true;
    } else if (!value && this.render) {
      this.containerRef.clear();
      this.render = false;
    }
  }

  constructor(
    public tempref: TemplateRef<any>,
    public containerRef: ViewContainerRef
  ) {}
}
