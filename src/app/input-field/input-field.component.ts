import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  term:string='';
textlength:number=0;
@Output() childEvent:EventEmitter<string>=new EventEmitter();


texfunction(){
  this.childEvent.emit(this.term);
  this.textlength=this.term.length;
  console.log(this.textlength);
}
}
