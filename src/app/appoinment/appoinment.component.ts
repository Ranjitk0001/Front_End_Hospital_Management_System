import { Component, OnInit } from '@angular/core';
import { Appoinment } from '../appoinment';
import { AppoinmentService } from '../appoinment.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrl: './appoinment.component.css'
})
export class AppoinmentComponent implements OnInit{

  appointments:Appoinment[]=[];
  constructor(private appoinmentService:AppoinmentService){}
  ngOnInit(): void {
      this.getAppointment();
  }

  getAppointment(){
    this.appoinmentService.getAllAppointments().subscribe(data=>{
      this.appointments=data;
    })
  }

  delete(id:number){
   this.appoinmentService.deleteAppointment(id).subscribe(data=>{
    // console.log(data);
    this.getAppointment();
   })
  }
}
