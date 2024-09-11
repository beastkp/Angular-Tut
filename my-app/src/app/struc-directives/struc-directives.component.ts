import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struc-directives',
  template: `
  <h2 *ngIf="displayName; else elseBlock"> This is structural Directives</h2>
  <!-- here h2 element is removed from the Dom itself, different from display=none as the element can be still sene in the DOM-->
   <ng-template #elseBlock> 
    <!-- This is like a container for other elements that the ngif directive can use to properly add or remove blocks of html  -->
    <h2>Name is hidden</h2>
   </ng-template>
   <h1>Stuc irect</h1>

   <!-- alternate syntax -->
    <div *ngIf="alternate; then thenBlock;else else2Block">
      <h2>this is the alternate syntax</h2>
    </div>

    <ng-template #thenBlock>
      <h2>this is then</h2>
    </ng-template>

    <ng-template #else2Block>
      <h2>this is else block</h2>
    </ng-template>

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked the red color </div>
      <div *ngSwitchCase="'blue'">You have picked the blue color </div>
      <div *ngSwitchCase="'green'">you picked green color</div>
      <div *ngSwitchDefault>pick again</div>
    </div>

    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>

    <div [appClass]="'orange'">
    <!-- <div appClass [backgroundColor]="'orange'"> -->
      <!-- appClass is a custom directive, and background color is the paramater passed to the appClass directive, after writing the cleaner implementation we can now set the property directly like ngClass  -->
      This is the custom directive
    </div>

    <ul *appTimes="5">
      <li>Hi hello</li>
    </ul>
  `,

  styles: []
})
export class StrucDirectivesComponent implements OnInit {
  public displayName = false;
  public alternate = true;
  public color = "blue";
  public colors = ["red","blue","green","yellow"];
  constructor() { }

  ngOnInit(): void {
  }

}
