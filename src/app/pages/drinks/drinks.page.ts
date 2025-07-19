import { Component } from '@angular/core';
import { PRODUCTS, Product } from '../../data/products';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
  standalone: false,
})
export class DrinksPage {
  products: Product[] = PRODUCTS.filter(p => p.category === 'drinks');
}
