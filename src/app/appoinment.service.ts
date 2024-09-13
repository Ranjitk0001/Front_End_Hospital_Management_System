import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinment } from './appoinment';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  constructor(private httpClient:HttpClient) { }
   private baseUrl="http://localhost:8084/api/v2"

   getAllAppointments ():Observable<Appoinment[]>{
    return this.httpClient.get<Appoinment[]>(`${this.baseUrl}`)
   }

   createAppointment(appoinment:Appoinment):Observable<Appoinment>{
    return this.httpClient.post<Appoinment>(`${this.baseUrl}`,appoinment)
   }
}
