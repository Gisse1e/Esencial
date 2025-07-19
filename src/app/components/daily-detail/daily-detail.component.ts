import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Menu } from '../../data/menus';

@Component({
  selector: 'app-daily-detail',
  templateUrl: './daily-detail.component.html',
  styleUrls: ['./daily-detail.component.scss'],
  standalone: false,
})
export class DailyDetailComponent {
  @Input() menu: any;

  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }
} 