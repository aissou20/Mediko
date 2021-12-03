import {Component, OnInit} from '@angular/core';
import {Patient} from '../models/patient';
import {PatientCommand} from "../../services/commands/patient.command";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  constructor(private patientCommand: PatientCommand) {

  }

  model = new Patient("", '', '');

  //props submit
  submitted = false;

  //method for creating a patient and sending datas to firebase
  createPatient() {
    this.patientCommand.addPatientToFirebase(this.model)
    this.submitted = true;
  }

  ngOnInit(): void {
  }

}
