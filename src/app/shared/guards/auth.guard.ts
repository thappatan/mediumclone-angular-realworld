import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PersistanceService } from '../services/persitance.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.persistanceService.get('accessToken')) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
