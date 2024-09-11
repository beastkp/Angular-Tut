import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  //this decorator tells angular that this service might itself have injected dependencies. So if you want to inject a service into another service injectable decorator is a must.
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
  getEmployees(){
    return [
      { id: 1, name: 'Mike', age: 31 },
      { id: 2, name: 'Emma', age: 28 },
      { id: 3, name: 'John', age: 45 },
      { id: 4, name: 'Sophia', age: 22 },
      { id: 5, name: 'James', age: 36 },
    ];
  }
}
