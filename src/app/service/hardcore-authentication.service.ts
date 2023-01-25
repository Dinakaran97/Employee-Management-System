import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcoreAuthenticationService 
{

  constructor() {}
  authenticate(username:string,password:string)
  {
    if((username.trim()==='sakthi') && (password.trim()==='123'))
    {
      sessionStorage.setItem('authenticateUser',username);
      return true;
    }
    else
    {
      return false;
    }
  }
  public isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateUser')
    return !(user==null)
  }
  logout()
  {
    sessionStorage.removeItem('authenticateUser')
  }
}

