import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseURL:string="http://localhost:53535/api/user/"

  constructor(private httpClient:HttpClient) { }

  public login(email:string,password:string)
  {
    const body={
      Email:email,
      Password:password
    }
    return this.httpClient.post<ResponseModel>(this.baseURL+"Login",body);

  }

  public register(fullName:string,email:string,password:string)
  {
    const body={
      FullName:fullName,
      Email:email,
      Password:password
    }
    return this.httpClient.post<ResponseModel>(this.baseURL+"RegisterUser",body);

  }

  public getAllUser()
  {
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${JSON.parse(JSON.stringify(localStorage.getItem("userInfo")))?.token}` 
    });
    return this.httpClient.get<ResponseModel>(this.baseURL+"GetAllUser",{headers:headers});

  }

}
