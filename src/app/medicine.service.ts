import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }
   private baseUrl="http://localhost:8084/api/v3"

   getMedicine ():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`)
   }

   createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseUrl}`+'/insert',medicine)
   }
}
