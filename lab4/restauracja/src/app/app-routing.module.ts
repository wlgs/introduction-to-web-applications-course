import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'dishes', component: DishesComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
