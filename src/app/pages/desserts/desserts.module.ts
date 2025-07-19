import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DessertsPageRoutingModule } from './desserts-routing.module';

import { DessertsPage } from './desserts.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DessertsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DessertsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DessertsPageModule {}
