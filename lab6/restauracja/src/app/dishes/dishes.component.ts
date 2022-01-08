import {
  Component,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { BasketInfoService } from '../basket-info.service';
import { FireBaseServiceService } from '../fire-base-service.service';
import { Dish } from '../IDish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent implements OnInit {
  constructor(
    public basketService: BasketInfoService,
    private fb: FireBaseServiceService,
    public auth: AuthService
  ) {}

  dishes: any[] = [];

  amountToShow: number = 10;
  currentPage: number = 0;

  dishesSub: Subscription | undefined;

  ngOnInit(): void {
    this.dishesSub = this.fb.getDishes().subscribe((change) => {
      this.dishes = [];
      for (let dish of change) {
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
          currency: dish.Currency,
          likes: dish.Likes,
          dislikes: dish.Dislikes,
        } as Dish);
      }
    });
  }

  ngOnDestroy() {
    this.dishesSub?.unsubscribe();
  }

  countDishInCart(dish: Dish) {
    let cnt = 0;
    for (let item of this.basketService.basket) {
      if (dish.id == item.id) cnt += 1;
    }
    return cnt;
  }

  createRange(n: number): any[] {
    return new Array(n);
  }

  changePage(n: number) {
    this.currentPage = n;
    window.scroll(0,0);
  }

  setAmountToShow(amount: number) {
    this.amountToShow = amount;
    console.log(this.amountToShow);
  }

  getCartValue(): number {
    let s = 0;
    for (let dish of this.basketService.basket) {
      s += dish.price;
    }
    return s;
  }

  addClick(dish: Dish) {
    if (this.auth.userRoles?.client != true) {
      window.alert('Dostępne tylko dla zalogowanych');
      return;
    }
    if (this.countDishInCart(dish) < dish.maxperday) {
      this.basketService.basket.push(dish);
    }
  }

  removeClick(dish: Dish) {
    if (this.auth.userRoles?.client != true) {
      window.alert('Dostępne tylko dla zalogowanych');
      return;
    }
    if (this.countDishInCart(dish) >= 1) {
      this.deleteDishOffBasket(dish);
    }
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

  getOrderedAmount(dishes: Dish[]): number {
    return this.basketService.basket.length;
  }

  getMaxPriceDish(dishes: Dish[]): Dish {
    let max = -1;
    let maxDish = <Dish>{};
    for (let dish of dishes) {
      if (dish.price > max) {
        max = dish.price;
        maxDish = dish;
      }
    }
    return maxDish;
  }

  getMinPriceDish(dishes: Dish[]): Dish {
    let min = 999999;
    let minDish = <Dish>{};
    for (let dish of dishes) {
      if (dish.price < min) {
        min = dish.price;
        minDish = dish;
      }
    }
    return minDish;
  }

  formSubmitEventHandler(dish: Dish) {
    this.dishes.push(dish);
  }

  ratingEventHandler(dish: Dish, ev: any) {
    if (ev == 1) {
      dish.likes += 1;
    } else {
      dish.dislikes += 1;
    }
  }

  alertLogIn() {
    if (!this.auth.userRoles.client)
      window.alert('Dostępne tylko dla zalogowanych');
  }
}
