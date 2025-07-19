import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MdishesPageRoutingModule } from './mdishes-routing.module';
import { MdishesPage } from './mdishes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdishesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MdishesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MdishesPageModule {}
