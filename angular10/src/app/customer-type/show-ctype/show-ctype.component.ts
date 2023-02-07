import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-ctype',
  templateUrl: './show-ctype.component.html',
  styleUrls: ['./show-ctype.component.css']
})
export class ShowCtypeComponent implements OnInit {

  constructor(private service:SharedService) { }

  CustomerTypeList:any=[];

  ModalTitle:string;
  ActivateAddEditCtypeComp:boolean=false;
  ctype:any;

  CustomerTypeIdFilter:string="";
  CustomerTypeNameFilter:string="";
  CustomerTypeListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCtypeList();
  }

  addClick(){
    this.ctype={
      CustomerTypeId:0,
      CustomerTypeName:""
    }
    this.ModalTitle="Add CustomerType";
    this.ActivateAddEditCtypeComp=true;

  }

  editClick(item){
    this.ctype=item;
    this.ModalTitle="Edit CustomerType";
    this.ActivateAddEditCtypeComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteCustomerType(item.CustomerTypeId).subscribe(data=>{
        alert(data.toString());
        this.refreshCtypeList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCtypeComp=false;
    this.refreshCtypeList();
  }


  refreshCtypeList(){
    this.service.getCtypeList().subscribe(data=>{
      this.CustomerTypeList=data;
      this.CustomerTypeListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CustomerTypeIdFilter = this.CustomerTypeIdFilter;
    var CustomerTypeNameFilter = this.CustomerTypeNameFilter;

    this.CustomerTypeList = this.CustomerTypeListWithoutFilter.filter(function (el){
        return el.CustomerTypeId.toString().toLowerCase().includes(
          CustomerTypeIdFilter.toString().trim().toLowerCase()
        )&&
        el.CustomerTypeName.toString().toLowerCase().includes(
          CustomerTypeNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.CustomerTypeList = this.CustomerTypeListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
