import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Dish } from './IDish';

@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {

  dishes: Observable<any[]>; 
  private nextId: number | undefined
  constructor(private db: AngularFireDatabase) { 
    this.dishes = this.db.list('Dishes').valueChanges();
    this.db.list('Dishes', ref=> ref.orderByChild('id').limitToLast(1)).valueChanges().subscribe((res: any[]) => {this.nextId = res.pop().id+1})
  }

  getDishes(): Observable<any[]>{
    return this.dishes
  }

  addDish(dish: Dish){
    this.db.list('Dishes').push({
      id: dish.id,
      Name: dish.name,
      Type: dish.type,
      Category: dish.category,
      Ingredients: dish.ingredients,
      MaxPerDay: dish.maxperday,
      Price: dish.price,
      ShortDesc: dish.shortdesc,
      ImageLink: dish.imagelink,
      Currency: dish.currency,
      Likes: dish.likes,
      Dislikes: dish.dislikes
    })
  }

  removeDish(idx: number){
    console.log(idx)
    this.db.list('Dishes').snapshotChanges().subscribe((items:any) =>{
      for(let i of items){
        if(i.payload.val().id==idx)
        {
          console.log(i.payload.key)
          this.db.list('Dishes').remove(i.payload.key)
        }
      }
    } )


  }
  
  getNextid(){
    return this.nextId
  }
}
