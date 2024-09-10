import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) {}
   private baseUrl="http://localhost:8084/api/v1"
  //  private baseUrl:string="http://localhost:8084/api/v1";

   getPatientList ():Observable<Patient[]>{
    // return this.httpClient.get<Patient[]>(this.baseUrl)
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
   }
}
