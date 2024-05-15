import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) { }


  getUsers(data:any){
    return this.http.get(`http://localhost:3000/users?userName=${data.userName}&password=${data.password}` ,
    {observe:'response'})
  }


}
