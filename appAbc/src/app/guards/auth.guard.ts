import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

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
      return this.AFauth.authState.pipe(map( auth => {
        // 
        //console.log(auth.uid);
        if (isNullOrUndefined(auth)) {
          this.router.navigate(['/signin']);
          return false;
        } else {
          this.storage.set('idusu', auth.uid);
          return true;
        }
      }));
    }
}
