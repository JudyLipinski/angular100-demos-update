import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-product-row]',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input()
  product;

  @Input()
  rowIndex;

  productQuantityClasses;

  constructor() { }

  ngOnInit() {
    this.productQuantityClasses = {
      'text-warning': this.product.quantity < 10,
      'text-danger': this.product.quantity = 0
    };
  }

}
