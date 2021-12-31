import { Component, ContentChild, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../interfaces/interfaces.orders';
import {ModalOrderComponent} from '../modal-order/modal-order.component'
import { KitchenService } from '../../services/kitchen.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
public _getOrders:Order[]=[];
public filterOrderByUser:Order[]=[];
get listOrder(){
  return this.serviceOrders.listOrder
}

  get user(){
    return this.authService.user
  }
  constructor( private serviceOrders:OrdersService, private ServiceKitchen:KitchenService, private router:Router, private authService: AuthService,
    private modalService: NgbModal) { 
      this.filterOrderByUser=JSON.parse(localStorage.getItem('listOrder')!)||[];
    }

    ngOnInit(): void {
      this.ServiceKitchen.orders()
      .subscribe(resp=>{ 
        this._getOrders=resp
        this.ServiceKitchen.Listorders(this._getOrders)

        let filtrarOrderUser=resp.filter(element=>{
          return (element.userId.id===this.authService.user.id)&&(element.status==='Pendiente'||element.status==='Terminada'||element.status==='Proceso')
        })
        this.filterOrderByUser= filtrarOrderUser
        localStorage.setItem('listOrder', JSON.stringify(this.filterOrderByUser))
       
      })
      
    }

    openModal (order:Order) { 
      const modalRef = this.modalService.open (ModalOrderComponent, 
        { 
          scrollable: true,
          windowClass: 'myCustomModalClass', 
          keyboard: false,
          backdrop: 'static'
        }); 
   
  
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
