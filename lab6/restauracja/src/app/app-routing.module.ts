import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishAddComponent } from './dish-add/dish-add.component';
import { DishesComponent } from './dishes/dishes.component';
import { AuthGuard } from './guard/auth.guard';
import { DishDetailsGuard } from './guard/dish-details.guard';
import { LoginTwiceGuard } from './guard/login-twice.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenagerdashboardComponent } from './menagerdashboard/menagerdashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { SingledishComponent } from './singledish/singledish.component';

const routes: Routes = [
  {path: 'dishes', component: DishesComponent},
  {path: 'dishes/:id', component: SingledishComponent, canActivate:[DishDetailsGuard]},
  {path: 'addnewdish', component: DishAddComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginTwiceGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard-menager', component: MenagerdashboardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard-admin', component: AdmindashboardComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
