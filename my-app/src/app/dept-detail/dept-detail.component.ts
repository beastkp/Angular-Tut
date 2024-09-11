import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dept-detail',
  template: `
    <h1>You Selected Department with id = {{ departmentId }}</h1>
    <div>
      <a (click)="goPrevious()">Previous</a>
      <a (click)="goNext()">Next</a>
    </div>
    <div>
      <button (click)="goToDepartments()">Back</button>
    </div>
  `,
  styles: [],
})
export class DeptDetailComponent implements OnInit {

  public departmentId: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')??'0');
    // if we are navigating from one component to the next internally snapshot approach wont work
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') ?? '0');
      //ParamMap API provides the function get for retrieving a single parameter value.
      this.departmentId = id;
    }); // another instance of activated route. this.route.paramMap returns an observable so you need to subscribe to it.
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department-list', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department-list', nextId]);
    // this.router.navigate([this.departmentId], {relativeTo: this.route});

  }

  goToDepartments(){
    let selectedId = this.departmentId? this.departmentId: null; 
    // this.router.navigate(['/departments',{id:selectedId}]); //this object here is calledas optional route pararmeters which is passed as key value pair, it is as localhost:4200/departments;id=2

    // we will read this parameter and then access it to highlight the visited link 


    // this is the version for relative navigation 
    this.router.navigate(['../',{id:selectedId}], {relativeTo: this.route});
  }
}
