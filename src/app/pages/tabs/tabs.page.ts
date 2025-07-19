import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  activeTopTab = '';
  activeBottomTab = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Top tabs
        if (event.urlAfterRedirects.includes('/tabs/daily')) {
          this.activeTopTab = 'daily';
        } else if (event.urlAfterRedirects.includes('/tabs/mdishes')) {
          this.activeTopTab = 'mdishes';
        } else if (event.urlAfterRedirects.includes('/tabs/desserts')) {
          this.activeTopTab = 'desserts';
        } else if (event.urlAfterRedirects.includes('/tabs/drinks')) {
          this.activeTopTab = 'drinks';
        } else {
          this.activeTopTab = '';
        }
        // Bottom tabs
        if (event.urlAfterRedirects.includes('/tabs/account')) {
          this.activeBottomTab = 'account';
        } else if (event.urlAfterRedirects.includes('/tabs/favs')) {
          this.activeBottomTab = 'favs';
        } else if (event.urlAfterRedirects.includes('/tabs/cart')) {
          this.activeBottomTab = 'cart';
        } else {
          this.activeBottomTab = '';
        }
      }
    });
  }

  setActiveTopTab(tab: string) {
    this.activeTopTab = tab;
    this.activeBottomTab = '';
  }

  setActiveBottomTab(tab: string) {
    this.activeBottomTab = tab;
    this.activeTopTab = '';
  }
}
