import { Component, OnInit } from '@angular/core';
import {Meeting} from "../models/meeting";

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meeting: Meeting = {
    id_doctor: '1',
    id_patient: '1',
    date_meeting: '2021/12/10'
  }


}
