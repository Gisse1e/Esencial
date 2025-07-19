import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinksPageRoutingModule } from './drinks-routing.module';

import { DrinksPage } from './drinks.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinksPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DrinksPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DrinksPageModule {}
