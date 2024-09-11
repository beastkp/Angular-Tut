import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpfunctioningService } from '../httpfunctioning.service';

@Component({
  selector: 'app-services',
  template: `
  <h2>Employee list in services</h2>
  <h3>{{errorMsg}}</h3>
    <div>
      <ul *ngFor="let employee of httpEmployees">
        <li>{{ employee.name }}</li>
      </ul> 
    </div>
  `,
  styles: [],
})
export class ServicesComponent implements OnInit {

  public Employees:{id:number,name:string, age:number}[] =[];
  public httpEmployees:{id:number,name:string, age:number}[] =[];
  public errorMsg:any;
  
  constructor(private _employeeService: EmployeeService, private _httpcall:HttpfunctioningService) {
    // declaring a variable as private in the constructor makes it accessible only within the class, and it ensures that the service is not exposed outside of the class.
  }

  ngOnInit(): void {
    this.Employees= this._employeeService.getEmployees();
    //this life cycle hook gets called once the component has been initialized like useEffect 
    
    this._httpcall.getEmployees().subscribe(data =>this.httpEmployees = data, error=>this.errorMsg = error);
    //syntax for suscribing to services observables . 
  }
}
