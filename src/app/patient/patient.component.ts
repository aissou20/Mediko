import { Component, OnInit } from '@angular/core';
import {Patient} from '../Patient';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patient:Patient ={
    id_patient:1,
    firstname: 'patient1',
    lastname:'patient-lastname',
    email:'patientemail@mail.com'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
