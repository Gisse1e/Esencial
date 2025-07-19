import { Component } from '@angular/core';
import { PRODUCTS, Product } from '../../data/products';

@Component({
  selector: 'app-mdishes',
  templateUrl: './mdishes.page.html',
  styleUrls: ['./mdishes.page.scss'],
  standalone: false,
})
export class MdishesPage {
  products: Product[] = PRODUCTS.filter(p => p.category === 'mdishes');
}
