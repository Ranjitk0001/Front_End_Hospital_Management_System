import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {
  username:string='';
  password:string='';

  inValidLogin=false;

  constructor(private router:Router,private docauthService:DocauthService){}


  checkLogin(){
       if(this.docauthService.authenticate(this.username,this.password))
        {         
          alert("Doctor login successfully");
          this.router.navigate(['docdash']);
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
