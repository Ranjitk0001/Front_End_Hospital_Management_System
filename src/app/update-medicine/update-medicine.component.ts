import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent implements OnInit {
  
  
  id:number=0;
  medicine:Medicine=new Medicine();
    
  constructor(private route:ActivatedRoute,private medicineService:MedicineService,private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
      // console.log(this.patient)
    })
  }

onSubmit(){
 

  this.medicineService.updateMedicine(this.id ,this.medicine).subscribe(data=>{
        console.log(data);
        this.goToMedicine();
      })
}

goToMedicine(){
  this.router.navigate(['/medicinelist'])
}

}
