import { Injectable } from '@angular/core';
import { Dish } from './IDish';

@Injectable({
  providedIn: 'root'
})
export class BasketInfoService {

  constructor() { }

  dishes: Dish[] = []

  setBasket(dishes: Dish[]){
    this.dishes=dishes
  }

  getBasket(): Dish[]{
    return this.dishes
  }
}
