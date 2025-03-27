import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  term:string='';
 
  constructor (private _vehicleService:VehicleService){
   this.loadvehicle();
      }

      filter(){
        this._vehicleService.getFilteredVehicles(this.term).subscribe(
          (data:any)=>{
            console.log(data);
          this.vehicles=data;},
            (err:any)=>{
              alert("internal server error");
            }
          )
          }

          column:string='';
          order:string='';
          sort(){
            this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
              (data:any)=>{
                console.log(data);
              this.vehicles=data;},
                (err:any)=>{
                  alert("internal server error");
                }
              )
          }
      
          loadvehicle(){
            this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
              (data:any)=>{
                console.log(data);
              this.vehicles=data;},
                (err:any)=>{
                  alert("internal server error");
                }
              )
          }

         delete(id:any){
          if(confirm("are yo sure to delete?")==true){
            this._vehicleService.deleteVehicles(id).subscribe(
              (data:any)=>{
                console.log(data);
                alert("internal server error");
              },
                (err:any)=>{
                  alert("internal server error");
                }
              )}else{
                alert("deletion cancelled");
              }
          }


          limit:string='';
          page:string='';
          pagination(){
            this._vehicleService.getPaginatedVehicles(this.limit,this.page).subscribe(
              (data:any)=>{
                console.log(data);
              this.vehicles=data;},
                (err:any)=>{
                  alert("internal server error");
                }

            )
          }
    
        }
     
        
        
        
        
        
        
        
        

