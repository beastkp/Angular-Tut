import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html', 
  template:`
    <h2>This is the way to write inline html {{name}}</h2> 
    <h2>{{"Welcome " + name}}</h2> 
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <input [id] = "myId" type="text" value="SG"> 
    <!-- this is property binding -->
    <input id= "{{myId}}" type="text" value="SG">
    <input [disabled]="false" type="text" value="SG">
    <input bind-disabled="false" type="text" value="SG">
    <!-- interpolation doesnt work with all kinds of values like boolean etc. So you need to write it as [] for property binding, if there were no [] then assigning vlues wouldnt have work as diables is true by defualt   -->
  `,
  // even string concatenations and math operations can be performed
  // styleUrls: ['./test.component.css']
  styles:[`
    h2{
      color:red;
    }
    `]
})
export class TestComponent implements OnInit {

  public name="Krish"; // using {{}} means interpolation
  public myId = "Test"
  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello "+ this.name;
  }

}
