import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketInfoService } from '../basket-info.service';
import { FireBaseServiceService } from '../fire-base-service.service';
import { Dish } from '../IDish'
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor(private basketService: BasketInfoService,
    private fb: FireBaseServiceService) { }

  dishes: any[] = []
  cart: Dish[] = []

  amountToShow: number = 5;
  currentPage: number = 0;


  dishesSub: Subscription | undefined

  ngOnInit(): void {
    this.dishesSub = this.fb.getDishes().subscribe(change => {
      this.dishes = []
      for (let dish of change){
        this.dishes.push({
          id: dish.id,
          name: dish.Name,
          type: dish.Type,
          category: dish.Category,
          ingredients: dish.Ingredients,
          maxperday: dish.MaxPerDay,
          price: dish.Price,
          shortdesc: dish.ShortDesc,
          imagelink: dish.ImageLink,
          amount: 0,
          currency: dish.Currency,
          likes: dish.Likes,
          dislikes: dish.Dislikes,
        } as Dish)
      }
    })
    this.cart = []
  }

  ngOnDestroy() {
    this.basketService.setBasket(this.cart)
    this.dishesSub?.unsubscribe()
  }


  createRange(n: number): any[]{
    return new Array(n)
  }

  changePage(n: number){
    this.currentPage = n
  }


  setAmountToShow(amount: number){
    this.amountToShow = amount;
    console.log(this.amountToShow)
  }


  getCartValue(): number{
    let s = 0
    for (let dish of this.cart){
      s+= dish.price
    }
    return s
  }

  addClick(dish: Dish) {
    if (dish.amount < dish.maxperday)
    {
      dish.amount += 1
      this.cart.push(dish)
    }
  }

  removeClick(dish: Dish) {
    console.log(dish)
    if (dish.amount >= 1)
    {
      const index = this.cart.indexOf(dish);
      if (index > -1)
        this.cart.splice(index, 1);
      dish.amount -= 1
    }
  }

  getOrderedAmount(dishes: Dish[]): number {
    let amount = 0;
    for (let dish of dishes) {
      amount += dish.amount
    }
    return amount;
  }

  getMaxPriceDish(dishes: Dish[]): Dish {
    let max = -1
    let maxDish = <Dish>{}
    for (let dish of dishes) {
      if (dish.price > max) {
        max = dish.price
        maxDish = dish
      }
    }
    return maxDish
  }

  getMinPriceDish(dishes: Dish[]): Dish {
    let min = 9999
    let minDish = <Dish>{}
    for (let dish of dishes) {
      if (dish.price < min) {
        min = dish.price
        minDish = dish
      }
    }
    return minDish
  }

  deleteDish(idx: number) {
    let index = this.cart.indexOf(this.dishes[idx])
    while (index >= 0){
      this.cart.splice(index, 1);
      index = this.cart.indexOf(this.dishes[idx])
    }
    this.fb.removeDish(idx)
  }


  formSubmitEventHandler(dish: Dish) {
    this.dishes.push(dish)
  }

  ratingEventHandler(dish: Dish, ev: any) {
    if (ev == 1) {
      dish.likes += 1
    }
    else {
      dish.dislikes += 1
    }
  }


}
