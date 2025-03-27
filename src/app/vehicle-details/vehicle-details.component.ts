import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  id:number=0;
  vehicle:any="";

constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService)
{_activatedRoute.params.subscribe(
  (Data:any)=>{
    console.log(Data.id);
    this.id=Data.id;
    console.log(this.id);
  },
  (err:any)=>{
    alert("internal server error")
  }
)
_vehicleService.getVehicle(this.id).subscribe(
  (Data:any)=>{
    console.log(Data.id);
    this.vehicle=Data;
    console.log(this.id);
  },
  (err:any)=>{
    alert("internal server error")
  }

)



}



}
