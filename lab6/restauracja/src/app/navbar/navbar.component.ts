import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  hamburgerOpened: boolean = false

  ngOnInit(): void {

  }

  hamburgerHandler(){
    this.hamburgerOpened = !this.hamburgerOpened
  }

  optionChosen(){
    this.hamburgerOpened = false;
  }

}
