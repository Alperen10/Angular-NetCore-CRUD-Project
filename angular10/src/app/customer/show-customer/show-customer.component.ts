import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  constructor(private service:SharedService) { }

  CustomerList:any=[];

  ModalTitle:string;
  ActivateAddEditCustomerComp:boolean=false;
  customer:any;

  ngOnInit(): void {
    this.refreshCustomerList();
  }

  addClick(){
    this.customer={
      CustomerId:0,
      CustomerName:"",
      CustomerType:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCustomerComp=true;

  }

  editClick(item){
    console.log(item);
    this.customer=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCustomerComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteCustomer(item.CustomerId).subscribe(data=>{
        alert(data.toString());
        this.refreshCustomerList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCustomerComp=false;
    this.refreshCustomerList();
  }


  refreshCustomerList(){
    this.service.getCustomerList().subscribe(data=>{
      this.CustomerList=data;
    });
  }

}

