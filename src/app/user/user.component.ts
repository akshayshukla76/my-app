import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  public userForm:FormGroup= new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
  email:new FormControl(),
 mobile:new FormControl(),
  password:new FormControl(),
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
  number : new FormControl(),
  expiry: new FormControl(),
  cvv: new FormControl()
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
