import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Params, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  id: string;
  constructor(
    private routes: ActivatedRoute,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.routes.queryParams.subscribe((param: Params)=>{
        this.id = param["id"]
        console.log(param);
        
        console.log(this.id);
        
      })
      return true
      if (this.id  === '14'){
        this.router.navigate([''])
        return true
      }
      return false
  }
  
}
