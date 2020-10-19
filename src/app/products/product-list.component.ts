import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: ['h2 {color: purple}']

})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  productId = 3;
  intervalId: any;
  differentQty = 10;

  ngOnInit(): void {

    this.products = [
      { id: 1, description: 'cups', quantity: 1, price: 12.99 },
      { id: 2, description: 'spoons', quantity: 10000, price: 24.0 },
      { id: 3, description: 'knives', quantity: 0, price: 53.23 }
    ];

  }

  trackByFunction(index: number, product: Product): number {
    return product.id;
  }


  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }
}
