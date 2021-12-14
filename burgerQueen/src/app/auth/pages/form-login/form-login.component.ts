import { Component} from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, Routes } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent  {

  formLogin: FormGroup= this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(6)]]
  })
  constructor( private fb:FormBuilder, private authService:AuthService, private router:Router) { }

  login(){
    
   const {email, password} = this.formLogin.value;
   this.authService.login(email, password)
    .subscribe(ok=>{
      console.log(ok);
      console.log(this.authService.user)
      if(ok===true){
        localStorage.setItem('user',JSON.stringify(this.authService.user) );
        this.router.navigateByUrl('/orders')
      }
      else{
      
        Swal.fire({
          title: 'Error!',
          text: ok,
          confirmButtonText: 'OK'
        })
      }
    })
  }

}
