import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

 

  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'employee',
    loadChildren:()=> import("../app/employee/employee/employee.module").then((m)=>m.EmployeeModule) 
 },
 {
  path:'**',
  pathMatch:'full',
  redirectTo:'login',

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
