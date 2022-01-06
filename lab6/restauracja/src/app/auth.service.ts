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
      this.userData = ev.user
      console.log("now:" + ev.user)
      console.log(" ")
    })
  }

  signUpEmailPass(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password).then(ev=> {
      window.alert("Pomyślnie zalogowano, witaj " + ev.user?.email)
      this.userData = ev.user
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
    this.userData = null
    return this.afAuth.signOut().then(ev => {
      this.userData = null
      this.router.navigate(['']);
    })
  }

  // constructor(public afAuth: AngularFireAuth, // Inject Firebase auth service
  //   public router: Router,
  //   public ngZone: NgZone) {
  //   this.afAuth.authState.subscribe(user => {
  //     if (user) {
  //       this.userData = user
  //       console.log(user)
  //       // localStorage.setItem('user', JSON.stringify(this.userData));
  //       // JSON.parse(localStorage.getItem('user'));
  //     } else {
  //       this.userData = null
  //       console.log(user)
  //       // localStorage.setItem('user', null);
  //       // JSON.parse(localStorage.getItem('user'));
  //     }
  //   })
  // }

  // SignIn(email: any, password: any) {
  //   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //     .then((result: { user: any; }) => {
  //       this.ngZone.run(() => {
  //         this.router.navigate(['dashboard']);
  //       });
  //       this.userData = result.user;
  //     }).catch((error: { message: any; }) => {
  //       window.alert(error.message)
  //     })
  // }
}
