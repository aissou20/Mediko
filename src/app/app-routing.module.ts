import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientComponent} from "./patient/patient.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/patient' },
  { path: 'patientList', component: PatientComponent },
  //{ path: 'patient/:create', component: PatientCreateComponent },
 // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  //{ path: 'patient', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
