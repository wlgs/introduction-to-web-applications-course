import { Component, ElementRef, OnInit, HostListener, ViewChild } from '@angular/core';
import { fromEvent, Subscription, tap } from 'rxjs';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  hamburgerOpened: boolean = false
  pageScrolled: boolean = false
  eventSub: Subscription | undefined
  
  
  ngOnInit(): void {
    this.eventSub = fromEvent(window, 'scroll').pipe(
      tap(event => this.onWindowScroll(event))
    ).subscribe();
  }
  ngOnDestroy(): void{
    this.eventSub?.unsubscribe();
  }

  onWindowScroll(ev: any) {
    let element = document.querySelector('.navbar-container') as HTMLElement;
    console.log(element);
    if (window.pageYOffset >= element.clientHeight) {
      this.pageScrolled = true;
    } else {
      this.pageScrolled = false;
    }
  }

  hamburgerHandler(){
    this.hamburgerOpened = !this.hamburgerOpened
  }

  optionChosen(){
    this.hamburgerOpened = false;
  }

}
