import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { PullOutCellComponent } from './pull-out-cell/pull-out-cell.component';


const routes: Routes = [
  { path: 'default', component: DefaultComponent},
  { path: 'pull-out-cell', component: PullOutCellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
