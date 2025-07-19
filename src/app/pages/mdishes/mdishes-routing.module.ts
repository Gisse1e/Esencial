import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdishesPage } from './mdishes.page';

const routes: Routes = [
  {
    path: '',
    component: MdishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdishesPageRoutingModule {}
