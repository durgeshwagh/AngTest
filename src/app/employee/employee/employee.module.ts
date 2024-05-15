import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
 import { EmployeeListComponent } from '../employee-list/employee-list.component';
 import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  
})
export class EmployeeModule { }
