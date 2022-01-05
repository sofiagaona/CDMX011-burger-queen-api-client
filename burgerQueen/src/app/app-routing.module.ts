import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './protected/orders/orders.component';
import { ProductsComponent } from './protected/products/products.component';
import { UsersComponent } from './protected/users/users.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { KitchenComponent } from './protected/kitchen/kitchen.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { AdminComponent } from './protected/admin/admin.component';

const routes: Routes = [
  {
    path:'auth',
    component:LoginComponent
  },
  {
    path:'orders',
    component:OrdersComponent,
    canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'kitchen',
    component:KitchenComponent,
    canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[ValidarTokenGuard],
    canLoad:[ValidarTokenGuard]
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
