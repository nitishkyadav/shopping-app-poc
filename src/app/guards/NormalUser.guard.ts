import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { getAdminStatus, getUserState } from '../store/selectors/auth-selector';
import { AuthStateModal } from '../store/modals/store.modal';

@Injectable({ providedIn: 'root' })
export class NormalUsersGuard {
  isNormalUser: boolean;
  isAdmin: boolean | undefined;

  constructor(private store: Store, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.store.select(getUserState).subscribe((user) => {
      if ('isAdmin' in user) {
        this.isAdmin = user.isAdmin;
      } else {
        this.isAdmin = undefined;
      }
    });

    if (this.isAdmin === undefined) {
      this.router.navigateByUrl('/login');
      this.isNormalUser = false;
      // return false;
    }

    if (!this.isAdmin) {
      this.isNormalUser = true;
      // return true;
    }
    if (this.isAdmin) {
      this.router.navigateByUrl('/admin/products');
      this.isNormalUser = false;
      // return false;
    }

    return this.isNormalUser;
  }
}
