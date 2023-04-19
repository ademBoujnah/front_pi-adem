import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path: 'comments', component:CommentComponent},
  {path: 'accueil', component:AccueilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
