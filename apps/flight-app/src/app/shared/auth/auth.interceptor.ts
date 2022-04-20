import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { OAuthStorage } from 'angular-oauth2-oidc';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private storage: OAuthStorage, private router: Router) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith('http://www.angular.at')) {
      const headers = req.headers.set(
        'Authorization',
        'Bearer ' + this.storage.getItem('access_token')
      );

      req = req.clone({ headers });
    }

    return next
      .handle(req)
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(event: HttpErrorResponse) {
    if (event.status == 401 || event.status == 403) {
      this.router.navigate(['/home', { needsLogin: true }]);
    }

    return throwError(event);
  }
}