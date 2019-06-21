import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  let login=localStorage.getItem('login');
  if(login){
    return true;
  }
  else{
    alert("請先登入");
    //this.router.navigate(['/login']);
  }

}


}
