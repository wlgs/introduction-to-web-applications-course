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
  showLoader: boolean = false;

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
    if (!this.loginForm.valid) {
      this.showError = true;
      this.showLoader = false;
      return;
    }
    this.showLoader = true;
    this.showError = false;
    let login = this.loginForm.get('login')!.value
    let pass = this.loginForm.get('password')!.value
    this.auth.signInEmailPass(login,pass)
    this.loginForm.reset()
    this.showLoader = false;
  }

}
