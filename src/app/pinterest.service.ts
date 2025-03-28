import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinterestService {
  getDetails() {
    throw new Error('Method not implemented.');
  }


   constructor(private _httpClient:HttpClient){ }
    getProducts():Observable<any>{
      return this._httpClient.get("https://picsum.photos/v2/list?page=1&limit=100")
    }
}
