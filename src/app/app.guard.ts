import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isHouse: boolean = false;

      if (route.params['ref']) {
        isHouse = true;
      } else {
        this.router.navigate(['/home']);
      }

      return isHouse;
  }

}
