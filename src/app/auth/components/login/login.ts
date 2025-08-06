import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../../services/admin';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private router: Router, private admin:Admin) { }
  username!:string; password!:string
  logIn(){
    this.admin.login(this.username, this.password);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

}
