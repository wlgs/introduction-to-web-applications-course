import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DishAddComponent } from './dish-add/dish-add.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SingledishComponent } from './singledish/singledish.component';

const routes: Routes = [
  {path: 'dishes', component: DishesComponent},
  {path: 'dishes/:id', component: SingledishComponent},
  {path: 'addnewdish', component: DishAddComponent},
  {path: 'cart', component: CartComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
