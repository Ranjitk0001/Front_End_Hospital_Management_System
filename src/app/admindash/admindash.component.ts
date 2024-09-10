import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent  implements OnInit{

  patients:Patient[]=[];
  constructor(private patientService:PatientService){}

  ngOnInit():void{
    this.getPatients();
  }
getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
    this.patients=data
   
  })
}
}
