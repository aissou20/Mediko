import { Component, OnInit } from '@angular/core';
import {Doctor} from "../models/doctor";

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doctor: Doctor = {
    id_doctor: 1,
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@mail.com'
  }

}
