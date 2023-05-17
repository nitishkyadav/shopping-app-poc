import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserState } from '../store/selectors/auth-selector';
import { AuthModal } from '../store/modals/auth.modal';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  isLoggedIn: boolean;
  constructor(private store: Store, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.store.select(getUserState).subscribe((user: AuthModal | {}) => {
      if ('isAdmin' in user) {
        if (user.isAdmin) {
          this.router.navigateByUrl('/admin/products');
        } else {
          this.router.navigateByUrl('/products');
        }
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });

    return this.isLoggedIn;
  }
}
