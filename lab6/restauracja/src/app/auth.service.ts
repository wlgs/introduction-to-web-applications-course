import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FireBaseServiceService } from './fire-base-service.service';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router, private fb: FireBaseServiceService){
    afAuth.authState.subscribe((ev:any) => {
      console.log("user changed")
      console.log("prev: " + this.userData)
      this.userData = ev
      console.log("now:" + ev)
      console.log(" ")
    })
  }

  signInEmailPass(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password).then(ev=> {
      window.alert("Pomyślnie zalogowano, witaj " + ev.user?.email)
      this.router.navigate([''])
    }).catch((err) =>{
      window.alert(err.message)
    })
  }

  registerEmailPass(email:string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(res=>{
      let userData = new User(res.user)
      this.fb.addNewUser(userData)
      window.alert("Pomyślnie zarejestrowano, możesz się zalogować")
      
    }).catch((err) =>{
      window.alert(err.message)
    })
  }

  getCurrentUserData(){
    return this.afAuth.currentUser
  }

  signOut(){
    return this.afAuth.signOut().then(ev => {
      this.router.navigate([''])
    })
  }

  isLoggedIn(){
    return this.userData!=null
  }
}
