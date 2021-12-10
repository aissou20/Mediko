import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from "./patient/patient.component";
import { PatientFormComponent } from "./patient-form/patient-form.component";
import { DoctorFormComponent } from "./doctor-form/doctor-form.component";
import { DoctorListComponent } from "./doctor-list/doctor-list.component";
import {MeetingFormComponent} from "./meeting-form/meeting-form.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/patient' },
  { path: 'patient/list', component: PatientComponent },
  { path: 'patient/create', component: PatientFormComponent },
  { path: 'doctor/list', component: DoctorListComponent},
  { path: 'doctor/create', component: DoctorFormComponent},
  { path: 'meeting/create', component: MeetingFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
