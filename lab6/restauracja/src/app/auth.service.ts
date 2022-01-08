import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { first, firstValueFrom, Observable } from 'rxjs';
import { FireBaseServiceService } from './fire-base-service.service';
import { Roles, User } from './User';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any = null;
  userRoles: Roles = {
    guest: true,
    admin: false,
    menager: false,
    client: false,
    banned: false,
  };
  persistenceSetting: string = 'local';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private fb: FireBaseServiceService
  ) {
    afAuth.authState.subscribe(async (ev: any) => {
      // console.log(this.userRoles);
      // console.log(this.isLoggedIn());
      // console.log(this.userData);
      // console.log(' ');
      if (ev) {
        this.userData = ev;
        const roles = await this.fb.getUserRoles(ev?.uid);
        this.userRoles = roles as Roles;
      } else {
        this.userData = null;
        this.userRoles = {
          guest: true,
          admin: false,
          menager: false,
          client: false,
          banned: false,
        };
      }
      // console.log(this.userRoles);
      // console.log(this.isLoggedIn());
      // console.log(this.userData);
      // console.log(' ');
    });
  }

  signInEmailPass(email: string, password: string) {
    return this.afAuth.setPersistence(this.persistenceSetting).then((_) => {
      return this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((ev) => {
          this.router.navigate(['dashboard']);
        })
        .catch((err) => {
          window.alert(err.message);
        });
    });
  }

  registerEmailPass(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        let userData = new User(res.user);
        this.fb.addNewUser(userData);
        this.router.navigate(['dashboard']);
      })
      .catch((err) => {
        window.alert(err.message);
      });
  }

  getCurrentUserData() {
    return this.afAuth.currentUser;
  }

  getAuthenticated(): Observable<any> {
    return this.afAuth.authState;
  }

  signOut() {
    return this.afAuth.signOut().then((ev) => {
      this.router.navigate(['']);
    });
  }

  isLoggedIn() {
    return this.userData != null;
  }

  changePersistence(newSetting: string) {
    this.persistenceSetting = newSetting;
  }
}
