import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  capture(value:string){
    alert('value')
  }
  public inputForm:FormGroup=new FormGroup({
    name:new FormControl('',Validators.maxLength(50))
  })


}
