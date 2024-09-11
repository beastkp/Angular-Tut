import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string = "krish";
  constructor() { 
    setInterval(() => {
      this.name="Krishna";
    }, 2000);
  }
  
  public message="";
}
