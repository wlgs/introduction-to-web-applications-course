import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { FireBaseServiceService } from '../fire-base-service.service';
import { Dish } from '../IDish';

@Component({
  selector: 'app-singledish',
  templateUrl: './singledish.component.html',
  styleUrls: ['./singledish.component.css']
})
export class SingledishComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private fb: FireBaseServiceService) { }
  private subscription: Subscription | undefined

  id: number = -1
  dish: Dish[] = []
  selected: number = 0
  reviews: review[] = []

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id']
      this.fb.getDishes().pipe(first()).subscribe((dishes: any[]) => {
        let dish: any
        for (let d of dishes){
            if (d.id==this.id){
              dish = d
              break
            }
        }
        console.log(dish)
        console.log(this.id)
        this.dish.push({
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
          dislikes: dish.Dislikes} as Dish)
      })
    })
    
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe()
  }

  nextPhoto(){
    if(this.selected == this.dish[0].imagelink.length-1)
      this.selected = 0
    else{
      this.selected += 1
    }
  }
  previousPhoto(){
    if(this.selected>=1)
      this.selected -= 1
    else{
      this.selected = this.dish[0].imagelink.length-1
    }
  }

  addReview(newReview: review){
    this.reviews.push(newReview);
  }

}
interface review {
  nick: string;
  date: string;
  review: string;
}
