import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {
  getStudent(id: number) {
    throw new Error('Method not implemented.');
  }
  details:any;

 constructor(private _httpClient:HttpClient){ }
     getDetails():Observable<any>{
       return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
     }
 }
 