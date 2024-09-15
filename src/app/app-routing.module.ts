import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { CreateAppoinmentComponent } from './create-appoinment/create-appoinment.component';
import { HomeComponent } from './home/home.component';
import { DocdasComponent } from './docdas/docdas.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DoctorauthguardService } from './doctorauthguard.service';
import { AdminauthguardService } from './adminauthguard.service';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent,canActivate:[AdminauthguardService]},
  {path:'appointmentlist',component:AppoinmentComponent},
  {path:'create-appoinment',component:CreateAppoinmentComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'docdash',component:DocdasComponent, canActivate:[DoctorauthguardService]},
  {path:'create-patient',component:CreatePatientComponent},
  {path:'medicinelist',component:MedicinelistComponent,canActivate:[DoctorauthguardService]},
  {path:'create-medicine',component:CreateMedicineComponent,canActivate:[DoctorauthguardService]},
  {path:'update-patient/:id',component:UpdatePatientComponent},
  {path:'view-patient/:id',component:ViewPatientComponent},
  {path:'update-medicine/:id',component:UpdateMedicineComponent,canActivate:[DoctorauthguardService]},
  {path:'doclogin',component:DocloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
