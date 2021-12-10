import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
@Component({
  selector: 'app-patient',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  patient :Patient ={
    firstname: 'patient1',
    lastname:'patient-lastname',
    email:'patientemail@mail.com'
}


}
