import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: ['h2 {color: purple}']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  intervalId: any;
  differentQty = 10;


  ngOnInit() {
    this.products = [
      { id: 1423, description: 'cups', quantity: 30 },
      { id: 1232, description: 'spoons', quantity: 10000 },
      { id: 353, description: 'knives', quantity: 0 },
      { id: 324, description: 'notebooks', quantity: 15 },
      { id: 1435, description: 'bottles', quantity: 3 },
      { id: 126, description: 'crystals', quantity: 1 }
    ];

    this.intervalId = setInterval(() => {
      this.products = [
        { id: 1423, description: 'cups', quantity: this.differentQty++ },
        { id: 1232, description: 'spoons', quantity: 10000 },
        { id: 353, description: 'knives', quantity: 0 },
        { id: 324, description: 'notebooks', quantity: this.differentQty++ },
        { id: 1435, description: 'bottles', quantity: 3 },
        { id: 126, description: 'crystals', quantity: 1 }
      ];


    }, 1000);

    setTimeout(() => { clearInterval(this.intervalId); }, 20000);

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }

  trackByFunction(index: number, product: Product): number {
    return product.id;
  }
}
