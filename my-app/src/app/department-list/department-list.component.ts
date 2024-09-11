import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul>
      <li
        *ngFor="let department of departments"
        (click)="onSelect(department)"
        [class.selected]="isSelected(department)"
      >
        <span>{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [
    `
      .selected {
        color: blue;
        background-color: lightblue;
      }
    `,
  ],
})
export class DepartmentListComponent implements OnInit, DoCheck {
  public selectedId: number = 0;

  departments = [
    { id: '1', name: 'Angular' },
    { id: '2', name: 'Node' },
    { id: '3', name: 'Mongo' },
    { id: '4', name: 'Ruby' },
    { id: '5', name: 'BootStrap' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') ?? '0');
      this.selectedId = id;
      console.log(this.selectedId);
    });
  }

  onSelect(department: any) {
    // this.router.navigate(['/departments', department.id]);
    // this takes 2 parameters one is route and other parameter

    // this is relative navigation part now 
    this.router.navigate([department.id] , {relativeTo: this.route});
    //this means that current url is not taken care of. Only append the department id to the current url
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }

  ngDoCheck(): void {
    console.log("onchanges is called ");
  }// this is called everytime we raise an event irrespective of where the component is implemented or available, it will listen to any changes that has happened inseide your entire document 
}
