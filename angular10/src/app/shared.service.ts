import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http:HttpClient) { }

  getCtypeList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/customertype');
  }

  addCustomerType(val:any){
    return this.http.post(this.APIUrl+'/CustomerType',val);
  }

  updateCustomerType(val:any){
    return this.http.put(this.APIUrl+'/CustomerType',val);
  }

  deleteCustomerType(val:any){
    return this.http.delete(this.APIUrl+'/CustomerType/'+val);
  }


  getCustomerList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Customer');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/Customer',val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/Customer',val);
  }

  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl+'/Customer/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Customer/SaveFile',val);
  }

  getAllCustomerTypeNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Customer/GetAllCustomerTypeNames');
  }

}
