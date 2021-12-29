import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtecterRoutingModule } from './protecter-routing.module';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { DatosComponent } from './orders/datos/datos.component';
import { ClienteComponent } from './orders/cliente/cliente.component';
import { BtnMenusComponent } from './orders/btn-menus/btn-menus.component';
import { MenuComponent } from './orders/menu/menu/menu.component'
import { ContadorComponent } from './orders/menu/contador/contador.component';
import { ComandaComponent } from './orders/comanda/comanda/comanda.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalOrderComponent } from './orders/modal-order/modal-order.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { OrdersKitchenComponent } from './kitchen/orders-kitchen/orders-kitchen.component';



@NgModule({
  declarations: [
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    DatosComponent,
    ClienteComponent,
    BtnMenusComponent,
    MenuComponent,
    ContadorComponent,
    ComandaComponent,
    ModalOrderComponent,
    KitchenComponent,
    OrdersKitchenComponent
  ],
  exports:[
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    KitchenComponent
  ],
  imports: [
    CommonModule,
    ProtecterRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProtecterModule { }
