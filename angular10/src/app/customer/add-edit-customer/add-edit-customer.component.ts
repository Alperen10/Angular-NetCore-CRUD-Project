import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() customer:any;
  CustomerId:string;
  CustomerName:string;
  CustomerType:string;
  DateOfJoining:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  CustomerTypesList:any=[];

  ngOnInit(): void {
    this.loadCustomerTypeList();
  }

  loadCustomerTypeList(){
    this.service.getAllCustomerTypeNames().subscribe((data:any)=>{
      this.CustomerTypesList=data;

      this.CustomerId=this.customer.CustomerId;
      this.CustomerName=this.customer.CustomerName;
      this.CustomerType=this.customer.CustomerType;
      this.DateOfJoining=this.customer.DateOfJoining;
      this.PhotoFileName=this.customer.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addCustomer(){
    var val = {CustomerId:this.CustomerId,
      CustomerName:this.CustomerName,
      CustomerType:this.CustomerType,
              DateOfJoining:this.DateOfJoining,
            PhotoFileName:this.PhotoFileName};

    this.service.addCustomer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCustomer(){
    var val = {CustomerId:this.CustomerId,
      CustomerName:this.CustomerName,
      CustomerType:this.CustomerType,
    DateOfJoining:this.DateOfJoining,
  PhotoFileName:this.PhotoFileName};

    this.service.updateCustomer(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

}

