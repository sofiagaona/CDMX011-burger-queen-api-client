import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../interfaces/interfaces.orders';

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.css']
})
export class ModalOrderComponent implements OnInit {

  @Input () fromParent:Order | undefined;

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.fromParent?.userId.id);
    
  } 

  closeModal (sendData:any) { 
    this.activeModal.close (sendData); 
  } 


}
