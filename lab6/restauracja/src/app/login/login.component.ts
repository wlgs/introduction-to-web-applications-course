import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }


  showError: boolean = false;
  showOk: boolean = false;

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  });

  submitForm(){
    console.log(this.loginForm.valid);
    if (!this.loginForm.valid) {
      this.showError = true;
      return;
    }
    let login = this.loginForm.get('login')!.value
    let pass = this.loginForm.get('password')!.value
    this.showError = false;
    this.auth.signUpEmailPass(login,pass)
    
    this.loginForm.reset()
  }

}
