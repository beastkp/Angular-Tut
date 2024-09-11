import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  <div>
    {{name | uppercase}}
    {{message | slice:3:5}}
    <!-- this means slice from 3 to 5  -->
  </div>
  <div>
    
    {{person | json}} 
    <!-- this will print the object in json format -->
  </div>
  <h2>{{5.678 | number:'1.2-3'}}</h2>
  <h2>{{5.678 | number:'2.4-8'}}</h2>
  <!-- in 1.2-3 the 1 stands for digits before decimal 2-3 stands for 2 to 3 digits allowed after decimal -->
   <h2>{{date}}</h2>
   <h2>{{date | date:'short'}}</h2>
   <h2>{{date | date:'shortDate'}}</h2>
   <h2>{{date | date:'shortTime'}}</h2>
   <!-- pipies only transform data for the view does not change property in class  -->

   <!-- <input type="text" (input)="onMilesChange($event.target?.value)"> -->
    <!-- <div>{{miles | convert :'m' :'k'}}</div> -->
    <div>{{miles | convert :'m' }}</div>
    <!-- <div>{{miles | convert :'m' | number:'1.2-3'}}</div> -->
<!-- Here the : '' syntax is used to add paramters to the pipe -->
    
  `,
  styles: []
})
export class PipesComponent implements OnInit {

  public name = "John";
  public message = "Welcome John";
  public person = {
    "firstname": "John",
    "secondname":"Doe"
  }
  public miles:number = 10;

  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
}
