import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-interactions',
  template: `
    <span>{{"HELLO " + name}}</span>
    <button (click)="fireEvent()">Click to fire</button>
  `,
  styles: []
})
export class ComponentInteractionsComponent implements OnInit, OnChanges {

  // @Input() public parentData:any;
  // if you want to use the name with some other name the nuse type aliases
  
  @Input('parentData') public name:any;// if you want to use your custom name 
  lifecycleticks :number =0;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    //simplechanges is an interface that gives us parameters like previousvalue,currentvalue, firstchange
    console.log(changes);
    this.lifecycleticks++;
    console.log("this is ngOnChanges",this.lifecycleticks);
  }

  fireEvent(){
    this.childEvent.emit('Hey CodeEvolution');
  }
}
