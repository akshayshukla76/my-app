import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentDetailService } from '../student-detail.service';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent {
  id:number=0;
  student:any="";
  constructor(private _activatedRoute:ActivatedRoute,private _studentService:StudentsService)
  {_activatedRoute.params.subscribe(
    (data:any)=>{
      this.id=data.id;
    },
    (err:any)=>{
      alert('error')
    }

  )
  _studentService.getStudent(this.id).subscribe(
    (Data:any)=>{
      console.log(Data.id);
      this.student=Data;
      console.log(this.id);
    },
    (err:any)=>{
      alert("internal server error")
    }
  
  )

  }


}
