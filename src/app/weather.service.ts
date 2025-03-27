import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  getWeathers() {
    throw new Error('Method not implemented.');
  }

  
  constructor(private _httpClient:HttpClient) { }
    getProducts():Observable<any>{
      return this._httpClient.get("https://api.open-meteo.com/v1/forecast?latitude=17.385044&longitude=78.486671&current_weather=true")
    }
}
