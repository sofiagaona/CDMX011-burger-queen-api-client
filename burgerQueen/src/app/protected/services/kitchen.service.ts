import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { Order } from '../orders/interfaces/interfaces.orders';
import { catchError, map, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  private _baseUrl: string = environment.baseUrl;
  public getOrders:Order[]=[];
  private _orderUpdate!:Order;
  private _ListOrderTerminada:Order[]=[];



  constructor(private http:HttpClient, private authService: AuthService) { }

  createHeaders(){
    const headers = new HttpHeaders ({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${this.authService.user.token}`,
     });
    return headers
  }

  orders(){
    let options = this.createHeaders();
    const url = `${this._baseUrl}/orders`
    return this.http.get<Order[]>(url,{ headers: options})
    
       
  }

  updateOrder(idOrder:string, status:string){
    let options = this.createHeaders();
    let body = {
      status:status,
    }
    const url =`${this._baseUrl}/orders/${idOrder}`
    return this.http.put<Order>(url,body, { headers: options})
    .pipe(
      tap( resp => {
        if(resp.status==='Terminada'){
          this._orderUpdate = {
            userId: resp.userId,
            cliente: resp.cliente,
            products: resp.products,
            status: resp.status,
            dateEnry: resp.dateEnry,
            estado: resp.estado,
            _id: resp._id
          }
          this._ListOrderTerminada.push(this._orderUpdate);
        }
        
      }),
      map (resp=>resp.status),
      catchError(err=>of(err.error.message))
    )
  }

  Listorders(orders:Order[]){
    console.log(orders)
    this.getOrders=orders;
    
  }
}
