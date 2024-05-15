import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

const routes: Routes = [

   {
    path:'add-employee' ,
    component: AddEmployeeComponent
   },

   {
    path:'employee-list',
    component:EmployeeListComponent
   },
   {
    path:'add-employee/:id' ,
    component: AddEmployeeComponent
   },
   {
    path:'**',
    redirectTo:'employee-list',
   pathMatch:'full'
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
