import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BeforeLoginLayoutComponent } from "./welcome/before-login-layout.component";
import { HelloComponent } from "./hello/hello.component";
import { hiComponent } from "./hi.component";
import { PipeDemoComponent } from "./pipe-demo/pipe-demo.component";
import { TestComponent } from "./test/test.component";
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { TableViewComponent } from "./table-view/table-view.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: BeforeLoginLayoutComponent },
  { path: "hello", component: HelloComponent },
  { path: "hi", component: hiComponent },
  { path: "test-compo", component: TestComponent },
  { path: "pipe-demo", component: PipeDemoComponent },
  { path: "crud-operation", component: CrudOperationComponent },  
  { path: "table-view", component: TableViewComponent },  

  
  { path: "*", component: BeforeLoginLayoutComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
