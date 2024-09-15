import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){

    if(username=="Ranjit" && password=="Pass@123"){

      sessionStorage.setItem('username',username);
      return true;
    }
    else{

      return false;
    }
  }

isUserLoggedIn(){
  console.log("Doctor loggin successfull");
  let user=sessionStorage.getItem('username');
  console.log(user);
  return !(user==null)
}

logout(){
  console.log("Doctor Logout successfull");
  sessionStorage.removeItem('username')
}

}
