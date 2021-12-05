import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabliczka',
  templateUrl: './tabliczka.component.html',
  styleUrls: ['./tabliczka.component.css']
})
export class TabliczkaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tabliczka(stringArray: string[], intArray: number[]): string{
    let result = ""
    for (let str of stringArray){
      for (let n of intArray){
          result += str + n + " "
      }
      result += "\n"
    }
    return result
  }

}
