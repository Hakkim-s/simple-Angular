import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
// import { HelloComponent } from "./hello.component";

/**Import Services**/
import { DataService } from "./service/data.service";
import { HelloComponent } from './hello/hello.component';
import { HostDirective } from './directives/host/host.directive';
import { byeComponent, hiComponent } from './hi.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import bootstrap from "bootstrap";
import { ShowDirective } from './directives/show/show.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { AppendPipe } from './custom-pipes/append.pipe';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HostDirective, hiComponent, byeComponent, HighlightDirective, ShowDirective, PipeDemoComponent, AppendPipe],
  providers: [DataService],
  entryComponents:[hiComponent, byeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
