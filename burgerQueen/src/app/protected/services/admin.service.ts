import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResponsProducts} from '../orders/interfaces/interfaces.orders';
import { User } from '../../auth/interfaces/interface.auth';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _baseUrl:string=environment.baseUrl
  private _getUser:User[]=[]
  private _getProducts:ResponsProducts[]=[]

  get getUsers(){
    return this._getUser
  }

  get getProducts(){
    return this._getProducts
  }
  constructor(private authService:AuthService, private http:HttpClient) { }

  createRequestOption(){
    const headers = new HttpHeaders ({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${this.authService.user.token}`,
     });
    return headers
  }

  getUser(){
    console.log('entro2')
   let option = this.createRequestOption();
   const url = `${this._baseUrl}/users`
   return this.http.get<User[]>(url,{headers:option})
    
  
  }

  getProduct(){
    let option = this.createRequestOption();
   const url = `${this._baseUrl}/products`
   return this.http.get<ResponsProducts>(url,{headers:option})
    .subscribe(resp=>{
      this._getProducts.push(resp)
      console.log(this._getProducts)
    })
    
  }
}
