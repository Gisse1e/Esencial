import { Component } from '@angular/core';
import { PRODUCTS, Product } from '../../data/products';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.page.html',
  styleUrls: ['./desserts.page.scss'],
  standalone: false,
})
export class DessertsPage {
  products: Product[] = PRODUCTS.filter(p => p.category === 'desserts');
}
