import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm !  : FormGroup ;
  logData :any
  constructor(private fb : FormBuilder , private router : Router , private userService : UserService){}
  ngOnInit(): void {
     this.loginForm =  this.fb.group({
      userName :['', Validators.required],
      password : ['', Validators.required]
     })
   
  
    

    
  }
  onSubmit(){
     
  //   this.userService.getUsers(this.loginForm.value).subscribe(( result:any)=>{
  //     console.log( result)
  //     alert('user login successfully')
  //     this.router.navigate(['/employee/employee-list'])
  //   } ,
  //   (err)=>{
       
  //      console.log(err,'something is wrong please check your username  and password')
  //   }
    
  // )
   
    this.logData.find((item:any)=>{
      if( this.loginForm.value.userName == item.userName  && this.loginForm.value.password == item.password )
        {
            console.log('user successfully login')
         
           
        }

        else if( this.loginForm.value.userName == item.userName  && this.loginForm.value.password != item.password )
          {
              alert('something is wrong please check username and password')
          }

          else if( this.loginForm.value.userName != item.userName  && this.loginForm.value.password == item.password )
            { 
                alert('something is wrong please check username and password')
            }
  

       
        } 
        
       
       
      
      )
  

     
  }
}
