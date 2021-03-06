import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_GB } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import { AuthModule } from '@auth0/auth0-angular';
import {LoginComponent} from "./login/login.component";
import { MeetingFormComponent } from './meeting-form/meeting-form.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientFormComponent,
    DoctorFormComponent,
    DoctorListComponent,
    LoginComponent,
    MeetingFormComponent,
    MeetingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule.forRoot({
      domain: 'dev-txd4ulg6.us.auth0.com',
      clientId: '84rlyYCSMwHUwOuFgpScBJsULdLa86gq'
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
  bootstrap: [AppComponent]
})
export class AppModule { }
