import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent implements OnInit{

  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];

      this.patientService.getPatientById(this.id).subscribe(data=>{
        this.patient=data;
        // console.log(this.patient)
      })
  }
  id:number=0;
  constructor(private route:ActivatedRoute,private patientService:PatientService){}
  patient:Patient=new Patient();


  onSubmit(){}

}
