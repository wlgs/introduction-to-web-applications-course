import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { DishAddComponent } from './dish-add/dish-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DishRatingComponent } from './dish-rating/dish-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DishesComponent,
    HomeComponent,
    DishAddComponent,
    DishRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
