import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.getAuthenticated().pipe(
      map((user) => {
        // console.log(this.auth.userRoles.admin);
        if (this.auth.userRoles.admin !== true) {
          this.router.navigate(['']);
          return false;
        }
        return true;
      })
    );
  }

  constructor(private auth: AuthService, private router: Router) {}
}
