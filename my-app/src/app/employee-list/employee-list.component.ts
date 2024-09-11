import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, AfterViewInit {

  @ViewChild('child') child: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log("Parent-child communication",this.child.title);
  }

}
