import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdas',
  templateUrl: './docdas.component.html',
  styleUrl: './docdas.component.css'
})
export class DocdasComponent implements OnInit {
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
