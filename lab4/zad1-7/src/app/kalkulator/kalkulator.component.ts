import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.css']
})
export class KalkulatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value1 = 0
  value2 = 0
  screenShow = "0"
  curPos = 0
  operatorsDisabled = false
  operatorUsed = ""
  
  clickedButton(ev:any){
    let entered = ev.path[0].textContent
    if (Number(entered)>=0 && Number(entered)<=9 && this.curPos<5){
      if(this.screenShow=="0")
        this.screenShow = entered
      else{
        this.screenShow +=entered
        this.curPos += 1
      }

      return
    }
    else if (entered=="+"){
      this.curPos = 0
      this.value1 = Number(this.screenShow)
      this.screenShow = "0"
      this.operatorsDisabled = true
      this.operatorUsed="+"
    }
    else if (entered=="-"){
      this.curPos = 0
      this.value1 = Number(this.screenShow)
      this.screenShow = "0"
      this.operatorsDisabled = true
      this.operatorUsed="-"
    }
    else if (entered=="*"){
      this.curPos = 0
      this.value1 = Number(this.screenShow)
      this.screenShow = "0"
      this.operatorsDisabled = true
      this.operatorUsed="*"
    }
    else if (entered=="C"){
      this.curPos = 0
      this.value1 = 0
      this.screenShow = "0"
      this.operatorsDisabled = false
      this.operatorUsed=""
    }
    else if (entered=="="){
      this.value2 = Number(this.screenShow)
      switch(this.operatorUsed){
        case "+":
          this.screenShow = String(this.value1+this.value2)
          break;
        case "-":
          this.screenShow = String(this.value1-this.value2)
          break;
        case "*":
          this.screenShow = String(this.value1*this.value2)
          break;
      }
      this.operatorUsed=""
    }

  }


}
