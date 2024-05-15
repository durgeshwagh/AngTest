import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls:  ['./add-employee.component.css'],
 
})
export class AddEmployeeComponent implements OnInit {
  employeeForm !: FormGroup ;
  currentID :any
  employeDetails :any
   constructor( private fb : FormBuilder , private employeeService : EmployeeService , private router :Router , private route :ActivatedRoute){
    
   }
  ngOnInit(): void {
      this.employeeForm = this.fb.group({
          Name :  ['',Validators.required] ,
          Email : ['',Validators.compose([Validators.required, Validators.email])],
          Department : ['', Validators.required],
          Position : ['', Validators.required],
          JoiningDate : ['', Validators.required],
      })

      this.route.params.subscribe((params:Params)=>{
        this.currentID = params['id']
        })

      if(this.currentID != null){
        this.getDataByID();
      }

  

   

  
     

  }

  listEmployee(){
    this.router.navigate(['/employee/employee-list'])
  }

  getDataByID(){
   
      this.employeeService.getDataById(this.currentID).subscribe((data)=> {
        this.employeDetails =  data ;
        console.log(this.employeDetails)
       
        this.employeeForm.get('Name')?.patchValue(this.employeDetails.Name);
        this.employeeForm.get('Email')?.patchValue(this.employeDetails.Email);
        this.employeeForm.get('Department')?.patchValue(this.employeDetails.Department);
        this.employeeForm.get('Position')?.patchValue(this.employeDetails.Position);
        this.employeeForm.get('JoiningDate')?.patchValue(this.employeDetails.JoiningDate)
        })
  }


  onSubmit(){
    this.employeeService.addEmployee(this.employeeForm.value).subscribe((data)=>{
      console.log(data) ;
      alert('data has successfully added')
      this.router.navigate(['/employee/employee-list'])

    })
    console.log('employee form ',this.employeeForm.value)

  }

  onUpdate(id:any){
    this.employeeService.updateEmployeeById(id , this.employeeForm.value).subscribe((data)=>{
      console.log(data);
      alert('Data Successfully Updated')
    })
  }
}
