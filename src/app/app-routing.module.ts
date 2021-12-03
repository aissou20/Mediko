import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientComponent} from "./patient/patient.component";
import {PatientFormComponent} from "./patient-form/patient-form.component";
import { DoctorFormComponent } from "./doctor-form/doctor-form.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/patient' },
  { path: 'patient/list', component: PatientComponent },
  { path: 'patient/create', component: PatientFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'doctor/create', component: DoctorFormComponent},
 // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  //{ path: 'patient', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
