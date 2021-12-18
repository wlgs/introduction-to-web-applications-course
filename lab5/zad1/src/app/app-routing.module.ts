import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PhotospageComponent } from './photospage/photospage.component';
import { PostspageComponent } from './postspage/postspage.component';
import { SinglephotoComponent } from './singlephoto/singlephoto.component';

const routes: Routes = [
  {path: 'posts' , component: PostspageComponent},
  {path: 'photos', component: PhotospageComponent},
  {path: 'photos/:id', component: SinglephotoComponent},
  {path: '', component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
