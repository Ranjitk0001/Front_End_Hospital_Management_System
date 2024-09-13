import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { CreateAppoinmentComponent } from './create-appoinment/create-appoinment.component';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent},
  {path:'appointmentlist',component:AppoinmentComponent},
  {path:'create-appoinment',component:CreateAppoinmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
