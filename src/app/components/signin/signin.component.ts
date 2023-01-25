import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcoreAuthenticationService } from 'src/app/service/hardcore-authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit
{
  username='sakthi';
  pass1='123';
  errorMessage='Invalid Crediantials';
  inValidLogic=false;
  name='';
  ngOnInit(): void 
  {
    
  }
  handleLogin()
  {
    console.log("welcome ",this.username);
    if(this.hardcoreAuthenticationService.authenticate(this.username,this.pass1))
    {
      this.inValidLogic=false;
      this.route.navigate(['dashboard',this.username]); //navigates to welcome page
    }
    else
    {
      this.inValidLogic=true;
  
  }
}
constructor(private route:Router,public hardcoreAuthenticationService:HardcoreAuthenticationService){}
}