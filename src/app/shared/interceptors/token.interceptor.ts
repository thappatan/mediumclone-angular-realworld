import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistanceService } from '../services/persitance.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  persistanceService!: PersistanceService;

  constructor(private injector: Injector) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.persistanceService = this.injector.get(PersistanceService);
    const token: string = this.persistanceService.get('accessToken');
    req = req.clone({
      setHeaders: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return next.handle(req);
  }
}
