import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
    if (localStorage.getItem('currentUser')) {  
        return true;  
    }  
    this.router.navigate(['']);  
    return false;  
}  

}
