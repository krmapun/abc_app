import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private AFauth: AngularFireAuth ,
               private router: Router,
               private storage: Storage) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.storage.get('dataUser').then((val) => {
        console.log('Your age is', val);
        if(isNullOrUndefined(val)){
          this.router.navigate(['/signup']);
          return false;
        } else{
          return true;
        }
      });
      // if(window.sessionStorage.getItem('dataUser')){
      //   return true;
      // } else{
      //   this.router.navigate(['/signup']);
      //   return false;
      // }
    }
}
