import { Component, OnInit } from '@angular/core';
import { Doctor } from "../models/doctor";

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  ngOnInit(): void {
  }

  model = new Doctor(18, '', '', '');
  submitted = false;

  onSubmit() { this.submitted = true; }

  createDoctor() {
    this.model = new Doctor(42, '', '', '');
  }
}
