import { Component } from '@angular/core';
import { Appoinment } from '../appoinment';
import { AppoinmentService } from '../appoinment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appoinment',
  templateUrl: './create-appoinment.component.html',
  styleUrl: './create-appoinment.component.css'
})
export class CreateAppoinmentComponent {
  
  appointment:Appoinment=new Appoinment();
  
  constructor(private appoinmentService:AppoinmentService,private router:Router){}

  saveAppointment(){
    this.appoinmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToAppointment();
    })
  }

  onSubmit(){
    this.saveAppointment();
  }

  goToAppointment(){
    this.router.navigate(['/appointmentlist'])
  }
}
