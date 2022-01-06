import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment'; 
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { DishAddComponent } from './dish-add/dish-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DishRatingComponent } from './dish-rating/dish-rating.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';
import { SingledishComponent } from './singledish/singledish.component';
import { DishrateComponent } from './dishrate/dishrate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DishesComponent,
    HomeComponent,
    DishAddComponent,
    DishRatingComponent,
    PagenotfoundComponent,
    CartComponent,
    SingledishComponent,
    DishrateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
