import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor() { }

  dishes: Dish[] = []

  
  ngOnInit(): void {
    fetch('./assets/data/dishes.json').then(res => res.json())
    .then(json => {
      for (let p in json["Dishes"]){
        this.dishes.push({
          name: json["Dishes"][p]["Name"],
          type: json["Dishes"][p]["Type"],
          category: json["Dishes"][p]["Category"],
          ingredients: json["Dishes"][p]["Ingredients"],
          maxperday: json["Dishes"][p]["MaxPerDay"],
          price: json["Dishes"][p]["Price"],
          shortdesc: json["Dishes"][p]["ShortDesc"],
          imagelink: json["Dishes"][p]["ImageLink"],
          amount:0,
          currency:json["Dishes"][p]["Currency"],
          likes:json["Dishes"][p]["Likes"],
          dislikes:json["Dishes"][p]["Dislikes"]
        } as Dish)
      }
    });
  }

  addClick(dish: Dish){
    if(dish.amount<dish.maxperday)
      dish.amount += 1
  }

  removeClick(dish: Dish){
    console.log(dish)
    if(dish.amount>=1)
      dish.amount -= 1
  }

  getOrderedAmount(dishes: Dish[]): number{
    let amount = 0;
    for (let dish of dishes){
      amount += dish.amount
    }
    return amount;
  }

  getMaxPriceDish(dishes: Dish[]): Dish{
    let max = -1
    let maxDish = <Dish>{}
    for (let dish of dishes){
      if (dish.price > max){
        max = dish.price
        maxDish = dish
      }
    }
    return maxDish
  }

  getMinPriceDish(dishes: Dish[]): Dish{
    let min = 9999
    let minDish = <Dish>{}
    for (let dish of dishes){
      if (dish.price < min){
        min = dish.price
        minDish = dish
      }
    }
    return minDish
  }

  deleteDish(dish: Dish){
    for (var _i = 0; _i < this.dishes.length; _i++) {
      if (this.dishes[_i] == dish){
        this.dishes.splice(_i,1)
        return
      }
    }
  }


  formSubmitEventHandler(dish: Dish){
    this.dishes.push(dish)
  }

  ratingEventHandler(dish: Dish, ev: any){
    if (ev == 1){
      dish.likes += 1
    }
    else{
      dish.dislikes += 1
    }
  }


}



export interface Dish{
  name:string;
  type:string;
  category:string;
  ingredients:string;
  maxperday:number;
  price:number;
  shortdesc:string;
  imagelink:string;
  amount:number;
  currency:string;
  likes:number;
  dislikes:number;
}
