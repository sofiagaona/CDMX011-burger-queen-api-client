import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../../services/orders.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent  {

  //@ViewChild('txtName') txtName!:ElementRef<HTMLInputElement>
 formOrderCliente: FormGroup=this.fb.group({
   cliente:['',[Validators.required]]
 })

  constructor(private fb:FormBuilder, private serviceOrders:OrdersService) { }

  AddClient(){
    const {cliente} = this.formOrderCliente.value
    
    if (cliente.trim().length===0){
       return
       }
  
    this.createOrder();
    localStorage.removeItem('comanda');
  }
  
  createOrder(){
    const {cliente}=this.formOrderCliente.value;
    const products = this.serviceOrders.comanda;
    this.serviceOrders.createOrder(cliente, products)
      .subscribe(orders=>{
        if(orders==='Pendiente'){
          Swal.fire({
            title: 'OK!',
            text: 'La orden se a generado exitosamente',
            confirmButtonText: 'OK'
          })
        
          //localStorage.setItem('order',JSON.stringify(this.serviceOrders.) );
          
        }
        else{
        
          Swal.fire({
            title: 'Error!',
            text: orders,
            confirmButtonText: 'OK'
          })
        }
  
      })
  }
 

}
