import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  updateStudents(id: number, value: any) {
    throw new Error('Method not implemented.');
  }
  


   constructor(private _httpClient:HttpClient){ }
    getStudents():Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
    };
    
    getStudent(id:any):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
    };


    getFilteredSudents(term:any):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
      
    }

    deleteStudent(id:any):Observable<any>{
      return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
    }

   createStudent(data:any):Observable<any>
{
  return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data)
}
}





 
 
 

