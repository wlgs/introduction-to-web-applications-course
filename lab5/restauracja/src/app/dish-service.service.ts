import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from './IDish';

@Injectable({
  providedIn: 'root'
})
export class DishServiceService {

  constructor() { }


  getDishes(): Dish[]{
    let dishes: Dish[] = []
    fetch('./assets/data/dishes.json').then(res => res.json())
      .then(json => {
        for (let p in json["Dishes"]) {
          dishes.push({
            id: json["Dishes"][p]["id"],
            name: json["Dishes"][p]["Name"],
            type: json["Dishes"][p]["Type"],
            category: json["Dishes"][p]["Category"],
            ingredients: json["Dishes"][p]["Ingredients"],
            maxperday: json["Dishes"][p]["MaxPerDay"],
            price: json["Dishes"][p]["Price"],
            shortdesc: json["Dishes"][p]["ShortDesc"],
            imagelink: json["Dishes"][p]["ImageLink"],
            amount: 0,
            currency: json["Dishes"][p]["Currency"],
            likes: json["Dishes"][p]["Likes"],
            dislikes: json["Dishes"][p]["Dislikes"]
          } as Dish)
        }
        
      }
      );
      return dishes
  }

  getDishById(idx: number): Dish[]{
    let dish: Dish[] = []
    fetch('./assets/data/dishes.json').then(res => res.json())
      .then(json => {
          dish.push({
            id: json["Dishes"][idx]["id"],
            name: json["Dishes"][idx]["Name"],
            type: json["Dishes"][idx]["Type"],
            category: json["Dishes"][idx]["Category"],
            ingredients: json["Dishes"][idx]["Ingredients"],
            maxperday: json["Dishes"][idx]["MaxPerDay"],
            price: json["Dishes"][idx]["Price"],
            shortdesc: json["Dishes"][idx]["ShortDesc"],
            imagelink: json["Dishes"][idx]["ImageLink"],
            amount: 0,
            currency: json["Dishes"][idx]["Currency"],
            likes: json["Dishes"][idx]["Likes"],
            dislikes: json["Dishes"][idx]["Dislikes"]
          } as Dish)
      }
      );
      return dish
  }
  }