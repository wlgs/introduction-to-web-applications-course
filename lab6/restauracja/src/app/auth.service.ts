import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { FireBaseServiceService } from './fire-base-service.service';
import { Roles, User } from './User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData: any = null
  userRoles: Roles = {guest:true, admin:false, menager:false, client:false}
  persistenceSetting: string = "local"

  constructor(private afAuth: AngularFireAuth, private router: Router, private fb: FireBaseServiceService) {
    afAuth.authState.subscribe((ev: any) => {
      console.log(this.userRoles)
      if(ev){
        this.userData = ev
      this.fb.getUserRoles(ev?.uid).pipe(first()).subscribe((res: any) => {
        this.userRoles = res as Roles})
      }
      else{
        this.userData = null
        this.userRoles = {guest:true, admin:false, menager:false, client:false}
      }
    })
  }

  signInEmailPass(email: string, password: string) {
    return this.afAuth.setPersistence(this.persistenceSetting).then(_ => {
      return this.afAuth.signInWithEmailAndPassword(email, password).then(ev => {
        window.alert("Pomyślnie zalogowano, witaj " + ev.user?.email)
        this.router.navigate([''])
      }).catch((err) => {
        window.alert(err.message)
      })
    })

  }

  registerEmailPass(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
      let userData = new User(res.user)
      this.fb.addNewUser(userData)
      window.alert("Pomyślnie zarejestrowano.")

    }).catch((err) => {
      window.alert(err.message)
    })
  }

  getCurrentUserData() {
    return this.afAuth.currentUser
  }

  signOut() {
    return this.afAuth.signOut().then(ev => {
      this.router.navigate([''])
    })
  }

  isLoggedIn() {
    return this.userData != null
  }

  changePersistence(newSetting: string) {
    this.persistenceSetting = newSetting
  }
}
