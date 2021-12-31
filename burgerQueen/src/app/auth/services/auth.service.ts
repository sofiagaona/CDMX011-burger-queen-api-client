import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/interface.auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private baseUrl:string = environment.baseUrl;
  private _user!:User;

  get user(){
    return {...this._user}
  }
  constructor(private http: HttpClient) {
    this._user = JSON.parse(localStorage.getItem('user')!)|| {};
   }

  login(email:string, password:string){
   
    const url = `${this.baseUrl}/auth`
    const body={email, password}

    return this.http.post<AuthResponse>(url,body)
    .pipe(
      tap( resp => {
        if(resp.ok){
          this._user = {
            name:resp.name!,
            id:resp.id!,
            token:resp.jwtToken!,
            roles:resp.roles!,
          }
        }
      }),
      map (resp=>resp.ok),
      catchError(err=>of(err.error.msj))
    )
  }
}
