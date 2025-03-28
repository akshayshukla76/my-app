import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private _httpClient:HttpClient) { }
  getProducts():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products")
  }
}
