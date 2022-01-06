import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router){
    afAuth.authState.subscribe((ev:any) => {
      console.log("user changed")
      console.log("prev: " + this.userData)
      this.userData = ev
      console.log("now:" + ev)
      console.log(" ")
    })
  }

  signUpEmailPass(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password).then(ev=> {
      window.alert("Pomyślnie zalogowano, witaj " + ev.user?.email)
      this.userData = ev
    }).catch((err) =>{
      window.alert(err.message)
    })
  }

  registerEmailPass(email:string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(ev=>{
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
      console.log(ev)
      this.userData = null
      this.router.navigate(['']);
    })
  }

  isLoggedIn(){
    return this.userData!=null
  }
}
