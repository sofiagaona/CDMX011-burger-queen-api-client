import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtecterRoutingModule } from './protecter-routing.module';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent,
    OrdersComponent
  ],
  exports:[
    ProductsComponent,
    UsersComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ProtecterRoutingModule
  ]
})
export class ProtecterModule { }
