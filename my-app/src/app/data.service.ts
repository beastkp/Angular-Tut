import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private isCheckedSubject = new BehaviorSubject<Boolean>(false);
  public isChecked$ = this.isCheckedSubject.asObservable();

  constructor() { }

  public setCheckedValue(value: boolean){
    this.isCheckedSubject.next(value);//updates the current value of the subject and all subscribers to isChecked$ will receive the value 
    console.log("This is dataservice ", this.isChecked$)
  }
}
