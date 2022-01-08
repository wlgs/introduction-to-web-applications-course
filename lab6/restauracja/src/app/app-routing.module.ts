import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishAddComponent } from './dish-add/dish-add.component';
import { DishesComponent } from './dishes/dishes.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';
import { DishDetailsGuard } from './guard/dish-details.guard';
import { LoginTwiceGuard } from './guard/login-twice.guard';
import { MenagerGuard } from './guard/menager.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenagerdashboardComponent } from './menagerdashboard/menagerdashboard.component';
import { ModifyDishComponent } from './modify-dish/modify-dish.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { SingledishComponent } from './singledish/singledish.component';

const routes: Routes = [
  { path: 'dishes', component: DishesComponent },
  {
    path: 'dishes/:id',
    component: SingledishComponent,
    canActivate: [DishDetailsGuard],
  },
  { path: 'addnewdish', component: DishAddComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginTwiceGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'menager',
    component: MenagerdashboardComponent,
    canActivate: [MenagerGuard],
  },
  {
    path: 'menager/modify/:id',
    component: ModifyDishComponent,
    canActivate: [AuthGuard, MenagerGuard],
  },
  {
    path: 'admin',
    component: AdmindashboardComponent,
    canActivate: [AdminGuard],
  },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
