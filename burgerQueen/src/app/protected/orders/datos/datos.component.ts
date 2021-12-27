import { Component, ContentChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../interfaces/interfaces.orders';
import {ModalOrderComponent} from '../modal-order/modal-order.component'

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
 
get listOrder(){
  return this.serviceOrders.listOrder
}

  get user(){
    return this.authService.user
  }
  constructor( private serviceOrders:OrdersService, private router:Router, private authService: AuthService,
    private modalService: NgbModal) { }

    openModal (order:Order) { 
      const modalRef = this.modalService.open (ModalOrderComponent, 
        { 
          scrollable: true,
          windowClass: 'myCustomModalClass', 
          keyboard: false,
          backdrop: 'static'
        }); 
  
      let data = { 
        cliente: order.cliente, 
        status: order.status, 
        prop3: 'Esto puede ser cualquier cosa' 
      } 
  
      modalRef.componentInstance.fromParent = order; 
      modalRef.result.then ((resultado) => { 
        console.log (resultado); 
      }, (motivo) => { 
      }); 
    } 

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }

}
