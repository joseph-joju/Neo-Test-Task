import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Params, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  id: any;
  result: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){

  }
  canActivate(  
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    this.result = window.location.href.split('/').reverse()[0]   
     if(parseInt(this.result) %2 == 0 ){
      return true
     }
     else{
      return false
     }
  }
  
}
