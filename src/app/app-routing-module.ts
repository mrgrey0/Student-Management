import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren:()=>
    import('./auth/auth-module').then(
      (m)=> m.AuthModule
    )
  },
  {
    path: 'admin', loadChildren: ()=> 
      import('./admin-dashboard/admin-dashboard-module').then(
        (m)=> m.AdminDashboardModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
