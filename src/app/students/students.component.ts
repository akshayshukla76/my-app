import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:any=[];
  term:any;
      constructor (private _studentsService:StudentsService){
  _studentsService.getStudents().subscribe(
          (data:any)=>{
            console.log(data);
          this.students=data;},
            (err:any)=>{
              alert("internal server error");
            }
          ) 
          }
          filter(){
            this._studentsService.getFilteredSudents(this.term).subscribe(
              (data:any)=>{
                console.log(data);
                this.students=data;
              },
              (err:any)=>
              {
                console.log('error');
              }
            )
          }

          delete(id:any){
            this._studentsService.deleteStudent(id).subscribe(
              (data:any)=>{
               
                alert("record deleted successfully")
              },
              (err:any)=>
              {
                alert('error');
              }

            )
          }

          



}
