import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './protected/orders/orders.component';
import { ProductsComponent } from './protected/products/products.component';
import { UsersComponent } from './protected/users/users.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  {
    path:'auth',
    component:LoginComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
