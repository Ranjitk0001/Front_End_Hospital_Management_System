import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  username:string='';
  password:string='';

  inValidLogin=false;

  constructor(private router:Router,private adminauthService:AdminauthService){}


  checkLogin(){
       if(this.adminauthService.authenticate(this.username,this.password))
        {         
          alert("Doctor login successfully");
          this.router.navigate(['admin']);
          this.inValidLogin=false;
        }
       else
       {
        alert("Invalid user and password");
        this.inValidLogin=false;
        this.router.navigate(['home']);
        
       }
  }
}
