
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap  } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Outgoing Http Request', request);
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      //We call next.handle(request) to pass the request to the next interceptor in the chain, or the backend server.
      //tap operator is used to intercept the incoming response 
      console.log('Incoming Http Response', event);
      
    }));
  }
}
