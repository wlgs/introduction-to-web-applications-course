import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-zad5',
  templateUrl: './zad5.component.html',
  styleUrls: ['./zad5.component.css']
})
export class Zad5Component implements OnInit {

  constructor() { }

  selectedCompany: string
  selectedModel: string
  selectedColor: string
  carData: any
  colorChoose: string[]

  showColors = false
  showCompanies = false
  showModels = false
  showCar = false


  ngOnInit(): void {
    fetch('./assets/zad5/samochody.json').then(res => res.json())
    .then(json => {
      this.carData = json
      this.showCompanies=true
    });
  }

  chosenCompany(){
    this.showModels = true
    this.showCar = false
    this.showColors = false
  }

  chosenModel(){
    this.showColors = true
    this.colorChoose = this.carData[this.selectedCompany][this.selectedModel]
    this.showCar = false
  }

  chosenColor(){
    this.showCar=true
  }




  
}
