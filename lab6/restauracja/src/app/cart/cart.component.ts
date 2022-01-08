import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { BasketInfoService } from '../basket-info.service';
import { FireBaseServiceService } from '../fire-base-service.service';
import { Dish } from '../IDish';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    public basketService: BasketInfoService,
    private router: Router,
    public auth: AuthService,
    public fb: FireBaseServiceService
  ) {}
  ngOnInit() {
    window.scroll(0,0);
  }

  getCartSum(): number {
    let s = 0;
    for (let item of this.basketService.basket) {
      s += item.price;
    }
    return s;
  }

  getCartIdsOnly(): string[]{
    let arr: string[] = []
    for (let item of this.basketService.basket) {
      arr.push(String(item.id))
    }
    return arr
  }

  order() {
    if(this.basketService.basket.length<=0)
      return
    this.fb.pushOrder(this.getCartIdsOnly(), this.auth.userData.uid)
    window.alert('Pomyślnie złożono zamówienie.');
    this.basketService.basket = [];
    this.router.navigate(['dishes']);
  }

  removeClick(dish: Dish) {
      this.deleteDishOffBasket(dish);
  }

  deleteDishOffBasket(dish: Dish) {
    let idx = 0;
    for (let item of this.basketService.basket) {
      if (item.id == dish.id) {
        this.basketService.basket.splice(idx, 1);
        return;
      }
      idx += 1;
    }
  }
}
