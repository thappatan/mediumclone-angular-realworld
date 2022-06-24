import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, Observable, throwError } from 'rxjs';
import { logoutAction } from 'src/app/auth/store/actions/login.action';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((errorResp: HttpErrorResponse) => {
        if (
          errorResp instanceof HttpErrorResponse &&
          errorResp.status === 401
        ) {
          this.store.dispatch(logoutAction());
        }

        return throwError(errorResp);
      })
    );
  }
}
