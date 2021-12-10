import {Component, OnInit} from '@angular/core';
import {Patient} from '../models/patient';
import {AuthService} from '@auth0/auth0-angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  constructor(private auth: AuthService, router: Router) {
  }

  patient: Patient = {
    firstname: 'patient1',
    lastname: 'patient-lastname',
    email: 'patientemail@mail.com'
  }

  ngOnInit(): void {
    // this.auth.user$.subscribe(user => {
    //     if (!user) {
    //       this.router.navigate(['/login'])
    //     }
    //   }
    // )
  }


}
