import { Component, Input } from '@angular/core';
import { Product } from '../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: false,
})
export class ProductListComponent {
  @Input() products: Product[] = [];
}
