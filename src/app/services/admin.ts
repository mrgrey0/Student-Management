import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../Constants/constants';
import { Endpoints } from '../Constants/endpoints';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Admin {
  constructor(private http: HttpClient, private router:Router){ }

  login(username:string, password:string){
    if(username === Constants.ADMIN_EMAIL){
      this.http.post(Constants.BASE_URL+Endpoints.ADMIN_LOGIN,{  email: username, password: password } ).subscribe(
        (res)=>{
          this.router.navigate(['admin'])
        },
        (err)=>{
          alert('There was an error check the console.')
          console.log(err)
        }
      )
    }

  }
  
}
