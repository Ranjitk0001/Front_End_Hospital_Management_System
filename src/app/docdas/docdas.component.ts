import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdas',
  templateUrl: './docdas.component.html',
  styleUrl: './docdas.component.css'
})
export class DocdasComponent implements OnInit {
  patients:Patient[]=[];
  constructor(private patientService:PatientService,private router:Router){}

  ngOnInit():void{
    this.getPatients();
  }
  getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
    this.patients=data
   
  })
   
  }

  update(id:number){
    this.router.navigate(['update-patient',id])
  }

  delete(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
     // console.log(data);
     this.getPatients();
    })
   }
 
   view(id:number){
    this.router.navigate(['view-patient',id])
   }

}
