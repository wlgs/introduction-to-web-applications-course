import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BasketInfoService } from '../basket-info.service';
import { Dish } from '../IDish';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    public basketService: BasketInfoService,
    private router: Router
  ) {}
  ngOnInit() {}

  getCartSum(): number {
    let s = 0;
    for (let item of this.basketService.basket) {
      s += item.price;
    }
    return s;
  }

  order() {
    window.alert('Pomyślnie złożono zamówienie.');
    this.basketService.basket = [];
    this.router.navigate(['dishes']);
  }
}
