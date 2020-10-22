import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './read/details/details.component';
import { ListComponent } from './read/list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path:'add', component:CreateComponent },
  { path:'posts', component:ListComponent },
  { path: 'post/:id', component:DetailsComponent },
  { path: 'update/:id', component:UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
