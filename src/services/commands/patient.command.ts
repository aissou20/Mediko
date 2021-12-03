import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Patient} from "../../app/models/patient";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn:"root"
})
export class PatientCommand {

  constructor(private angularFirestore: AngularFirestore) {

  }

  //adding patient datas to database
  addPatientToFirebase(patient: Patient) {
    this.angularFirestore.collection('patient').add(JSON.parse(JSON.stringify(patient)))
  }
}
