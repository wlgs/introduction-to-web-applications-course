import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zad6child',
  templateUrl: './zad6child.component.html',
  styleUrls: ['./zad6child.component.css']
})
export class Zad6childComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onIncrease.emit(this.counter)
  }

  counter = 0
  disableClick = false

  @Output() onIncrease = new EventEmitter<any>();

  click(){
    this.counter += 1
    this.onIncrease.emit(this.counter)
  }

  reset(){
    if(this.disableClick){
      this.disableClick=false
    }
  }
}
