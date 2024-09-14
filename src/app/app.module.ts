import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { CreateAppoinmentComponent } from './create-appoinment/create-appoinment.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DocdasComponent } from './docdas/docdas.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppoinmentComponent,
    CreateAppoinmentComponent,
    HomeComponent,
    DocdasComponent,
    CreatePatientComponent,
    MedicinelistComponent,
    CreateMedicineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
