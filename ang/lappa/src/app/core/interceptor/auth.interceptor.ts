import { Injectable } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private adalService: MsAdalAngular6Service) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.adalService.accessToken
      })
    });

    console.log('Intercepted HTTP call', authReq);

    return next.handle(authReq);
  }
}
