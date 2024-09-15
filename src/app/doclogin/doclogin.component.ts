import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {
  username:string='';
  password:string='';

  inValidLogin=false;

  constructor(private router:Router){}


  checkLogin(){
       if(this.username=="Ranjit"&&this.password=="Pass@123")
        {
          sessionStorage.setItem('username',this.username);
          
          alert("Doctor login successfully");
          this.router.navigate(['docdash']);
          return true;
        }
       else
       {
        alert("Invalid user and password");
        this.router.navigate(['home'])
        return false;
        
       }
  }
}
