import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { DishAddComponent } from './dish-add/dish-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DishRatingComponent } from './dish-rating/dish-rating.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';
import { SingledishComponent } from './singledish/singledish.component';
import { DishrateComponent } from './dishrate/dishrate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MenagerdashboardComponent } from './menagerdashboard/menagerdashboard.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifyDishComponent } from './modify-dish/modify-dish.component';
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
    RegisterComponent,
    DashboardComponent,
    AdmindashboardComponent,
    MenagerdashboardComponent,
    FooterComponent,
    ModifyDishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
