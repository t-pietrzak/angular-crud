import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './read/details/details.component';
import { ListComponent } from './read/list/list.component';

const routes: Routes = [
  { path:'add', component:CreateComponent },
  { path:'posts', children: [
    { path:'list', component:ListComponent },
    { path: 'details', component:DetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
