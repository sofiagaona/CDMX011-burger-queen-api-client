import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../interfaces/interfaces.orders';
import { KitchenService } from '../../services/kitchen.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css']
})
export class ModalOrderComponent implements OnInit {

  @Input () fromParent!:Order ;

  constructor( public activeModal: NgbActiveModal, private orderKitchen:KitchenService) { }

  ngOnInit() {
    console.log(this.fromParent?.userId.id);
    
  } 

  closeModal (sendData:any) { 
    this.activeModal.close (sendData); 
  } 

  updateStatus(idOrder:string, status:string){
    this.orderKitchen.updateOrder(idOrder, status)
    .subscribe(resp=>{
     if(resp===status){
       Swal.fire({
         title: 'OK!',
         text: `La orden esta ${status}`,
         confirmButtonText: 'OK'
       })
       this.ngOnInit();
       //localStorage.setItem('order',JSON.stringify(this.serviceOrders.) );
       
     }
     else{
     
       Swal.fire({
         title: 'Error!',
         text: resp,
         confirmButtonText: 'OK'
       })
     }
   })
  }


}
