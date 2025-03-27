import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent {
  public studentForm: FormGroup =new FormGroup({
      name:new FormControl(),
      phone:new FormControl(),
      city:new FormControl(),
      email:new FormControl(),
    })

  id:number=0;
  constructor(private _StudentsService:StudentsService, private _router:Router, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        
        
      },
      (err:any)=>{
        alert("internal server error")
      }
  
    )
}
create(){
  // if(this.id){
  //   console.log(this.studentForm.value);
  //   this._StudentsService.updateStudents(this.id,this.studentForm.value).subscribe(
  //     (data:any)=>{
  //       console.log(data);
  //       alert("new vehicle created succesfully");
  //       this._router.navigateByUrl("/dashboard/vehicle");
  //     },
  //     (err:any)=>{
  //       alert("error")
  //     }


  //   )
  // }else{
    console.log(this.studentForm.value);
  this._StudentsService.createStudent(this.studentForm.value).subscribe(
(data:any)=>{
  console.log(data);
  alert("new vehicle created succesfully");
  this._router.navigateByUrl("/dashboard/students");
},
(err:any)=>{
  alert("error")
}

 )

  }

//   if(this.id){
//     this._vehicleService.getVehicle(this.id).subscribe(
//       (data:any)=>{
//         console.log(data);
//         this.vehicleForm.patchValue(data);

//       },
//       (err:any)=>{
//         alert("error")
//       }
      

//     )
//   }
  
// }







}
