import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
   products:any=[];
    constructor (private _pinterestService:PinterestService){
_pinterestService.getProducts().subscribe(
        (data:any)=>{
          console.log(data);
        this.products=data;},
          (err:any)=>{
            alert("internal server error");
          }
        ) 
        }

}
