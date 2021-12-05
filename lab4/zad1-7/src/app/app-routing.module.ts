import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UlubAktorComponent } from './ulub-aktor/ulub-aktor.component';

const routes: Routes = [
  {path: 'ulub-aktor', component: UlubAktorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
