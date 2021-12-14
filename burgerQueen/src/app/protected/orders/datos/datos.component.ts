import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  get historialClient(){
    return this.serviceOrders.historialClient
  }

  get user(){
    return this.authService.user
  }
  constructor( private serviceOrders:OrdersService, private router:Router, private authService: AuthService) { }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }

}
