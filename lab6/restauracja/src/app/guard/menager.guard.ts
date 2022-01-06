import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouteReuseStrategy,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { FireBaseServiceService } from '../fire-base-service.service';

@Injectable({
  providedIn: 'root',
})
export class MenagerGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(this.auth.userRoles.menager);
    if (this.auth.userRoles.menager) {
      console.log('MENAGER IN');
      return true;
    }
    console.log('MENAGER OUT');
    this.router.navigate(['']);
    return false;

    // return this.auth.getAuthenticated().pipe(map(user=>{
    //   console.log(this.auth.userRoles.admin)
    //   if(this.auth.userRoles.admin !== true){
    //     this.router.navigate([''])
    //     return false
    //   }
    //   return true
    // }))
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FireBaseServiceService
  ) {}
}
