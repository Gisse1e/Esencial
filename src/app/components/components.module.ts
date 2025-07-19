import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecorBackgroundComponent } from './decor-background/decor-background.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DailyDetailComponent } from './daily-detail/daily-detail.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [DecorBackgroundComponent, ProductListComponent, DailyDetailComponent],
  imports: [CommonModule, IonicModule],
  exports: [DecorBackgroundComponent, ProductListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {} 