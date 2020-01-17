import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowLatestComponent } from './show-latest/show-latest.component';
import { CastListComponent } from './cast-list/cast-list.component';
import { ShowListComponent } from './show-list/show-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ShowListComponent
  },
  {
    path: 'latest',
    component: ShowLatestComponent
  },
  {
    path: ':id/cast',
    component: CastListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
