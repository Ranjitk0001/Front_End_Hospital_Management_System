import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DoctorauthguardService } from '../doctorauthguard.service';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdas',
  templateUrl: './docdas.component.html',
  styleUrl: './docdas.component.css'
})
export class DocdasComponent implements OnInit {
  patients:Patient[]=[];
  constructor(private patientService:PatientService,private router:Router,private docauthService:DocauthService){}

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

   logout(){
    this.docauthService.logout();
    this.router.navigate(['home']);
   }

}
