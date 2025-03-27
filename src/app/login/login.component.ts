import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  constructor(private _loginservice:LoginService ,private _router:Router){}

  login(){
    console.log(this.loginForm.value);
    this._loginservice.login(this.loginForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("login successful");
      sessionStorage.setItem('token',data.token)
      this._router.navigateByUrl("/dashboard/home");
    },(err:any)=>{
      alert("wrong credentials")
    }


    )
  }






}
