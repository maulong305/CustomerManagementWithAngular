import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'', component:ListComponent},
  {path:'create', component:CreateComponent},
  {path:'delete', component:DeleteComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
