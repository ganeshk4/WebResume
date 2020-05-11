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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.adalService.accessToken
      })
    });9
    return next.handle(authReq);
  }
}
