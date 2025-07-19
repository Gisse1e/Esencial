import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DailyDetailComponent } from '../../components/daily-detail/daily-detail.component';
import { Menu, MENUS } from '../../data/menus';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
  standalone: false,
})
export class DailyPage {
  dailyMenu: Menu = MENUS[1];

  constructor(private modalController: ModalController) {}

  async abrirModal() {
    const modal = await this.modalController.create({
      component: DailyDetailComponent,
      componentProps: {
        menu: this.dailyMenu
      },
      initialBreakpoint: 0.4,
      backdropDismiss: false,
      cssClass: 'modal-sheet-custom'
    });
    await modal.present();
  }
}
