import { Component} from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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
  constructor( private fb:FormBuilder, private authService:AuthService) { }

  login(){
    console.log(this.formLogin.value)
   const {email, password} = this.formLogin.value;
   this.authService.login(email, password)
    .subscribe(resp=>{
      console.log(resp);
    })
  }

}
