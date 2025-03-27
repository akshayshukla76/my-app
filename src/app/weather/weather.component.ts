import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  products: any = {}; // Holds the weather data
  errorMessage: string = ''; // For error handling

  constructor(private _weatherService: WeatherService) {}

  // Method to fetch weather data
  fetchWeather(): void {
    this._weatherService.getProducts().subscribe(
      (data: any) => {
        console.log('Weather data received:', data);
        this.products = data; // Bind data to the products variable
      },
      (err: any) => {
        console.error('Error fetching weather data:', err);
        this.errorMessage = 'Internal server error. Please try again later.';
        alert(this.errorMessage); // Show an alert for the error
      }
    );
  }
}