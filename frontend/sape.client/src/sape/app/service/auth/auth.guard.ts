import { SAPE_LOGIN } from './../../app.routing.mapping';

import { Injectable }     from '@angular/core';
import {CanActivate, CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot, Router}    from '@angular/router';
import {AuthService} from "./auth.service";

/**
 * Guard that control the access to routers
 */
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(): boolean {
    if (this.authService.isLoggedIn()) { 
      return true; 
    }

    // Navigate to the login page with extras
    this.router.navigate([SAPE_LOGIN.routingFull]);
    return false;
  }
}
