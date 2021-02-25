import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user = localStorage.getItem('user');

    if (user) {
      const { accessToken } = JSON.parse(user);
      // Add Authorization vào request header
      request = request.clone({
        headers: request.headers.append(
          'Authorization',
          `Bearer ${accessToken}`
        ),
      });
    }
    console.log(request);
    return next.handle(request);
  }
}
