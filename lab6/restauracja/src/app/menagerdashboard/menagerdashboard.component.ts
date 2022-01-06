import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BasketInfoService } from '../basket-info.service';
import { FireBaseServiceService } from '../fire-base-service.service';
import { Dish } from '../IDish';

@Component({
  selector: 'app-menagerdashboard',
  templateUrl: './menagerdashboard.component.html',
  styleUrls: ['./menagerdashboard.component.css']
})
export class MenagerdashboardComponent implements OnInit {

  constructor(public auth: AuthService, public basket: BasketInfoService, private fb: FireBaseServiceService) { }


  dishes: Dish[] = []

  ngOnInit(): void {
    this.fb.getDishes().subscribe(change => {
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
          currency: dish.Currency,
          likes: dish.Likes,
          dislikes: dish.Dislikes,
        } as Dish)
      }
    })
  }


  deleteDish(idx: number) {
    this.fb.removeDish(idx)
  }

  updateDish(idx: number){
    window.alert("Not yet implemented")
  }


}
