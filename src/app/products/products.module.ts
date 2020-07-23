import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './list/product-list.component';
import { ProductRowComponent } from './row/product-row.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [ProductListComponent,  ProductRowComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

