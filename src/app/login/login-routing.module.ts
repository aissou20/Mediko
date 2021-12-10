import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from "./login.component";
import {NgModule} from "@angular/core";


const routes: Routes=[
  {path: '',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginModuleRoutingModule{}
