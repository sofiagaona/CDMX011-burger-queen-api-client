import { Component, ElementRef, ViewChild } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent  {

  @ViewChild('txtName') txtName!:ElementRef<HTMLInputElement>
  constructor(private serviceOrders:OrdersService) { }
  AddClient(){
    const valor = this.txtName.nativeElement.value
    if (valor.trim().length===0){
      return
    }
    this.serviceOrders.listClient(valor)
    this.txtName.nativeElement.value="";
  }
 

}
