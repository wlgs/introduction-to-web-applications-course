import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }


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
