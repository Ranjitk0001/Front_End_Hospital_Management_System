import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { CreateAppoinmentComponent } from './create-appoinment/create-appoinment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent},
  {path:'appointmentlist',component:AppoinmentComponent},
  {path:'create-appoinment',component:CreateAppoinmentComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
