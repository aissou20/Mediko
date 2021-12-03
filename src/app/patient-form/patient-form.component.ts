import {Component, OnInit} from '@angular/core';
import {Patient} from '../models/patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  constructor() {
  }

  model = new Patient(1, "diallo", 'moun', 'moun@mail.com');

  //props submit
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit(): void {
  }

  //method for creating a patient
  createPatient(){
    this.model= new Patient(2, "", '', '');
  }


}
