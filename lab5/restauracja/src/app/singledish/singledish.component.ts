import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DishServiceService } from '../dish-service.service';
import { Dish } from '../IDish';

@Component({
  selector: 'app-singledish',
  templateUrl: './singledish.component.html',
  styleUrls: ['./singledish.component.css']
})
export class SingledishComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private dishService: DishServiceService) { }
  private subscription: Subscription | undefined

  id: number = -1
  dish: Dish[] = []
  selected: number = 0
  reviews: review[] = []
  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id']
      this.dish = this.dishService.getDishById(this.id)
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
