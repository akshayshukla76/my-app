import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schooldetails',
  templateUrl: './schooldetails.component.html',
  styleUrls: ['./schooldetails.component.css']
})
export class SchooldetailsComponent {
    public userForm:FormGroup= new FormGroup({
    name:new FormControl(),
    class:new FormControl(),
   fathername:new FormControl(),
   email:new FormControl(),
    address:new FormGroup({
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl(),
  }),
  type:new FormControl(),
  cards:new FormArray([]),
   })
  
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }
  
  addcard(){
    this.cardsFormArray.push(
  new FormGroup({
    class : new FormControl(),
    year: new FormControl(),
    percentage: new FormControl()
  })
    )
  }
  deletecard(i:number){
    this.cardsFormArray.removeAt(i);
  }
  
  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.userForm.addControl('busFee',new FormControl());
          this.userForm.removeControl('hostelFee')
        }
      else{
        this.userForm.addControl('hostelfee',new FormControl());
        this.userForm.removeControl('busFee')
  
      }
      }
    )
  }
  
  submit(){
      console.log(this.userForm.value);
    }
  

}
