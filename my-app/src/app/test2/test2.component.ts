import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
  <h2 class="text-success">Thursday</h2>
  <h2 [class]="successclass">Thursday</h2>
  <h2 [class]="successclass" class="special-class">Thursday</h2> 
  <!-- both the properties are applies -->
  <h2 [class.text-danger]="hasError">Thursday</h2> 
  <!-- this is conditional binding -->
  <h2 [ngClass]="messageClass">Thursday</h2> 
  <!-- Here you use ngClass for multiple conditions -->
   <h2 [ngStyle] = "titleStyles"> Style binding</h2>
   <button (click)="onClick($event)">Greet</button>
   <div>{{greeting}}</div>
   <!-- this is event binding -->

    <!-- Reference Variables -->
     <input #myInput type="text">
     <button (click)="logMessage(myInput.value)">Click to log</button>
     <!-- this can be used to access user input for validation adn other purposes  -->

     <!-- 2 way binding  -->
    <!-- The view and the model should always be in sync terefore we use ngmodel -->
     <input [(ngModel)]="name" type="text">
     {{name}}
  `,
  styles: [`
    .text-success{
      color:green;
    }
    .special-class{
      font-style:italic;
    }
    .text-danger{
      color:red;
    }
    `]
})
export class Test2Component implements OnInit {

  public name ="kp"
  public successclass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    "text-success" : !this.hasError,
    "text-danger": this.hasError,
    "special-class":this.isSpecial
  }

  public titleStyles = {
    color:'blue',
    fontStyle: "italic"
  }


  public greeting = ""
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent){
    console.log(event);
    console.log("Welcome Krish!");
    this.greeting = 'Welcome to SG!'
  }

  logMessage(value:string){
    console.log(value);
    
  }

}
