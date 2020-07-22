import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './list/product-list.component';
import { ProductRowComponent } from './row/product-row.component';


@NgModule({
  declarations: [ProductListComponent,  ProductRowComponent,],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
