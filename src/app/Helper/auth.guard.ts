import { Injectable } from '@angular/core';
import { CanActivateChild,CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/Authentication/login.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild {

  constructor(private router:Router,private LogSer:LoginService) {


  }
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): boolean {
    if(localStorage.getItem('token')!=null)
      return true;
      else
      {
        this.router.navigateByUrl('/login');
        return false;
      }
  }
  canActivateChild(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): boolean {
    if(localStorage.getItem('token')!=null)
    {
      let roles=next.data['permittedRoles'] as Array<string>;
      if(roles)
      {
          if(this.LogSer.roleMatch(roles)) return true;
          else
          {
            this.router.navigateByUrl('/forbidden');
            return false;
          }
      }
      return true;
    }

      else
      {
        this.router.navigateByUrl('/login');
        return false;
      }
  }
}
