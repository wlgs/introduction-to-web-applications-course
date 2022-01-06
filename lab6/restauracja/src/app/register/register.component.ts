import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) { }


  showError: boolean = false;
  showOk: boolean = false;

  ngOnInit(): void {
  }

  regForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  });

  submitForm(){
    console.log(this.regForm.valid);
    if (!this.regForm.valid) {
      this.showError = true;
      return;
    }
    let login = this.regForm.get('login')!.value
    let pass = this.regForm.get('password')!.value
    this.showError = false;
    this.auth.registerEmailPass(login, pass)   
    this.regForm.reset()
  }

}
