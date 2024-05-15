import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
export interface PeriodicElement {
  ID: Number;
  Name: string;
  Email: string;
  Department: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   constructor(private employeeService : EmployeeService , private router :Router ){}
    empData :any
    employeeData :any
  displayedColumns: string[] = ['ID', 'Name', 'Email', 'Department', 'Position' , 'Joining Date','Options'];
  dataSource :any;

  ngOnInit(): void {
      this.getData();
     
     
  }

  createEmployee(){
    this.router.navigate(['/employee/add-employee'])
  }

  getData(){
    this.employeeService.getEmployee().subscribe((data)=>{
      console.log(data)
      this.dataSource =  data ;
    })
  }

  onEdit(id :any){
   this.router.navigate(['employee/add-employee',id])
  } 

  onDelete(id :any){
      this.employeeService.deleteEmployee(id).subscribe((data)=>{
        alert('successfully deleted');
        this.getData();
      })
  }


}
