import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResponsProducts, Product, Comanda, ToPay, OrderResponse, Order } from '../orders/interfaces/interfaces.orders';
import { AuthService } from '../../auth/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {

private _historialMenu: string[] = ["Desayuno", "Comida"]
private _baseUrl: string = environment.baseUrl;
public productsMenu: Product[]=[];
public precio:number=0;
public idProduct:string=""
private _comanda: Comanda[]=[];
private _order!:Order;
private _listOrders:Order[]=[];
public subtotales:number=0;
private _toPay:ToPay={
   subTotal:0,
   iva(subtotales){return subtotales * 0.16},
   Total(subtotales, iva){return subtotales + iva}
}
public addSubTotal!:number[];
public  products:Comanda={
  productId:"",
  qty:0,
  precio:0,
  name:"",
  subTotal:0
}

get historialMenu(){
  return [...this._historialMenu]
}

get comanda(){
  
  return [...this._comanda]
}

get toPay(){
  return {...this._toPay}
}

get listOrder(){
  return [...this._listOrders]
}

  constructor(private http:HttpClient, private authService: AuthService) { 
    this.productsMenu= JSON.parse(localStorage.getItem('productsMenu')! )|| [];
    this._comanda=JSON.parse(localStorage.getItem('comanda')!)|| [];
    // falta local storage de topay
    this._listOrders=JSON.parse(localStorage.getItem('listOrder')!)||[];

  }

  createRequestOption(){
   const headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.authService.user.token}`,
    });
   return headers
 }


  buscarMenu(query:string){
    let options = this.createRequestOption();
     let params = new HttpParams()
        .set('type', `${query.toLocaleLowerCase()}`);
      
    const url = `${this._baseUrl}/products`
    return this.http.get<ResponsProducts>(url,{ headers: options, params: params  })
       .subscribe(resp=>{ 
         this.productsMenu=resp.products;
         localStorage.setItem('productsMenu', JSON.stringify(this.productsMenu))
        
       })
  }

  addComanda(precio:number, nombre:string, id:string, contador:number,subTotal:number){
   if (this._comanda.length ===0){
    this._comanda.push(this.products)
   }

   for(let i=0; this._comanda.length>i;i++){
    
       if(this._comanda[i].productId===id){
        this._comanda[i].qty=contador;
        this._comanda[i].subTotal=subTotal
        this.addToPay()
        return 
      }
     else{
       
      this.products = {
        productId:id,
        qty:contador,
        precio:precio,
        name:nombre,
        subTotal:subTotal
      }
      
    }
  }
    this._comanda.push(this.products)
   localStorage.setItem('comanda', JSON.stringify(this._comanda));
   this.addToPay()
  }

  addToPay(){
    this.addSubTotal = this._comanda.map(element=>{return element.subTotal})
    let subtotales = this.addSubTotal.reduce((a,b)=>{return a+b})
      this._toPay = {
       subTotal:subtotales,
       iva(subTotal){
        let sumaTotal = subTotal * 0.16
        return Math.round(sumaTotal)
       },
       Total(subtotales,iva){
         return subtotales + iva
       }
      }
    }

  createOrder(cliente:string, products:Comanda[]){
    products.splice(0,1)
    const url = `${this._baseUrl}/orders`
    let options = this.createRequestOption();
    let body={}
    if(products.length!==0){
    body = {
          cliente:cliente,
          products:products
    }
    }
    return this.http.post<OrderResponse>(url, body, { headers: options })
    .pipe(
      tap( resp => {
        if(resp.orders){
          this._order = {
            userId: resp.orders.userId,
            cliente: resp.orders.cliente,
            products: resp.orders.products,
            status: resp.orders.status,
            dateEnry: resp.orders.dateEnry,
            estado: resp.orders.estado,
            _id: resp.orders._id
          }
          this.addOrder(this._order);
        }
        
      }),
      map (resp=>resp.orders?.status),
      catchError(err=>of(err.error.message))
    )

  }
 
  addOrder(order:Order){
    this._listOrders.push(this._order);
    localStorage.setItem('listOrder', JSON.stringify(this._listOrders));
  }
}


