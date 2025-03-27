import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
term:string='';
textlength:number=0;
  @Input() a:number=0;

  @Output() childEvent:EventEmitter<string>=new EventEmitter();
child:string='';
  send(){
    this.childEvent.emit(this.child);
  }
}
