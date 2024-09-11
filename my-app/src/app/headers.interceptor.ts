import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Outgoing Http Request', request);
    const GUID = 'f4179b26-21ac-432c-bcd8-cb4bc6e50981';
    const modifiedRequest= request.clone({
      // http requests are immutable. request.clone provides a way to create a modified copy without altering the original request.
      setHeaders: {
        GUID
      } // it specifies that thes eproperties should be changed in the cloned request 
    })
    return next.handle(modifiedRequest);
    //The modified request is passed to the next handler in the chain. If there are no more interceptors, the request is sent to the server
    
    return next.handle(request);
  }
}
