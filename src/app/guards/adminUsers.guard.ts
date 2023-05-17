import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { getAdminStatus } from '../store/selectors/auth-selector';
import { getUserState } from '../store/selectors/auth-selector';

@Injectable({ providedIn: 'root' })
export class AdminUsersGuard {
  isAdmin: boolean;
  isLoggedIn: boolean;

  constructor(private store: Store, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.store.select(getAdminStatus).subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });

    if (!this.isAdmin) {
      this.router.navigateByUrl('/products');
    }
    return this.isAdmin;
  }
}
