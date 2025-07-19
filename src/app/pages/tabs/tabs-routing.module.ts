import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'daily', loadChildren: () => import('../daily/daily.module').then(m => m.DailyPageModule) },
      { path: 'mdishes', loadChildren: () => import('../mdishes/mdishes.module').then(m => m.MdishesPageModule) },
      { path: 'desserts', loadChildren: () => import('../desserts/desserts.module').then(m => m.DessertsPageModule) },
      { path: 'drinks', loadChildren: () => import('../drinks/drinks.module').then(m => m.DrinksPageModule) },
      { path: 'account', loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule) },
      { path: 'favs', loadChildren: () => import('../favs/favs.module').then(m => m.FavsPageModule) },
      { path: 'cart', loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule) },
      { path: '', redirectTo: 'daily', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
