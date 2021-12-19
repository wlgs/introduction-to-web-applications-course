import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketInfoService } from '../basket-info.service';
import { Dish } from '../IDish';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private basketService: BasketInfoService) { }
  cart: Dish[] = []
  ngOnInit() {
    this.cart = this.basketService.getBasket()
  }
  
  ngOnDestroy() {
    this.cart = []
  }

  getCartSum(): number{
    let s = 0
    for (let item of this.cart){
      s+= item.price
    }
    return s
  }

}
