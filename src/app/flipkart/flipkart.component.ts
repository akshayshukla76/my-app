import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
 products:any=[];
  constructor (private _flipkartService:FlipkartService){
    _flipkartService.getProducts().subscribe(
      (data:any)=>{
        console.log(data);
      this.products=data;},
        (err:any)=>{
          alert("internal server error");
        }
      )
      }
}
