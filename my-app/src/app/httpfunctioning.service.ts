import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpfunctioningService {

  private _url: string = '/assets/employees.json';
  
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<IEmployee[]> {
    const headers = new HttpHeaders({'token':'12jhytr3edcv4b5'})
    return this.http
      .get<IEmployee[]>(this._url,{
        headers:headers,
        //you cannot add the common headers like this for every request as you are duplicating the code, so here http interceptors come into play 
      })
      .pipe(catchError(this.errorHandler));
      // pipe is used to chain Rxjs Operators together 
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}
