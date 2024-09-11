import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  //here the component decorator specifies to angular that it might use dependencies so injectable decorator is not used here 
  selector: 'app-employee-detail',
  template: `
    <div>
      <h2>this is employee detials</h2>
      <ul *ngFor="let employee of Employees">
        <li>{{employee.id}}.{{employee.name}} - {{employee.age}}</li>
        <ng-content></ng-content>
      </ul>
    </div>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit,AfterContentInit {

  @ContentChild('projectedContent',{static:true}) content!:ElementRef;

  // !-tells typescript that this property will be assigned by angular and should not be considered null or undefined 

  public Employees:{id:number,name:string,age:number}[]=[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.Employees = this._employeeService.getEmployees();
    console.log(this.Employees);
    
  }

  ngAfterContentInit(): void {
    console.log('Projected Content is:', this.content.nativeElement.innerHTML);
  }

}
