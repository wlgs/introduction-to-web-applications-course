import { Component, OnInit, ViewChild } from '@angular/core';
import { Zad6childComponent } from '../zad6child/zad6child.component';

@Component({
  selector: 'app-zad6parent',
  templateUrl: './zad6parent.component.html',
  styleUrls: ['./zad6parent.component.css']
})
export class Zad6parentComponent implements OnInit {

  
  constructor() { }
  
  @ViewChild(Zad6childComponent)
  childComponent: Zad6childComponent

  ngOnInit(): void {
  }

  clicks: number

  getClickValue(cnt: number){
    this.clicks = cnt
    if(this.clicks==10){
      this.childComponent.disableClick=true
    }
  }
}
