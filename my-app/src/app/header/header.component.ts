import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title:string ='kp';
  constructor( private dataservice : DataService) { }

  ngOnInit(): void {
  }

  onChange(value:boolean){
    this.dataservice.setCheckedValue(value);
  }

}
