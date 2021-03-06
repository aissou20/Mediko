import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorFormComponent } from "./doctor-form/doctor-form.component";
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import {PatientListComponent} from "./patient-list/patient-list.component";
import {PatientFormComponent} from "./patient-form/patient-form.component";
import {MeetingFormComponent} from "./meeting-form/meeting-form.component";
import {MeetingListComponent} from "./meeting-list/meeting-list.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/patient' },
  { path: 'patient/list', component: PatientListComponent },
  { path: 'patient/create', component: PatientFormComponent },
  { path: 'doctor/list', component: DoctorListComponent},
  { path: 'doctor/create', component: DoctorFormComponent},
  { path: 'meeting/create', component: MeetingFormComponent},
  { path: 'meeting/list', component: MeetingListComponent},
  { path: 'login', component: LoginComponent},
 // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  //{ path: 'patient', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
