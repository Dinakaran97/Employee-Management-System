import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcoreAuthenticationService } from './hardcore-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate
{

  constructor(private hardcoreAuthenticationService:HardcoreAuthenticationService,private router:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
    // throw new Error('Method not implemented.');
    if(this.hardcoreAuthenticationService.isUserLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login'])
      return false;
    }
  }
}
