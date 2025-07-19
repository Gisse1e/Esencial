import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decor-background',
  templateUrl: './decor-background.component.html',
  styleUrls: ['./decor-background.component.scss'],
  standalone: false,
})
export class DecorBackgroundComponent {
  @Input() ovalOpacity: number = 1;
  @Input() fadeOut: boolean = false;
}