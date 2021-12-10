import { Component, OnInit } from '@angular/core';
import { Meeting } from "../models/meeting";

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.scss']
})
export class MeetingFormComponent implements OnInit {

  ngOnInit(): void {
  }

  meeting = new Meeting('1', '1', '2021/12/10')

  submitted = false;

  onSubmit() { this.submitted = true; }

  createDoctor() {
    this.meeting = new Meeting('1', '1', '2021/12/10');
  }
}
