import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-ctype',
  templateUrl: './add-edit-ctype.component.html',
  styleUrls: ['./add-edit-ctype.component.css']
})
export class AddEditCtypeComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() ctype:any;
  CustomerTypeId:string;
  CustomerTypeName:string;

  ngOnInit(): void {
    this.CustomerTypeId=this.ctype.CustomerTypeId;
    this.CustomerTypeName=this.ctype.CustomerTypeName;
  }

  addCustomerType(){
    var val = {CustomerTypeNameId:this.CustomerTypeId,
      CustomerTypeName:this.CustomerTypeName};
    this.service.addCustomerType(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCustomerType(){
    var val = {CustomerTypeId:this.CustomerTypeId,
      CustomerTypeName:this.CustomerTypeName};
    this.service.updateCustomerType(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
