import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from '../../components/login/login';
import { MainLayoutModule } from '../main-layout/main-layout-module';
import { SignUp } from '../../components/sign-up/sign-up';
import { ForgotPassword } from '../../components/forgot-password/forgot-password';
import { Courses } from '../../components/admin/courses/courses';

const routes: Routes = [
  {path:'', component:Login},
  {path:'admin',component:Courses},
  {path:'signup',component:SignUp},
  {path:'forgotpassword', component:ForgotPassword},
  {path:'secondMain', loadChildren:()=>import('../main-layout/main-layout-module').then((m)=>MainLayoutModule)}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLayoutRoutingModule { }
