import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this.formBuilder.group({
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log("On submit")
    let email=this.loginForm.controls["email"].value;
    let password=this.loginForm.controls["password"].value;
    this.userService.login(email,password).subscribe((data:any)=>{
      if(data.ResponseCode==1){
        localStorage.setItem("userInfo",JSON.stringify(data.dateSet));
        this.router.navigate(["/customer"]);
      }

      console.log("response",data);

    },error=>{
      console.log("error",error)
    })
  }

}
