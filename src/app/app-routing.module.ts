import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  // Redirecciones a tabs
  { path: 'daily', redirectTo: 'tabs/daily', pathMatch: 'full' },
  { path: 'mdishes', redirectTo: 'tabs/mdishes', pathMatch: 'full' },
  { path: 'desserts', redirectTo: 'tabs/desserts', pathMatch: 'full' },
  { path: 'drinks', redirectTo: 'tabs/drinks', pathMatch: 'full' },
  { path: 'account', redirectTo: 'tabs/account', pathMatch: 'full' },
  { path: 'favs', redirectTo: 'tabs/favs', pathMatch: 'full' },
  { path: 'cart', redirectTo: 'tabs/cart', pathMatch: 'full' },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
